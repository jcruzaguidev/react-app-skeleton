import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useProductList} from "hook/useProductList";
import useTitle from 'hook/UI/useTitle';
import { CheckoutCard, Alert, Footer } from 'components';
import CheckOutTotal from './CheckOutTotal';
import { MenuWeb } from 'layouts';
import {scrollToTop} from 'utils/utils';
import {getLocaleStorage} from 'utils/session';
import {CommerceInfo} from 'interfaces/commerce.interface';

const CheckOut = () => {
   useTitle("CheckOut");
   scrollToTop();
   const history = useHistory();
   const { shoppingCart, onProductCountChange } = useProductList();
   const [total, setTotal] = useState(0);
   const [subTotal, setSubTotal] = useState(0);
   const [reload, setReload] = useState(false);
   const commerce:CommerceInfo = getLocaleStorage("enuna_commerce_data") ? JSON.parse(getLocaleStorage("enuna_commerce_data")) : [];

   useEffect(() => {
      let total = 0;
      
      Object.entries(shoppingCart).map(([key, product]) => (
         total = total + (+product.count * +product.menuPrice)
      ))

      if (total === 0) {
         setTotal(0);
         setSubTotal(0);
      } else {
         setTotal(+total.toFixed(1) + 10);
         setSubTotal(+total.toFixed(1));
      }

      setReload(false);
      //eslint-disable-next-line react-hooks/exhaustive-deps
   }, [reload]);

   const handleContinueShooping = () => {
      history.push("/products");
   }

   const RenderCardDetail = () => {
      return (
         <>
            <div className="col-sm-5 offset-sm-2">
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
               <div className="row">
                  {
                     Object.entries((shoppingCart)).length
                     ? (
                        Object.entries(shoppingCart).map(([key, product]) => (
                           <div key={ key } className="col-12">
                              <CheckoutCard product={ product } onChange={ onProductCountChange } setReload={ setReload } />
                           </div>
                        ))
                     ) 
                     : <Alert type="warning" title="Carrito vacío" />
                  }
               </div>
            </div>
            <div className="col-sm-3">
               <CheckOutTotal total={ total } subTotal={ subTotal } />
            </div>
         </>
      );
   }

   const RenderCardEmpty = () => {
      return (
         <div className="col-sm-8 offset-sm-2">
            <Alert title="Carrito vacío" type="warning form-control" />
         </div>
      );
   }

   return (
      <>
         <MenuWeb />
         <div className="container-fluid">
            <div className="row mbox">
               {
                  getLocaleStorage("enuna_commerce_data") ? <RenderCardDetail /> : <RenderCardEmpty />
               }
            </div>
         </div>
         <Footer />
      </>
   );
};

export default CheckOut;
