import {Title} from "components";
import {Menu} from "interfaces/reservations.interface";
import {StylesProductCardSmall} from "./ProductCardSmall.styled";

interface Props {
   item:Menu;
}

export const ProductCardSmall = ({ item }:Props) => {
   const { menuKey, menuName, menuDescription, number } = item;

   return (
      <>
         <StylesProductCardSmall img={ process.env.PUBLIC_URL + "menu/" + menuKey + ".jpg" }>
            <div className="card mb-3">
               <div className="row g-0">
                  <div className="col-4 image" />
                  <div className="col-8">
                     <div className="card-body">
                        <Title style={{ backgroundColor:"#FFF" }} type="sm">{ menuName }</Title>
                        <p className="card-text">{ menuDescription.substring(0, 96) + "..." }</p>
                        <small className="card-price">Cantidad: { number }</small>
                     </div>
                  </div>
               </div>
            </div>
         </StylesProductCardSmall>
      </>
   );
};

