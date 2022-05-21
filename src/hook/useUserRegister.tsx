import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LoginServices } from '../service/loginServices';
import { setLocalStorage } from '../utils/session';
import { useForm } from './useForm';

const INITIAL_STATE = {
   userName: "",
   userLastName: "",
   userMail: "",
   userPassword: "",
   userPhone: ""
}

export const useUserRegister = () => {
   const history = useHistory();
   const { formData, isValidEmail, onChange, userName, userLastName, userMail, userPassword } = useForm( INITIAL_STATE );
   const { singUp } = LoginServices();

   const [resultStatus, setResultStatus] = useState(false);
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");
   const [alert, setAlert] = useState("");

   useEffect(() => {
      document.title = "Ingreso";
   }, []);

   const handleSubmit = async () => {
      setLoading(true);
      setAlert("primary");
      setMessage("Un momento por favor...");

      if (!isValidEmail(userMail)) {
         setMessage("Correo no válido");
         setAlert("danger");
         return;
      }

      if (userName.length === 0 || userLastName.length === 0 || userPassword.length === 0) {
         setMessage("Todos los campos son necesarios");
         setAlert("danger");
         return;
      }

      await singUp(formData).then(res => {
         if (res.status === "success") {
            setResultStatus(true);
            setLocalStorage("enuna_user_credential", JSON.stringify(res))
            
            setTimeout(() => {
               history.push('/');
            }, 5000);
         } else {
            setMessage("Ocurrió un error, intentelo una vez más.");
            setAlert("danger");
         }
      }).catch(function (error) {
         setMessage(error.response.data.message);
         setAlert("danger");
      })
   }

   
   return {
      userName,
      userLastName,
      userMail,
      userPassword,
      onChange,
      resultStatus,
      loading,
      message,
      alert,
      handleSubmit
   }
};
