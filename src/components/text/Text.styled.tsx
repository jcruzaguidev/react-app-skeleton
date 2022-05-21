import styled from "styled-components";
import colors from "styles/colors";

export const StylesText = styled.div`
   .h1-text {
      font-family: 'Open Sans', sans-serif;
      font-size: 3rem;
      font-weight: 500;
   }

   .h2-text {
      font-family: 'Open Sans', sans-serif;
      font-size: 2rem;
      font-weight: 500;
   }

   .h5-text {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.5rem;
      font-weight: 500;
   }

   .p-text {
      color: ${ colors.gray100 };
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5rem;
   }
`;
