import { StylesProductCardButton } from "./ProductCardButton.styled";

interface Props {
   price: number;
   counter: number;
   increaseBy: (value:number) => void;
}

const ProductCardButton = (props:Props) => {
   const { price, counter, increaseBy } = props;
   const subTotal = (price * counter).toFixed((2));

   return (
      <StylesProductCardButton>
         <div className="footer-container">
            <div className="value-container">
               <span className="value-left">Subtotal: </span>
               <span className="value-right">S/ { subTotal }</span>
            </div>
            <div className="button-container">
               <div className="icon-container" onClick={() => increaseBy(-1)}>
                  -
               </div>
               <div className="total-container">
                  { counter }
               </div>
               <div className="icon-container" onClick={() => increaseBy(1)}>
                  +
               </div>
            </div>
         </div>
      </StylesProductCardButton>
   );
};

export default ProductCardButton;
