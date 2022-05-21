import React from 'react';
import { StylesText } from "./Text.styled";

export const H1:React.FC = ({ children }) => {

   return (
      <StylesText>
        <h1 className="h1-text">{ children }</h1> 
      </StylesText>
   );
};
