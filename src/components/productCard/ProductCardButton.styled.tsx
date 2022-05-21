import styled from "styled-components";
import colors from "styles/colors";

export const StylesProductCardButton = styled.div`

   .footer-container {
      padding: 27px 0;
      width: 500px;
      max-width: 100%;
      display: grid;
      grid-template-columns: 40% 55%;
      -webkit-box-align: center;
      align-items: center;
      gap: 20px;
      border-radius: 8px;
   }
   .value-container {
      float: left;
   }
   .value-left {
      font-size: 16px;
      font-family: 'Open Sans';
      color: ${ colors.gray100 };
      font-weight: 500;
      line-height: 1.42;
      letter-spacing: -0.24px;
      color: rgb(46, 44, 54);
   }
   .value-right {
      font-size: 24px;
      font-family: 'Open Sans';
      color: ${ colors.gray100 };
      font-weight: 600;
      line-height: 1.42;
      letter-spacing: -0.24px;
      color: rgb(46, 44, 54);
   }
   .button-container {
      -webkit-box-align: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid rgb(230, 235, 241);
      display: flex;
      height: 48px;
      margin-left: auto;
      width: 227px;
   }
   .icon-container {
       color: ${ colors.gray100 };
       font-size: 26px;
       display: flex;
       -webkit-box-pack: center;
       justify-content: center;
       width: 30%;
       cursor:pointer;
       -webkit-user-select: none; /* Safari */        
       -moz-user-select: none; /* Firefox */
       -ms-user-select: none; /* IE10+/Edge */
       user-select: none; /* Standard */
   }
   .total-container {
       color: ${ colors.gray100 };
       font-size: 16px;
       display: flex;
       -webkit-box-pack: center;
       justify-content: center;
       width: 40%;
       user-select: none;
   }
   
   @media screen and (max-width: 600px) {
      .footer-container {
         padding: 27px 0;
         display: block;
         grid-template-columns: 40% 55%;
      }
      .value-container {
         margin-top: 10px !important;
      }
      .value-container {
         float: center;
      }
      .button-container {
         width: 170px;
      }
   }
`
