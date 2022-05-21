import { useEffect } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { StylesMenuWeb } from "./MenuWeb.styled";
import { getLocaleStorage, setLogout, setLocalStorage } from "utils/session";
import { useHistory } from "react-router-dom";
import {Button} from 'components';

const MenuWeb = () => {
   const history = useHistory();
   const isLogged = getLocaleStorage("enuna_user_key") ? true : false;

   useEffect(() => {
      if (!getLocaleStorage("enuna_filter_district")) {
         setLocalStorage("enuna_filter_category", "*");
         setLocalStorage("enuna_filter_district", "*");
         setLocalStorage("enuna_filter_district_text", "Todos los distritos");
         setLocalStorage("enuna_filter_category_text", "Todas las categorías");
      }
   }, []);

   const handleLoggin = () => {
      history.push(`/login`);
   }
   
   const handleLogout = () => {
      setLogout();
      history.push(`/`);
   }

   return (
      <>
         <StylesMenuWeb>
            <Navbar className='bg-white' bg="light" expand="lg" fixed="top">
               <Container fluid>
                  <Navbar.Brand href="#">
                     <img src={process.env.PUBLIC_URL + `/assets/logo.svg`} alt="EnUna" width={50}/>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end">
                     <Nav>
                        <Nav.Item>
                           <Nav.Link href="#home">Inicio</Nav.Link>
                        </Nav.Item>
                        {/*<Nav.Item>
                           <Nav.Link href="#contact">Contácto</Nav.Link>
                        </Nav.Item>*/}
                        <Nav.Item>
                           <Nav.Link href="#reservations">Reservas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link href="#checkout">Carrito</Nav.Link>
                        </Nav.Item>
                        {
                           isLogged ? (
                              <>
                                 <Nav.Item>
                                    <Nav.Link href="#configuration">Configuración</Nav.Link>
                                 </Nav.Item>
                                 <Nav.Item>
                                    <Button type="sm" color="orange" title="Cerrar Sesión" onClick={ handleLogout } />
                                 </Nav.Item>
                              </>
                           ) : (
                              <Nav.Item>
                                 <Button type="sm" color="red" title="Ingresar" onClick={ handleLoggin } />
                              </Nav.Item>
                           )
                        }
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </StylesMenuWeb>
      </>
   );
};

export default MenuWeb;
