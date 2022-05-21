import api from "./http-commons";
import {CheckOutData, CheckOutResult} from "interfaces/checkout.interface";

export const CheckoutServices = () => {
   
   const temporalReservation = async (data:CheckOutData) => {
      const res = await api.post('/temporal/reservation', JSON.stringify(data));
      const result:CheckOutResult = res.data;
      return result;
   };
   
   return {
      temporalReservation
   }
}
