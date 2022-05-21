import api from "./http-commons";
import { CommerceSearch, DaysAvailable, HoursAvailable } from "../interfaces/commerce.interface";

export const CommerceServices = () => {

   const searchCommerce = async (districtKey:string, categoryKey:string, term: string) => {
      const res = await api.get(`/commerce/${ districtKey }/${ categoryKey }/${ term }`);
      const result: CommerceSearch = res.data;
      return result;
   }
   
   const searchDaysAvailable = async (commerceKey:string) => {
      const res = await api.get(`/days/available/${ commerceKey }`);
      const result: DaysAvailable = res.data;
      return result;
   }
   
   const searchHoursAvailable = async (commerceKey:string, persons:string, day:string) => {
      const res = await api.get(`/hours/available/${ commerceKey }/${ persons }/${ day }`);
      const result: HoursAvailable = res.data;
      return result;
   }

   return {
      searchCommerce,
      searchDaysAvailable,
      searchHoursAvailable
   }
}
