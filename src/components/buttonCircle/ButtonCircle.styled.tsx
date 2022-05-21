import styled from "styled-components";
import colors from "styles/colors";

export const StylesButtonCircle = styled.div`
   .btn {
      height: 45px;
      width: 45px;
      bottom: 10px;
      position:absolute;
      right: 10px;
      font-size: 18px;
   }
   .btn > .btn-image {
      color: ${ colors.yellow100 } !important;
      background: transparent;
   }
`
