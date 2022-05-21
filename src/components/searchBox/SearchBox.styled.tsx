import styled from "styled-components";
import colors from "styles/colors";

export const StylesSearchBox = styled.div`
   margin-top: 50px;
   margin-bottom: 50px;
   background-color:transparent !important;
   
   img {
      color: #5f6368;
      background-color: transparent;
   }

   .back-trans {
      background-color:transparent !important;
   }
   
   .button-text {
      background-color: #FFF;
      height: 70px;
      border: 2px solid #ebebeb !important;
   }
   
   .title {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 10px;
      text-transform: uppercase;
   }

   .input-box {
      -webkit-appearance: none !important;
      background-color: #FFF !important;
      border-radius: 0 !important;
      border: 2px solid ${ colors.gray900 } !important;
      box-sizing: border-box;
      color: ${ colors.gray100 } !important;
      font-size: 2rem !important;
      font-weight: 400;
      letter-spacing: 1px;
      margin-bottom: 5px;
      outline: 0 !important;
      padding: 12px 18px !important;
      text-align: center;
      text-transform: uppercase;
      transition: border .3s ease !important;
   }
   
   input-box:focus {
      border:2px solid ${ colors.gray300 } !important;
      box-shadow: none;
      outline: none !important;
      
   }
   
   small {
      color: ${ colors.gray100 };
   }
`;
