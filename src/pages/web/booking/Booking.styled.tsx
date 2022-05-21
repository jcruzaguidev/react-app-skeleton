import styled from "styled-components";

interface Props {
   image?:string;
}

export const StylesBooking = styled.div`
   .image {
      background-image: url(${({ image }:Props) => image});
      background-size: cover;
      background-position: center center no-repeat;
      border-radius: 6px !important;
      border: 0;
      box-shadow: 0 0 15px rgba(222, 222, 222, 1);
      margin: 5px 1px 3px 0px;
      min-height: 280px;
      min-width: 280px;
   }
   .logo {
      max-width: 90px;
      border-radius: 6px 0 0 0 !important;
   }
`
