import React from 'react';
import { StylesText } from "./Text.styled";

interface Props {
   styles?:string;
}

export const P:React.FC<Props> = (props) => {
   const { styles, children } = props;

   return (
      <StylesText>
         <p className={`p-text ${styles}`}>{ children }</p>
      </StylesText>
   );
};
