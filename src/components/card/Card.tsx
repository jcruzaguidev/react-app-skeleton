import React from 'react';
import { StylesCard } from "./Card.styled";
import { CommerceInfo } from "interfaces/commerce.interface";

interface Props {
   data: CommerceInfo;
   onClick: () => void;
}

export const Card:React.FC<Props> = (props) => {
   const { data, onClick } = props;
   const imagePath = process.env.PUBLIC_URL + "commerce/" + data.commerceKey + ".jpg";

   return (
      <StylesCard img={ imagePath }>
         <div className="card card-box animated fast fadeIn" onClick={ onClick }>
            <div className="card-text-content">
               <h5>{ data.commerceName }</h5>
               <p>{ data.categoryName + " - " + data.districtName } <br/> { data.commerceAddress }</p>
            </div>
         </div>
      </StylesCard>
   );
};
