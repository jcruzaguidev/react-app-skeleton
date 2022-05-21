import React from 'react';
import { StylesButtonFloat } from "./ButtonFloat.styled";

interface Props {
   title: string,
   onClick?: () => void
}

export const ButtonFloat:React.FC<Props> = ( props ) => {
   const { title, onClick } = props;

   return (
      <StylesButtonFloat>
         <button onClick={ onClick } className="btn btn-float" type="submit">{ title }</button>
      </StylesButtonFloat>
   );
};
