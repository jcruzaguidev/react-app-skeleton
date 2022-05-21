import {ChangeEvent, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Button, TextArea } from 'components';
import {getLocaleStorage, setClearRegister} from 'utils/session';
import {useProductList} from 'hook/useProductList';
import {ModalAlert} from 'components';
import {CommerceInfo} from 'interfaces/commerce.interface';
import {CheckOutData} from 'interfaces/checkout.interface';
import {CheckoutServices} from 'service/checkoutServices';
import { StylesCheckOut } from './CheckOut.styled';

interface Props {
   subTotal: number;
   total: number;
}

type Items = {
   menuKey:string;
   numbers:string;
   subTotal:string;
}

const CheckOutTotal = (props: Props) => {
   const history = useHistory();
   const { subTotal, total } = props;
   const [showModal, setShowModal] = useState(false);
   const [observation, setObservation] = useState("");
   const [label, setLabel] = useState("");
   const [message, setMessage] = useState("");
   const { temporalReservation } = CheckoutServices();
   const serviceAmount = 10;
   const { shoppingCart } = useProductList();
   const commerce:CommerceInfo = JSON.parse(getLocaleStorage("enuna_commerce_data"));
   const booking = JSON.parse(getLocaleStorage("enuna_booking"));
   const userKey = getLocaleStorage("enuna_user_key");
   const isLogged = getLocaleStorage("enuna_user_key") ? true : false;

   const onChange = (e:ChangeEvent<HTMLInputElement>) => {
      setObservation(e.target.value);
   }

   const handleCancelCheckout = () => {
      setLabel("Sí, seguro");
      setMessage("¿Estás seguro de que deseas eliminar todos los productos del carrito?");
      setShowModal(true);
   }

   const handleLogging = () => {
      setShowModal(false);
      history.push("/login");
   }

   const handleClearCard = () => {
      setShowModal(false);
      setClearRegister();
      history.push("/");
   }

   const handleDoPayment = () => {
      if (isLogged){
         (async () => {
            let items:Items[] = [];
         
            Object.entries(shoppingCart).map(([key, product]) => (
               items.push({
                  menuKey:product.menuKey,
                  numbers:product.count.toString(),
                  subTotal:(product.count * +product.menuPrice).toFixed(1).toString()
               })
            ))

            const data:CheckOutData = {
               userKey,
               commerceKey:commerce.commerceKey,
               persons:booking.persons,
               commerceDayKey:booking.commerceDayKey,
               commerceHourKey:booking.commerceHourKey,
               observation,
               items
            }

            await temporalReservation(data).then(res => {
               if (res.status === "success") {
                  //TODO: eliminar todos los  datos guardados en localstorage relacionado a la reserva
                  setClearRegister();
                  history.push("/success");
               } else {
                  // Mensaje de error
               }
            })
         })();
      } else {
         setLabel("Ingresar");
         setMessage("Debe ingresar con su usuario para finalizar el registro");
         setShowModal(true);
      }
   }

   const handleContinueShooping = () => {
      history.push("/products");
   }

   return (
      <>
         <StylesCheckOut>
            <div className="row">
               <div className="col-12">
                  <h4>Totales</h4>
               </div>
            </div>
            <div className="row subtotal-box">
               <div className="col-6"><strong>Consumo:</strong></div>
               <div className="col-6 align-right"><strong>S/{ subTotal.toFixed(2) }</strong></div>
            </div>
            <div className="row subtotal-box">
               <div className="col-6"><strong>Servicio:</strong></div>
               <div className="col-6 align-right"><strong>S/{ serviceAmount.toFixed(2) }</strong></div>
            </div>
            <div className="row total-box">
               <div className="col-6"><strong>Total:</strong></div>
               <div className="col-6 align-right"><strong>S/{ total.toFixed(2) }</strong></div>
            </div>
            <div className="row">
               <div className="col-12 mb-3">
                  <TextArea label="Observaciones" name="observation" rows={ 3 } onChange={ onChange } placeholder="ej: alérgico a las nueces" />
               </div>
               <div className="col-12 mb-3">
                  <Button type="md" color="orange" title="Continuar comprando" onClick={ handleContinueShooping } />
               </div>
               <div className="col-2">
                  <button type="button" className="btn" onClick={ handleCancelCheckout }>
                     <img className="btn-image" src={process.env.PUBLIC_URL + "/assets/trash.svg"} alt="EnUna"/>
                  </button>
               </div>
               <div className="col-10">
                  <Button type="md" color="red" title="Realizar Pago" onClick={ handleDoPayment } />
               </div>
            </div>
         </StylesCheckOut>
         <ModalAlert 
            showModal={ showModal } 
            setShowModal={ setShowModal } 
            title="Alerta" 
            label={ label }
            message={ message } 
            onClick={ isLogged ? handleClearCard : handleLogging } 
         />
      </>
   );
};

export default CheckOutTotal;
