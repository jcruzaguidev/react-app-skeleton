import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export const StylesGlobal = createGlobalStyle`
   *,
   html,
   body {
      font-family: 'IBM Plex Sans', sans-serif;
      color: ${ colors.gray100 };
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      background-color: ${ colors.gray900 };
   }

   body {
     height: 100vh;
   }

   @supports (-webkit-touch-callout: none) {
      body {
         height: -webkit-fill-available;
      }
   }

   .modal-background {
      background-color: rgba(144, 144, 144, 0.1);
   }

   .modal-image {
      min-width: 100%;
      border-radius: 10px;
   }

   .modal-body h3 {
      font-weight: 800;
      color: ${ colors.gray100 } !important;
   }
   .modal-title {
      font-family: 'IBM Plex Sans', sans-serif;
      color: ${ colors.gray100 };
      font-weight: 600;
      font-size: 1.7rem;
   }

   .modal-price {
      font-family: 'IBM Plex Sans', sans-serif;
      color: ${ colors.gray100 };
      font-size: 1.7rem;
      font-weight: 600;
   }
   .modal-description {
      font-weight: 400;
      color: ${ colors.gray100 };
   }
   .modal-span {
      font-size: 12px;
      color: ${ colors.gray300 };
   }
   
   @media screen and (max-width: 600px) {
      .modal-image {
         max-width: 100%;
      }
      .modal-price {
         margin-top: 20px;
      }
   }

   .bmt {
      margin-top: 100px;
   }

   .hidden {
      display: none;
   }

   .mt90 {
      margin-top: 90px;
   }

   .mb50 {
      margin-bottom: 50px;
   }

   .mbox {
      margin-top: 100px;
      margin-bottom: 100px;
   }

   *:focus {
      outline: none !important;
      outline-width: 0;
   }

   .logo-top {
      display:flex;
      flex-direccion:row;
      margin-bottom:10px;
   }
   .logo-top > h3 {
      padding-top:30px;
      padding-left:10px;
   }

   /* Animation */
   .animated {
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
   }

   .fast {
      -webkit-animation-duration: 0.4s;
      animation-duration: 0.4s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
   }

   @keyframes fadeIn {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }

   @keyframes fadeOut {
      from {
         opacity: 1;
      }
      to {
         opacity: 0;
      }
   }

   .fadeIn {
      animation-name: fadeIn;
   }

   .fadeOut {
      animation-name: fadeOut;
   }
`
