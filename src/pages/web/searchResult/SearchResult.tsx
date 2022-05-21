import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CommerceServices } from "service/commerceServices";
import { Card, Footer, ModalAlert, SearchBox } from "components";
import { MenuWeb } from "layouts";
import { useSearchResult } from "hook/useSearchResult";
import useTitle from 'hook/UI/useTitle';
import {scrollToTop} from 'utils/utils';

interface RouterParams {
   term: string;
}

const SearchResultPage = () => {
   scrollToTop();
   const { term } = useParams<RouterParams>();
   const { searchCommerce } = CommerceServices();
   const {
      data,
      setData,
      searchTerm,
      reload,
      setReload,
      handleSearch,
      handleViewCommerce,
      handleValidateSameCommerce,
      handleChange,
      categoryKey,
      districtKey,
      showModal,
      setShowModal,
      temporalCommerce
   } = useSearchResult(term);

   useTitle("Resultado de búsqueda");
   
   useEffect(() => {
      (async () => {
         await searchCommerce(districtKey, categoryKey, term).then(res => {
            setData(res.data);
         }).catch(function (error) {
            console.log(error.response.data);
         })
      })();

      setReload(false);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [reload]);

   return (
      <>
         <MenuWeb/>
         <div className="container-fluid">
            <div className="row mt90">
               <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12">
                  <div className="row m-1">
                     <div className="col-sm-8 offset-sm-2">
                        <SearchBox title={ "Encuentra tu próxima aventura gastronómica" }
                                   value={ searchTerm }
                                   onChange={ handleChange }
                                   onKeyPress={ e => e.key === "Enter" && handleSearch(e) }
                                   setReload={ setReload } />
                     </div>
                  </div>
                  <div className="row mb-5 m-1">
                     {
                        data.map(dat => (
                           <div key={ dat.commerceKey } className="col-xl-4 col-lg-4 col-md-6">
                              <Card data={ dat } onClick={ () => handleValidateSameCommerce(dat.commerceKey) } />
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
         <ModalAlert 
            showModal={ showModal } 
            setShowModal={ setShowModal } 
            label="Si, limpiar"
            title="Cambio de comercio" 
            message="Si cambia de comercio se limpiará su carrito de compra" 
            onClick={ () => handleViewCommerce(temporalCommerce) } 
         />
         <Footer />
      </>
   );
};

export default SearchResultPage;
