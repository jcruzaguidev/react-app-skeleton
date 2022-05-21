import api from "./http-commons";
import { ReservationDetail, Reservations } from "interfaces/reservations.interface";

export const ReservationsServices = () => {

   const reservationHistory = async (userKey: string) => {
      const res = await api.get(`/history/reservation/${ userKey }`);
      const result:Reservations = res.data;
      return result;
   }

   const reservationDetail = async (reservationKey: string) => {
      const res = await api.get(`/detail/reservation/${ reservationKey }`);
      const result:ReservationDetail = res.data;
      return result;
   }

   return {
      reservationHistory,
      reservationDetail
   }
}

