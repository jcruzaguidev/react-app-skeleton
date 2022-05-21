import { Dispatch, SetStateAction, useEffect } from 'react';
import { useProduct } from 'hook/useProduct';
import { getLocaleStorage } from 'utils/session';
import { OnChangeArgs, ProductsData } from 'interfaces/product.interface';
import { StylesCheckoutCard } from './CheckoutCard.styled';

interface Props {
   product:ProductsData;
   onChange?: ( args:OnChangeArgs ) => void;
   setReload: Dispatch<SetStateAction<boolean>>;
}

export const CheckoutCard = (props:Props) => {
   const { product, onChange, setReload } = props;
   const { counter, setCounter, increaseBy } = useProduct({ product, onChange });
   const { menuKey, menuName, menuPrice } = product;
   const subTotal = (+menuPrice * +counter).toFixed(2);

   useEffect(() => {
      const item = JSON.parse(getLocaleStorage("enuna_shopping_cart"));
      item[menuKey] && setCounter(item[menuKey].count);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleClick = (value:number) => {
      increaseBy(value);
      setReload(true);
   }

   return (
      <>
         <StylesCheckoutCard img={ process.env.PUBLIC_URL + "menu/" + menuKey + ".jpg" }>
            <div className="product-card mb-3">
               <div className="row g-0">
                  <div className="col-2 image" />
                  <div className="col-10">
                     <div className="card-body">

                        <h5 className="card-title">{ menuName }</h5>

                        <div className="value-container">
                           <span className="value-left">Subtotal: </span>
                           <span className="value-right">S/{ subTotal }</span>
                        </div>

                        <div className="button-container">
                           <div className="icon-container" onClick={() => handleClick(-1)}>
                              -
                           </div>
                           <div className="total-container">
                              { counter }
                           </div>
                           <div className="icon-container" onClick={() => handleClick(1)}>
                              +
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </StylesCheckoutCard>
      </>
   );
};
