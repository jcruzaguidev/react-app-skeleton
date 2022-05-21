import styled from "styled-components";
import colors from "styles/colors";

export const StyledTextInput = styled.div`
   input {
      -webkit-appearance: none !important;
      background-color: #FFF !important;
      border-radius: 0 !important;
      border: 2px solid ${ colors.gray900 } !important;
      box-sizing: border-box;
      color: ${ colors.gray300 };
      font-size: 1rem !important;
      letter-spacing: 1px;
      margin-bottom: 5px;
      outline: 0 !important;
      padding: 12px 18px !important;
      transition: border .3s ease !important;
   }
   
   input:focus {
      border:2px solid ${ colors.gray300 } !important;
      box-shadow: none;
      outline: none !important;
      
   }
   
   label {
      color: ${ colors.gray300 };
      font-size: 11px;
      text-transform: uppercase;
      margin-bottom: 0 !important;
      background-color: transparent;
   }
`;
