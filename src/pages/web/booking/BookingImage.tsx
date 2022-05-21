import { StylesBooking } from "./Booking.styled";

interface Props {
   commerceKey:string;
}

const BookingImage = ({ commerceKey }:Props) => {

   const commercePath = process.env.PUBLIC_URL + "commerce/" + commerceKey + ".jpg";
   const logoPath = process.env.PUBLIC_URL + "logo/" + commerceKey + ".jpg";

   return (
      <>
         <StylesBooking image={ commercePath } >
            <div className="image">
               <img className="logo" src={ logoPath } loading="lazy" alt="EnUna"/>
            </div>
         </StylesBooking>
      </>
   );
};

export default BookingImage;
