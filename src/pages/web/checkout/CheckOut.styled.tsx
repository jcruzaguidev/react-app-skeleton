import styled from 'styled-components';
import colors from 'styles/colors';

export const StylesCheckOut = styled.div`
   h4 {
      line-height: 1.75rem;
      text-align: center;
      font-weight: 700;
   }
   .title {
      font-weight: 700;
   }
   .align-right {
      text-align:right;
   }
   .total-box {
      border: 2px solid ${ colors.gray300 };
      padding: 10px;
      margin: 10px 0;
      font-weight: 700;
   }
   .subtotal-box {
      padding: 3px 20px;
      font-weight: 700;
   }
`;
