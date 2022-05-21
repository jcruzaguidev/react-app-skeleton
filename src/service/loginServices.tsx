import api from "./http-commons";
import { Login, LoginResponse, Recover, RecoverResponse, Register } from "../interfaces/login.interfaces";

export const LoginServices = () => {
   
   const signIn = async (data:Login) => {
      const res = await api.post('/login/user', JSON.stringify(data));
      const result:LoginResponse = res.data;
      return result;
   }

   const singUp = async (data:Register) => {
      const res = await api.post('/create/user', JSON.stringify(data));
      const result:LoginResponse = res.data;
      return result;
   };

   const recover = async (data:Recover) => {
      const res = await api.post('/recover/user', JSON.stringify(data));
      const result:RecoverResponse = res.data;
      return result;
   };

   return {
      signIn,
      singUp,
      recover
   }
};