import {AuthInterface} from "interfaces/context.interface";

type Action =  
   | { type: 'REQUEST_LOGIN', payload:{} }

   export const authReducer = ( state:AuthInterface, action:Action ) => {
   switch (action.type) {
      default:
         return state;
   }
}
