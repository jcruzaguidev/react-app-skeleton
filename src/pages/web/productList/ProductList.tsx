import { useEffect } from 'react';
import { Alert, ButtonFloat, ProductCard } from "components";
import { MenuWeb } from "layouts";
import { ProductServices } from "service/productServices";
import { useProductList } from "hook/useProductList";
import useTitle from 'hook/UI/useTitle';
import {scrollToTop} from 'utils/utils';
import {useHistory} from 'react-router-dom';

const WARNING_STATE = {
   type:"warning",
   message: "No se encontraron platos del comercio"
}

const ProductList = () => {
   useTitle("Listado de Productos");
   scrollToTop();
   const history = useHistory();
   const { searchProducts } = ProductServices();
   const {
      commerce,
      products,
      setProducts,
      alert,
      setAlert,
      onProductCountChange,
      handleSubmit
   } = useProductList();

   useEffect(() => {
      (async () => {
         await searchProducts(commerce.commerceKey).then(res => {
            res.data.length ? setProducts(res.data) : setAlert(WARNING_STATE);
         })
      })();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleContinueShooping = () => {
      history.push("/booking");
   }

   return (
      <>
         <MenuWeb/>
         <div className="container-fluid">
            <div className="row mt90 mb50">
               <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-12 col-md-12">
                  <div className="row">
                     <div className="col-12 logo-top">
                        <img 
                           onClick={ handleContinueShooping } 
                           style={{ maxWidth:100, cursor:"pointer" }} 
                           src={ process.env.PUBLIC_URL + "logo/" + commerce.commerceKey + ".jpg" } 
                           alt="EnUna"
                        />
                        <h3>{ commerce.commerceName }</h3>
                     </div>
                  </div>
                  <div className="row mb-5 mt-3">
                     {
                        products.length > 0
                           ? (
                              products.map((prod, index) => (
                                 <div key={index} className="col-sm-6">
                                    <ProductCard product={ prod } onChange={ onProductCountChange } />
                                 </div>
                              ))
                           ) 
                           : <Alert type={ alert.type } title={ alert.message } />
                        }
                  </div>
               </div>
               <ButtonFloat title="IR AL CARRITO" onClick={handleSubmit} />
            </div>
         </div>
      </>
   );
};

export default ProductList;
