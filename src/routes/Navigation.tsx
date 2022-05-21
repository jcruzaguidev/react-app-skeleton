import CheckOut from "pages/web/checkout/CheckOut";
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import { Booking, Configuration, Contact, Home, ProductList, ReservationDetail, Reservations, SearchResultPage, Success, UserLogin, UserRecover, UserRegister } from "../pages";

const Navigation = () => {

   return (
      <>
         <Router>
            <HashRouter>
               <Switch>
                  <Route path='/' exact component={ Home }/>
                  <Route path='/login' exact component={ UserLogin }/>
                  <Route path='/register' exact component={ UserRegister }/>
                  <Route path='/recover' exact component={ UserRecover }/>
                  <Route path='/search/:term' exact component={ SearchResultPage }/>
                  <Route path='/booking' exact component={ Booking }/>
                  <Route path='/products' exact component={ ProductList }/>
                  <Route path='/contact' exact component={ Contact }/>
                  <Route path='/checkout' exact component={ CheckOut }/>
                  <Route path='/success' exact component={ Success }/>
                  <Route path='/configuration' exact component={ Configuration }/>
                  <Route path='/reservations' exact component={ Reservations }/>
                  <Route path='/reservation/detail/:key' exact component={ ReservationDetail }/>
                  <Route component={ Home }/>
               </Switch>
            </HashRouter>
         </Router>
      </>
   );
};

export default Navigation;
