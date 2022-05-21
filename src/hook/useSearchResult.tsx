import { ChangeEvent, FormEvent, useState } from "react";
import { CommerceInfo } from "../interfaces/commerce.interface";
import { getLocaleStorage, removeLocaleStorage, setLocalStorage } from "../utils/session";
import { useHistory } from "react-router-dom";

export const useSearchResult = (term:string) => {
   const history = useHistory();
   const [filterDescription, setFilterDescription] = useState(
      getLocaleStorage("enuna_filter_category_text") + " - " + getLocaleStorage("enuna_filter_district_text")
   );
   const [data, setData] = useState<CommerceInfo[]>([]);
   const [searchTerm, setSearchTerm] = useState(term);
   const [reload, setReload] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const [temporalCommerce, setTemporalCommerce] = useState("");

   const districtKey = getLocaleStorage("enuna_filter_district") ? getLocaleStorage("enuna_filter_district") : "*";
   const categoryKey = getLocaleStorage("enuna_filter_category") ? getLocaleStorage("enuna_filter_category") : "*";

   const handleValidateSameCommerce = (commerceKey: string) => {
      setTemporalCommerce(commerceKey);
      setShowModal(true);

      if (!getLocaleStorage("enuna_commerce_data")) {
         setShowModal(true);
         return;
      }

      if (JSON.parse(getLocaleStorage("enuna_commerce_data")).commerceKey === commerceKey) {
         handleViewCommerce(commerceKey);
      } else {
         setShowModal(true);
      }
   }

   const handleViewCommerce = (commerceKey: string) => {
      setShowModal(false);
      removeLocaleStorage("enuna_shopping_cart");

      const index = data.findIndex(x => x.commerceKey === commerceKey);
      setLocalStorage("enuna_commerce_data", JSON.stringify(data[index]));
      history.push(`/booking`);
   };

   const handleSearch = (e:FormEvent<HTMLInputElement>) => {
      history.push(`/search/${e.currentTarget.value}`);
      setReload(true);
   };

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.currentTarget.value);
   };


   return {
      filterDescription,
      setFilterDescription,
      data,
      setData,
      searchTerm,
      setSearchTerm,
      reload,
      setReload,
      handleSearch,
      handleViewCommerce,
      handleValidateSameCommerce,
      handleChange,
      districtKey,
      categoryKey,
      showModal,
      setShowModal,
      temporalCommerce
   };
}
