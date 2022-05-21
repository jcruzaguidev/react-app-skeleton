import styled from "styled-components";
import colors from "styles/colors";

export const StylesTitle = styled.h1`
   .title {
      color: ${ colors.gray100 };
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      background-color: transparent !important;
   }

   .title-lg {
      font-size: 3rem;
   }

   .title-md {
      font-size: 2rem;
   }

   .title-sm {
      font-size: 1.5rem;
   }

   .title-xs {
      font-size: 1rem;
   }

   .title-xxs {
      font-size: 0.6rem;
   }
`;
