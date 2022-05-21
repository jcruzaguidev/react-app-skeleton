import styled from "styled-components";
import colors from "styles/colors";

export const StylesSelect = styled.div`
   .select-box {
      -webkit-appearance: none;
      background-color: #FFF;
      border-radius: 0 !important;
      border: 2px solid ${ colors.gray900 };
      box-sizing: border-box;
      color: ${ colors.gray100 };
      font-size: 1rem;
      letter-spacing: 1px;
      margin-bottom: 5px;
      outline: 0;
      padding: 12px 18px;
      transition: border .3s ease;
   }

   .select-box:focus {
      border: 2px solid ${ colors.gray300 };
      box-shadow: none;
      outline: none !important;
   }
`
