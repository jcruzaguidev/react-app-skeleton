import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LoginServices } from "service/loginServices";
import { Alert, Button, Small, TextInput } from "components";
import { setLocalStorage } from "utils/session";
import { useForm } from "hook/useForm";
import { StylesUserLogin } from "./UserLogin.styled";
import useTitle from 'hook/UI/useTitle';

const INITIAL_STATE = {
   userMail: "",
   userPassword: "",
}

const UserLogin = () => {
   const history = useHistory();
   const { formData, isValidEmail, onChange, userMail, userPassword } = useForm( INITIAL_STATE );
   const { signIn } = LoginServices();

   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");
   const [alert, setAlert] = useState("");

   useTitle("Ingreso");

   const handleSubmit = async () => {
      setAlert("primary");
      setMessage("Un momento por favor...");
      
      if (!isValidEmail(userMail)) {
         setMessage("Correo no válido");
         setAlert("danger");
         return;
      }
      
      if (userPassword.length === 0) {
         setMessage("Ingrese contraseña");
         setAlert("danger");
         return;
      }
      
      setLoading(true);
      await signIn(formData).then(res => {
         setLocalStorage("enuna_user", res.item.userName);
         setLocalStorage("enuna_user_key", res.item.userKey);
         setLocalStorage("enuna_token", res.token);
         history.push('/');
      }).catch(function (error) {
         setLoading(false);
         setMessage(error.response.data.message);
         setAlert("danger");
      })
   }
   

   return (
      <StylesUserLogin>
         <div className="container-fluid animated fast fadeIn">
            <div className="form-login">
               <Link to={"/"}>
                  <img src={ process.env.PUBLIC_URL + `/assets/logo.svg` } alt="EnUna" width={ 50 }/>
               </Link>
               <h1 className="h3 mt-3 mb-3 fw-normal">Ingreso de usuario</h1>
               <TextInput label={ "Correo" } name={ "userMail" } value={ userMail } type={ "text" }
                          onChange={ onChange } />
               <TextInput label={ "Contraseña" } name={ "userPassword" } value={ userPassword } type={ "password" }
                          onChange={ onChange } />
               <div className="recover-link">
                  <Link to={"/recover"}>
                     <Small>Olvide mi contraseña</Small>
                  </Link>
               </div>
               {
                  message !== "" && (
                     <div className="mt-3">
                        <Alert type={ alert } title={ message } />
                     </div>
                  )
               }
               <div className="mt-3">
                  <Button type="md" color="red" title="Ingresar" onClick={ handleSubmit } disabled={loading} />
               </div>
               <div className="register-link">
                  <Small>Si no tienes una cuenta, haz click </Small>
                  <Link to={"/register"}>
                     <Small>aquí</Small>
                  </Link>
               </div>
            </div>
         </div>
      </StylesUserLogin>
   );
};

export default UserLogin;
