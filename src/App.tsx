import Navigation from "./routes/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { StylesGlobal } from "./styles/Global.styled";
import AuthProvider from "context/authContext/AuthProvider";

export const App = () => {
   return (
      <>
         <StylesGlobal />
         <AuthProvider>
            <Navigation />
         </AuthProvider>
      </>
   );
}
