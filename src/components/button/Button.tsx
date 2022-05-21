import React from 'react';
import { StylesButton } from './Button.styled';

interface Props {
   type: 'sm' | 'md';
   color: 'red' | 'orange';
   title: string;
   disabled?: boolean;
   onClick?: () => void;
}

export const Button: React.FC<Props> = (props) => {
   const { type, color, title, disabled, onClick } = props;

   return (
      <StylesButton>
         <button
            onClick={onClick}
            className={`btn btn-custom ${color} form-control ${type}`}
            type="submit"
            disabled={disabled}
         >
            {title}
         </button>
      </StylesButton>
   );
};
