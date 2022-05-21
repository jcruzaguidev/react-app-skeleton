import styled from "styled-components";
import colors from "styles/colors";

export const StylesButtonFloat = styled.div`
   .btn-float,
   .btn-float:focus {
      background-color: ${ colors.red100 } !important;
      border-radius: 0 !important;
      border: 0 !important;
      bottom: 10px;
      color: #FFF !important;
      font-size: 14px !important;
      letter-spacing: 1px;
      outline: none !important;
      padding: 14px 60px !important;
      position: fixed;
      left: 50%;
      transform: translate(-50%, 0);
      transition: border .3s ease !important;
      -webkit-transform: translate(-50%, 0);
      -webkit-appearance: none !important;
   }

   .btn-float:hover,
   .btn-float:active {
      color: #FFF;
   }
   
   @media screen and (max-width: 600px) {
      .btn-float {
         left: 0;
         bottom: 0;
         width: 100%;
         padding: 14px 30px !important;
         -webkit-transform: translate(0, 0);
         transform: translate(0, 0)
      }
   }
`
