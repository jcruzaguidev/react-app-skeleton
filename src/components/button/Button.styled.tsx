import styled from 'styled-components';
import colors from 'styles/colors';

export const StylesButton = styled.div`
   .md {
      padding: 14px 18px !important;
      font-size: 11px !important;
   }
   .sm {
      padding: 7px 10px !important;
      font-size: 9px !important;
   }
   .menu {
      min-height: 36px;
      font-size: 11px !important;
   }
   .btn-custom,
   .btn-custom:focus {
      border: 0 !important;
      border-radius: 0 !important;
      outline: 0 !important;
      letter-spacing: 1px;
      box-sizing: border-box;
      transition: border .3s ease !important;
      -webkit-appearance: none !important;
      text-transform: uppercase;
      color: #FFF !important;
   }
   .btn-custom:hover,
   .btn-custom:active {
      color: #FFF;
   }
   .orange {
      background-color: ${colors.orange100} !important;
   }
   .red {
      background-color: ${colors.red100} !important;
   },
`;
