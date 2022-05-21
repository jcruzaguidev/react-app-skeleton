import {useEffect, useState} from 'react';
import {ReservationsData} from 'interfaces/reservations.interface';
import {ReservationsServices} from 'service/reservationsServices';
import {getLocaleStorage} from 'utils/session';
import {MenuWeb} from 'layouts';
import ReservationCard from 'components/reservationCard/ReservationCard';
import {Alert, Footer, Title} from 'components';

const Reservations = () => {
   const userKey = getLocaleStorage("enuna_user_key");
   const { reservationHistory } = ReservationsServices();
   const [reservations, setReservations] = useState<ReservationsData[]>([]);

   useEffect(() => {
      (async () => {
         await reservationHistory(userKey).then(res => {
            if (res.status === "success") {
               setReservations(res.data);
            } else {
               //TODO: Mensaje de error
            }
         })
      })();
   }, [reservationHistory, userKey]);

   return (
      <>
         <MenuWeb />
         <div className="container-fluid">
            <div className="row mbox">
               <div className="col-xxl-10 offset-xxl-1 col-xl-10 offset-xl-1 col-lg-12 col-md-12">
                  <div className="row">
                     <div className="col-12 mb-3">
                        <Title type="md">Historial de Reservas</Title>
                     </div>
                     {
                        reservations.length > 0
                        ? reservations.map(reservation => (
                           <div className="col-sm-6" key={ reservation.reservationKey }>
                              <ReservationCard item={ reservation } clicked={ true } />
                           </div>
                        ))
                        : <div className="col-12">
                           <Alert type="warning form-control" title="No cuenta con reservas" />
                        </div>
                     }
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Reservations;
