import styled from "styled-components";
import colors from "styles/colors";

interface Props {
   img:string;
}

export const StylesCheckoutCard = styled.div`
   .value-container {
      background-color: #FFF;
      float: left;
   }
   .value-left {
      font-size: 14px;
      font-family: 'Open Sans';
      background-color: #FFF;
      color: ${ colors.gray100 };
      font-weight: 400;
      line-height: 1.42;
      letter-spacing: -0.24px;
   }
   .value-right {
      font-size: 16px;
      font-family: 'Open Sans';
      background-color: #FFF;
      color: ${ colors.gray100 };
      font-weight: 600;
      line-height: 1.42;
      letter-spacing: -0.24px;
   }
   .button-container {
      -webkit-box-align: center;
      align-items: center;
      border-radius: 4px;
      border: 1px solid rgb(230, 235, 241);
      display: flex;
      height: 40px;
      margin-left: auto;
      width: 180px;
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
   .product-card {
      border-radius: 6px !important;
      border: 1px solid rgb(230, 235, 241);
   }
   .image {
      background-image: url(${({ img }:Props) => img});
      background-size: cover;
      background-position: center center no-repeat;
      min-height: 100%;
      min-width: auto;
   }
   .card-body {
      background-color: #FFF !important;
   }
   .card-title {
      background-color: #FFF !important;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 1.4rem;
      color: ${ colors.gray100 };
   }

   @media screen and (max-width: 600px) {
      .button-container {
         height: 30px;
         width: 130px;
      }
   }
`;
