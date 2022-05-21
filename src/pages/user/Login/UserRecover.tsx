import { Link } from 'react-router-dom';
import { StylesUserLogin } from './UserLogin.styled';
import { Alert, Button, Small, TextInput } from 'components';
import { MessageResult } from 'layouts';
import { useUserRecover } from 'hook/useUserRecover';
import useTitle from 'hook/UI/useTitle';

const UserRecover = () => {
   const { onChange, resultStatus, userMail, loading, message, handleSubmit, alert } = useUserRecover();
   useTitle("Recuperación de credenciales");

   return (
      <StylesUserLogin>
         <div className="container-fluid animated fast fadeIn">
               {
                  resultStatus ? (
                     <MessageResult title={"Correo enviado con éxito"} message={"Si no recibe el correo, por favor, revise su carpeta de spam."} />
                  ) : (
                     <div className="form-login">
                        <Link to={"/"}>
                           <img src={ process.env.PUBLIC_URL + `/assets/logo.svg` } alt="EnUna" width={ 50 }/>
                        </Link>
                        <h1 className="h3 mt-3 mb-3 fw-normal">Ingrese correo registrado</h1>
                        <TextInput label={ "Correo" } name={ "userMail" } value={ userMail } type={ "text" } onChange={ onChange } />
                        {
                           loading && (
                              <div className="mt-3">
                                 <Alert type={ alert } title={ message } />
                              </div>
                           )
                        }
                        <div className="mt-3">
                           <Button type="md" color="red" title="Enviar" onClick={ handleSubmit }/>
                        </div>
                        <div className="register-link">
                           <Link to={"/login"}>
                              <Small>Regresar</Small>
                           </Link>
                        </div>
                     </div>
                  )
               }
         </div>
      </StylesUserLogin>
   );
};

export default UserRecover;
