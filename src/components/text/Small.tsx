import React from 'react';
import { StylesSmall } from './Small.styled';

export const Small:React.FC = ({ children, ...rest }) => {

   return (
      <>
         <StylesSmall>
            <small { ...rest }>{ children }</small>
         </StylesSmall>
      </>
   );
};
