import { Link } from 'react-router-dom';
import { Alert, Button, Small, TextInput } from 'components';
import { StylesUserLogin } from './UserLogin.styled';
import { MessageResult } from 'layouts';
import { useUserRegister } from 'hook/useUserRegister';
import useTitle from 'hook/UI/useTitle';

const UserRegister = () => {
   const { resultStatus, userName, userLastName, userMail, userPassword, onChange, loading, message, handleSubmit, alert } = useUserRegister();
   useTitle("Registro");

   return (
      <StylesUserLogin>
         <div className="container-fluid animated fast fadeIn">
            {
               resultStatus 
               ? <MessageResult title={"Registro exitoso"} 
               message={"Para poder utilizar todas las bondades de la aplicación, revisa el correo que acabamos de enviarte. En caso de no recibirlo, por favor, revisa tu carpeta de spam o dirigete a la opción de “Perfil” para reenviarlo."} /> 
               : (
                  <>
                     <div className="form-register">
                        <Link to={"/"}>
                           <img src={ process.env.PUBLIC_URL + `/assets/logo.svg` } alt="EnUna" width={ 50 }/>
                        </Link>
                        <h1 className="h3 mt-3 mb-3 fw-normal">Registro de usuario</h1>
                        <TextInput label={ "Nombre" } name={ "userName" } value={ userName } type={ "text" } onChange={ onChange } />
                        <TextInput label={ "Apellidos" } name={ "userLastName" } value={ userLastName } type={ "text" } onChange={ onChange } />
                        <TextInput label={ "Correo" } name={ "userMail" } value={ userMail } type={ "text" } onChange={ onChange } />
                        <TextInput label={ "Contraseña" } name={ "userPassword" } value={ userPassword } type={ "password" } onChange={ onChange } />
                        {
                           message !== "" && (
                              <div className="mt-3">
                                 <Alert type={ alert } title={ message } />
                              </div>
                           )
                        }
                        <div className="mt-3">
                           <Button type="md" color="red" title="Registrarse" onClick={ handleSubmit } disabled={loading}/>
                        </div>
                        <div className="register-link">
                           <Link to={"/login"}>
                              <Small>Tengo una cuenta</Small>
                           </Link>
                        </div>
                     </div>
                  </>
               )
            }
         </div>
      </StylesUserLogin>
   );
};

export default UserRegister;
