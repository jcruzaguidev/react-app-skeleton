import { Dispatch, SetStateAction, useEffect } from "react";
import { ProductsData } from "interfaces/product.interface";
import ProductCardButton from "./ProductCardButton";
import { getLocaleStorage } from "utils/session";
import { Modal } from "react-bootstrap";

interface Props {
   showModal: boolean;
   setShowModal: Dispatch<SetStateAction<boolean>>;
   product: ProductsData;
   increaseBy: (value: number) => void;
   counter: number;
   setCounter: Dispatch<SetStateAction<number>>;
   onClick?: () => void;
}

export const ProductCardModal = (props: Props) => {
   const { showModal, setShowModal, product, counter, setCounter, increaseBy } = props;
   const { menuKey, menuName, menuDescription, menuPrice } = product;
   const imagePath = process.env.PUBLIC_URL + "menu/" + menuKey + ".jpg";

   useEffect(() => {
      if (getLocaleStorage("enuna_shopping_cart")) {
         const item = JSON.parse(getLocaleStorage("enuna_shopping_cart"));
         item[menuKey] && setCounter(item[menuKey].count);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Modal 
            size="lg" 
            className="modal-background" 
            show={ showModal } 
            onHide={ () => setShowModal(false) }
         >
            <Modal.Header closeButton>
               <Modal.Title className="modal-title">{ menuName }</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <div className="row">
                  <div className="col-xs-12 col-sm-4">
                     <img className="modal-image" src={ imagePath } alt="EnUna"/>
                  </div>
                  <div className="col-xs-12 col-sm-8">
                     <h3 className="modal-price">S/ { menuPrice } pu</h3>
                     <p className="modal-description">{ menuDescription }</p>
                     <span className="modal-span">Ingreso de observaciones</span> <br/>
                     <span className="modal-span">*En el momento de realizar el pago, puede ingresar alguna observación dirigido al local sobre el producto seleccionado.</span>
                  </div>
                  <div className="col-sm-8 offset-sm-2">
                     <ProductCardButton price={ +menuPrice } counter={ counter } increaseBy={ increaseBy }/>
                  </div>
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
};
