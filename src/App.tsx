import 'bootstrap/dist/css/bootstrap.min.css';
import { StylesGlobal } from './styles/Global.styled';
import Navigation from "./routes/Navigation";

function App() {
   return (
      <>
         <StylesGlobal />
         <Navigation />
      </>
   );
}

export default App;
