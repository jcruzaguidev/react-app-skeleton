import React from 'react';
import { StylesText } from "./Text.styled";

export const H2:React.FC = ({ children }) => {

   return (
      <StylesText>
         <h2 className="h2-text">{ children }</h2>
      </StylesText>
   );
};
