import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {LoginServices} from "../service/loginServices";
import {useForm} from "./useForm";

const INITIAL_STATE = {
   userMail: ""
}

export const useUserRecover = () => {
   const history = useHistory();
   const { formData, isValidEmail, onChange, userMail } = useForm(INITIAL_STATE);
   const { recover } = LoginServices();

   const [resultStatus, setResultStatus] = useState(false);
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");
   const [alert, setAlert] = useState("");

   useEffect(() => {
      document.title = "Recuperación de cuenta";
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
      
      await recover(formData).then(res => {
         if (res.status === "success") {
            setResultStatus(true);
            
            setTimeout(() => {
               history.push('/');
            }, 5000);
         } else {
            setMessage("Ocurrió un error, intentelo una vez más.");
            setAlert("danger");
         }
      }).catch(function(error) {
         setMessage(error.response.data.message);
         setAlert("danger");
      })
   }
   
   return {
      onChange,
      userMail,
      resultStatus,
      loading,
      message,
      alert,
      handleSubmit
   }
};
