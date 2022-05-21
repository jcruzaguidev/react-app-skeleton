import { useState } from 'react';
import { CommerceInfo } from '../interfaces/commerce.interface';
import { getLocaleStorage, setLocalStorage } from '../utils/session';
import { ProductsData } from '../interfaces/product.interface';
import { useHistory } from 'react-router-dom';

interface ProductInCart extends ProductsData {
   count: number;
}

export const useProductList = () => {
   const history = useHistory();
   const commerce: CommerceInfo = getLocaleStorage('enuna_commerce_data')
      ? JSON.parse(getLocaleStorage('enuna_commerce_data'))
      : [];
   const [products, setProducts] = useState<ProductsData[]>([]);
   const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>(
      getLocaleStorage('enuna_shopping_cart')
         ? JSON.parse(getLocaleStorage('enuna_shopping_cart'))
         : {}
   );
   const [alert, setAlert] = useState({
      type: 'primary',
      message: 'Cargando datos...',
   });

   const onProductCountChange = ({ product, count }: { product: ProductsData; count: number }) => {
    setShoppingCart((oldShoppingCart) => {
     if (count === 0) {
      const { [product.menuKey]: toDelete, ...rest } = oldShoppingCart;
      setLocalStorage('enuna_shopping_cart', JSON.stringify(rest));
      return rest;
     }

     const data = {
      ...oldShoppingCart,
      [product.menuKey]: { ...product, count },
     };

     setLocalStorage('enuna_shopping_cart', JSON.stringify(data));
     return data;
    });
   };

   const handleSubmit = () => {
    history.push(`/checkout`);
   };

   return {
    commerce,
    products,
    setProducts,
    alert,
    setAlert,
    shoppingCart,
    onProductCountChange,
    handleSubmit,
   };
};
