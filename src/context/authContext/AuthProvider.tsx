import {AuthInterface} from "interfaces/context.interface";
import {getLocaleStorage} from "utils/session";
import {AuthContext} from "./AuthContext";

let userName = localStorage.getItem('enuna_user') ? getLocaleStorage('enuna_user') : '';
let userKey = localStorage.getItem('enuna_user_key') ? getLocaleStorage('enuna_user_key') : '';
let userToken = localStorage.getItem('enuna_token') ? getLocaleStorage('enuna_token') : '';

const INITIAL_STATE: AuthInterface = {
   isLoggedIn: false,
   userName: userName,
   userKey: userKey,
   userToken: userToken
}

interface Props {
   children: JSX.Element | JSX.Element[];
}

const AuthProvider = ({ children }:Props) => {

   return (
      <AuthContext.Provider value={INITIAL_STATE}>
         { children }
      </AuthContext.Provider>
   );
};

export default AuthProvider;
