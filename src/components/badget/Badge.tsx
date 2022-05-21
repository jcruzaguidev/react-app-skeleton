import React from 'react';
import { StylesBadge } from "./Badge.styled";

interface iBadge {
   type:'primary' | 'warning' | 'danger';
   title:string;
}

export const Badge:React.FC<iBadge> = (props) => {
   const { type, title } = props;

   return (
      <StylesBadge>
         <span className={`badge custom-badge bg-${type}`}>{title}</span>
      </StylesBadge>
   );

};
