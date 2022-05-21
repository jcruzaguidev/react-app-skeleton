import { FormEvent, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { MenuWeb } from "layouts";
import { CategoryCard, Footer, SearchBox } from "components";
import useTitle from 'hook/UI/useTitle';
import {MasterServices} from 'service/masterServices';
import {CategoryData} from 'interfaces/master.interface';
import {setLocalStorage} from 'utils/session';

const Home = () => {
   const history = useHistory();
   const { category } = MasterServices();
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [reload, setReload] = useState(false);
   const [categoryData, setCategoryData] = useState<CategoryData[]>([]);

   useTitle("Inicio");

   const handleSearch = (e:FormEvent<HTMLInputElement>) => {
      history.push(`/search/${e.currentTarget.value}`);
   };

   useEffect(() => {
      (async () => {
         await category().then(res => {
            setCategoryData(res.data);
         });
      })();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleSearchByCategory = (categoryKey:string) => {
      setLocalStorage("enuna_filter_category", categoryKey);

      const indexC = categoryData.findIndex( x => x.categoryKey === categoryKey);
      setLocalStorage("enuna_filter_category_text", categoryData[indexC].categoryName);

      history.push(`/search/*`);
   }

   return (
      <>
         <MenuWeb/>
         <div className="container-fluid">
            <div className="row mbox">
               <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 back-trans">
                  <div className="row m-1 back-trans">
                     <div className="col-sm-8 offset-sm-2 back-trans">
                        <SearchBox title={ "Encuentra tu próxima aventura gastronómica" }
                                   onKeyPress={ e => e.key === "Enter" && handleSearch(e) }
                                   setReload={ setReload } />
                     </div>
                  </div>
                  <div className="row mb-5">
                     {
                        categoryData && categoryData.map(item => (
                           <div key={ item.categoryKey } className="col-xl-4 col-lg-4 col-md-6">
                              <CategoryCard data={ item } onClick={ () => handleSearchByCategory(item.categoryKey) } />
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Home;
