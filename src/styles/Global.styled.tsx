import { createGlobalStyle } from "styled-components";

export const StylesGlobal = createGlobalStyle`
   *,
   html,
   body {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
   }

   *:focus {
      outline: none !important;
      outline-width: 0;
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
