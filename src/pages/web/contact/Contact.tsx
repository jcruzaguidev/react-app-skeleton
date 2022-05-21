import {Title} from "components";
import {MenuWeb} from "layouts";
import colors from "styles/colors";
import {StyleContact} from "./Contact.styled";

const Contact = () => {

   return (
      <>
         <MenuWeb />
         <StyleContact>
            <div className="container-fluid">
               <div className="row ">
                  <div className="col-xxl-8 offset-xxl-2 col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12 back-trans">
                     <div className="row">
                        <div className="col-12">
                           <Title type="lg">Contacto</Title>
                        </div>
                     </div>
                     <div className="row mt-5">
                        <div className="col-sm-6">
                           <p>Si tienes alguna consulta o sugerencia, nos puedes escribir a:</p>
                        </div>
                        <div className="col-sm-6">
                            <Title style={{ color:colors.gray300 }} type="xs">Correo de contacto</Title>
                             <hr />
                             <a href="mailto:contacto@enunaapp.com">contacto@enunaapp.com</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </StyleContact>
      </>
   );
};

export default Contact;
