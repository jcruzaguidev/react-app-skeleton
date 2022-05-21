import { useState } from "react";
import { CommerceInfo, Day, Hour, Person } from "../interfaces/commerce.interface";
import { getLocaleStorage } from "../utils/session";

export const useBooking = () => {
   const commerce:CommerceInfo = JSON.parse(getLocaleStorage("enuna_commerce_data"));
   const [personsData, setPersonsData] = useState<Person[]>([]);
   const [hoursData, setHoursData] = useState<Hour[]>([]);
   const [daysData, setDaysData] = useState<Day[]>([]);
   const [showModal, setShowModal] = useState(false);
   const url = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDH288QliDeZYBg2DMFCGMWJ6zg9polf0I";
   
   return {
      commerce,
      personsData,
      setPersonsData,
      hoursData,
      setHoursData,
      daysData, 
      setDaysData,
      showModal,
      setShowModal,
      url
   }
}
