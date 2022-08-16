import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getLocaleStorage, setLocalStorage } from 'utils/session';
import { CommerceServices } from "service/commerceServices";
import { useBooking } from "hook/useBooking";
import useTitle from 'hook/UI/useTitle';
import { useForm } from "hook/useForm";
import { ButtonFloat, ModalAlert, P, Select, Title } from "components";
import BookingImage from "./BookingImage";
import { MenuWeb } from "layouts";
import { scrollToTop } from 'utils/utils';

const INITIAL_STATE = {
   persons: getLocaleStorage("enuna_booking") ? JSON.parse(getLocaleStorage("enuna_booking")).persons : "",
   commerceDayKey: getLocaleStorage("enuna_booking") ? JSON.parse(getLocaleStorage("enuna_booking")).commerceDayKey : "",
   commerceHourKey: getLocaleStorage("enuna_booking") ? JSON.parse(getLocaleStorage("enuna_booking")).commerceHourKey : ""
}

//NOTA::Para la configuración del mapa seguir las instrucciones del link
//https://www.npmjs.com/package/@react-google-maps/api

const Booking = () => {
   useTitle("Booking");
   scrollToTop();
   const history = useHistory();
   const { searchDaysAvailable, searchHoursAvailable } = CommerceServices()
   const { formData, onChange, persons, commerceDayKey, commerceHourKey, reload } = useForm(INITIAL_STATE);
   const { commerce, personsData, setPersonsData, daysData, setDaysData, hoursData, setHoursData, showModal, setShowModal } = useBooking();

   useEffect(() => {
      (async () => {
         await searchDaysAvailable(commerce.commerceKey).then(res => {
            setDaysData(res.days);
            setPersonsData(res.persons);
         }).catch(function error() {
            console.log(error);
         })
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      (async () => {
         (persons && commerceDayKey) &&
            await searchHoursAvailable(commerce.commerceKey, persons, commerceDayKey).then(res => {
               setHoursData(res.data);
            });
      })();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [reload]);

   const handleSubmit = () => {
      if (formData.persons && formData.commerceDayKey && formData.commerceHourKey) {
         setLocalStorage("enuna_booking", JSON.stringify(formData));
         history.push("/products");
      } else {
         setShowModal(true);
      }
   }

   return (
      <>
         <MenuWeb />
         <div className="container-fluid">
            <div className="row mbox">
               <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12">

                  <div className="row">
                     <div className="col-sm-6">
                        <BookingImage commerceKey={commerce.commerceKey} />
                     </div>
                     <div className="col-sm-6">
                        <Title type="lg">{commerce.commerceName}</Title>
                        <Title type="md">{commerce.districtName} <br /> {commerce.commerceAddress}</Title>
                        <P>{commerce.commerceBio}</P>
                     </div>
                  </div>

                  <div className="row mt-3">
                     <div className="col-sm-4">
                        <Select label="Fecha" name="commerceDayKey" onChange={onChange} value={commerceDayKey}  >
                           <option value="">Seleccione Día</option>
                           {
                              daysData.map((day, index) => (
                                 <option key={index} value={day.commerceDayKey}>{day.commerceDay}</option>
                              ))
                           }
                        </Select>
                     </div>
                     <div className="col-sm-4">
                        <Select label="Personas" name="persons" onChange={onChange} value={persons}>
                           <option value="">Seleccione Personas</option>
                           {
                              personsData.map((per, index) => (
                                 <option key={index} value={per.persons}>{per.personsLabel}</option>
                              ))
                           }
                        </Select>
                     </div>
                     <div className="col-sm-4">
                        <Select label="Hora" name="commerceHourKey" onChange={onChange} value={commerceHourKey}>
                           <option value="">Seleccione Horario</option>
                           {
                              hoursData.map((hr, index) => (
                                 <option key={index} value={hr.commerceHourKey}>{hr.commerceHour}</option>
                              ))
                           }
                        </Select>
                     </div>
                  </div>

                  <div className="row mt-3 mb-5">
                     <div className="col-12">
                        <img style={{ maxWidth: "100%" }} src={process.env.PUBLIC_URL + "assets/map.png"} alt="" />
                     </div>
                  </div>
               </div>
            </div>
            <ButtonFloat title="INGRESAR PLATOS" onClick={handleSubmit} />
            <ModalAlert showModal={showModal} setShowModal={setShowModal} title="Información faltante"
               message="Fecha, hora y número de personas requerido." hidden="hidden" />
         </div>
      </>
   );
};

export default Booking;
