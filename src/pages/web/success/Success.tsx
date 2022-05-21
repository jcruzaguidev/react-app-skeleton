import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {MenuWeb} from 'layouts';
import {scrollToTop} from 'utils/utils';
import { StylesSuccess } from './Success.styles';
import {labels} from 'utils/labels';

const Success = () => {
   scrollToTop();
   const history = useHistory();

   useEffect(() => {
      setTimeout(() => {
         history.push("/");
      }, 10000)
   }, [history]);  

   return (
      <>
         <MenuWeb />
         <StylesSuccess>
            <div className="container-fluid">
               <div className="row mbox">
                  <div className="col-sm-4 offset-sm-4 success-box">
                     <img className="header-image mb-5" src={ process.env.PUBLIC_URL + "assets/success.png" } alt="EnUna"/>
                     <h2 className="title mb-5">Reserva Registrada</h2>
                     <p className="message">{ labels.message.successReservation }</p>
                     <span className="loader-message">En breve serás redirigido...</span>
                     <br />
                     <img className="loader mt-3" src={ process.env.PUBLIC_URL + "assets/loading.gif" } alt="EnUna"/>
                  </div>
               </div>
            </div>
         </StylesSuccess>
      </>
   );
};

export default Success;
