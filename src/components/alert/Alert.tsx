import React from 'react';

interface Props {
   type: string;
   title: string;
   marginValue?: string;
}

export const Alert: React.FC<Props> = (props) => {
   const { type, title, marginValue } = props;

   return (
      <>
         <div style={{ margin: marginValue }} className={ `alert alert-${ type }` } role="alert">
            { title }
         </div>
      </>
   );
};

