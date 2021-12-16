import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";

const Navigation = () => {

   return (
      <>
         <Router>
            <div>
               <HashRouter>
                  <Switch>
                     <Route path='/' exact component={ HomePage }/>
                     <Route component={ HomePage }/>
                  </Switch>
               </HashRouter>
            </div>
         </Router>
      </>
   );
};

export default Navigation;
