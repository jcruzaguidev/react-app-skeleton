import styled from "styled-components";
import colors from "styles/colors";

interface Props {
   img:string;
}

export const StylesProductCardSmall = styled.div`
   :hover {
      cursor: pointer;
   }
   .product-card {
      border-radius: 6px !important;
      border: 1px solid rgb(230, 235, 241);
      cursor: pointer;
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
      font-size: 1.3rem;
      color: ${ colors.gray100 };
   }
   .card-text {
      background-color: #FFF !important;
      color: ${ colors.gray100 };
      font-weight: 400;
      font-size: 14px;
      line-height: 1.7rem;
      margin-bottom: 30px;
   }
   .card-price {
      background-color: #FFF !important;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 1.3rem;
      color: ${ colors.gray100 };
   }
   .btn-image {
      height: 30px;
      width: 30px;
      bottom: 10px;
      position:absolute;
      right: 10px;
      font-size: 18px;
      color: ${ colors.yellow100 } !important;
      background: transparent;
   }
`
