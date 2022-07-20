import {useEffect, useState} from 'react';
import {ReservationsServices} from 'service/reservationsServices';
import {Commerce, Menu, Pay} from 'interfaces/reservations.interface';
import {useHistory} from 'react-router-dom';

const INITIAL_COMMERCE = {
   reservationKey: "",
   day: '',
   time: '',
   observation: "",
   commerceKey: "",
   commerceName: "",
   regionName: "",
   districtName: "",
   commerceAddress: "",
   reservationRegister: "",
   reservationStatus: "",
   colorStatus: "",
   persons: ""
}

const INITIAL_PAY = {
   subTotal: "0",
   service: "0",
   tips: "0",
   total: "0"
}


export const useReservationDetail = (key:string) => {
   const history = useHistory();
   const { reservationDetail } = ReservationsServices();
   const [commerce, setCommerce] = useState<Commerce>(INITIAL_COMMERCE);
   const [menu, setMenu] = useState<Menu[]>([]);
   const [pay, setPay] = useState<Pay>(INITIAL_PAY);

   useEffect(() => {
      let isMounted = true;  

      if (isMounted) {
         (async () => {
            await reservationDetail(key).then((res) => {
               if (res.status === 'success') {
                  setCommerce(res.data.commerce);
                  setPay(res.data.pay);
                  setMenu(res.data.menu);
               } else {
                  //TODO: Mensaje de error
               }
            });
         })();
      }

      return () => { isMounted = false };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleBack = () => {
      history.push("/reservations");
   }

   return {
      commerce, 
      menu, 
      pay,
      handleBack
   }
};
