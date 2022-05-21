import api from "./http-commons";
import { Category, District, Region } from "../interfaces/master.interface";

export const MasterServices = () => {

   const region = async () => {
      const res = await api.get(`/active/region`);
      const result: Region = res.data;
      return result;
   }

   const district = async (regionKey = "*") => {
      const { data } = await api.get(`/active/district/${ regionKey }`);
      const result: District = data;
      return result;
   }

   const category = async () => {
      const { data } = await api.get(`/active/category`);
      const result: Category = data;
      return result;
   }

   return {
      region,
      district,
      category
   }
}
