import { Button, Footer, TextInput, Title } from 'components';
import { ConfigurationServices } from 'service/configurationServices';
import useTitle from 'hook/UI/useTitle';
import { useForm } from 'hook/useForm';
import { getLocaleStorage } from 'utils/session';
import { labels } from 'utils/labels';
import { MenuWeb } from 'layouts';
import { useEffect, useState } from 'react';

const INITIAL_STATE = {
   userKey:getLocaleStorage("enuna_user_key"),
   userName:"",
   userLastName:"",
   userPhone:""
}

const Configuration = () => {
   useTitle( labels.title.configuration );
   const { formData, setFormData, onChange, userName, userLastName, userPhone } = useForm(INITIAL_STATE);
   const { getUserData, updateUserData } = ConfigurationServices(getLocaleStorage("enuna_user_key"));
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      (async () => {
         await getUserData().then(res => {
            let data = {
               userKey:getLocaleStorage("enuna_user_key"),
               userName:res.userName,
               userLastName:res.userLastName,
               userPhone:res.userPhone
            }

            setFormData(data);
         })
      })();
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleUpdateData = () => {
      setLoading(true);

      (async () => {
         await updateUserData(formData).then(res => {
            setLoading(false);
         })
      })();
   }

   return (
      <>
         <MenuWeb />
         <div className="container-fluid">
            <div className="row mbox">
               <div className="col-sm-8 offset-sm-2">
                  <h1>{ labels.title.configuration }</h1>
                  <div className="row mt-5">
                     <div className="col-sm-5 offset-sm-1 mb-5">
                        <Title style={{ textTransform:"uppercase", color:"#bdc4d2", fontWeight:"500" }} type="xs">{ labels.title.userProfile }</Title>
                        <TextInput label="Nombre" name="userName" value={ userName } type="text" onChange={ onChange } />
                        <TextInput label="Apellidos" name="userLastName" value={ userLastName } type="text" onChange={ onChange } />
                        <TextInput label="Celular" name="userPhone" value={ userPhone } type="text" onChange={ onChange } />
                        {
                           loading 
                              ? <img style={{ width:30, marginLeft:"45%" }} src={ process.env.PUBLIC_URL + "assets/loading.gif" } alt=""/>
                              : <Button type="md" color="red" title={ labels.button.updateData } onClick={ handleUpdateData } />
                        }
                     </div>
                     <div className="col-sm-5">
                        <Title style={{ textTransform:"uppercase", color:"#bdc4d2", fontWeight:"500" }} type="xs">{ labels.title.activation }</Title>
                        <p>{ labels.message.configurationForgot }</p>
                        <Button type="md" color="orange" title={ labels.button.resend } onClick={ handleUpdateData } />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Configuration;
