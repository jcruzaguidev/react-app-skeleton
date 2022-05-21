import React from 'react';
import { StylesText } from "./Text.styled";

interface Props {
   styles?:string;
}

export const H5:React.FC<Props> = (props) => {
   const { styles, children } = props;

   return (
      <StylesText>
         <h5 className={`h5-text ${styles}`}>{ children }</h5>
      </StylesText>
   );
};
