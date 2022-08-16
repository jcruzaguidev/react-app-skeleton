import api from "./http-commons";
import { Products } from "../interfaces/product.interface";

export const ProductServices = () => {

   const searchProducts = async (commerceKey: string) => {
      const res = await api.get(`/commerce/menu/${commerceKey}`);
      const result: Products = res.data;
      return result;
   }

   return {
      searchProducts
   }
}
