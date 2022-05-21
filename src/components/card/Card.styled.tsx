import styled from "styled-components";

interface Props {
   img:string;
}

export const StylesCard = styled.div`
   .card-box {
      background-image: url(${({ img }:Props) => img});
      background-size: cover;
      background-position: center center no-repeat;
      border-radius: 6px !important;
      border: 0;
      box-shadow: 0 0 15px rgba(222, 222, 222, 1);
      margin: 5px 1px 3px 0px;
      min-height: 280px;
      min-width: 280px;
      cursor: pointer;
   }
   
   .card-text-content {
      background: rgb(24,24,24);
      background: linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(24,24,24,0.01) 100%);
      border-radius: 0 0 6px 6px;
      bottom: 0;
      color: #FFF;
      left: 0;
      padding: 20px 0 0 10px;
      position: absolute;
      width: 100%;
      z-index: 20;
   }

   .card-body {
      border-radius: 6px;
   }
   
   h5, p {
      color: #FFF;
      background-color: transparent;
   }

   h5 {
      font-family: 'Open Sans', sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
   }

   p {
      font-size: 1rem;
      line-height: 1.5rem;
      min-height: 60px;
   }
`;
