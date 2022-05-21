import React from 'react';
import {StylesCategoryCard} from './CategoryCard.styled';
import {CategoryData} from 'interfaces/master.interface';

interface Props {
   data: CategoryData;
   onClick: () => void;
}

export const CategoryCard:React.FC<Props> = (props) => {
   const { data, onClick } = props;
   const { categoryKey, categoryName } = data;
   const imagePath = process.env.PUBLIC_URL + "category/" + categoryKey + ".jpg";

   return (
      <StylesCategoryCard img={ imagePath }>
         <div className="card card-box animated fast fadeIn" onClick={ onClick }>
            <div className="card-text-content">
               <h5>{ categoryName }</h5>
            </div>
         </div>
      </StylesCategoryCard>
   );
};

