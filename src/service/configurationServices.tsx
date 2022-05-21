import api from "./http-commons";

interface USER_DATA {
   userKey:string;
   userName:string;
   userLastName:string;
   userPhone:string;
}

interface USER_RESULT {
   status:string;
   message:string;
}

export const ConfigurationServices = (userKey:string) => {
   
   const getUserData = async () => {
      const res = await api.get(`/user/data/${ userKey }`);
      const result: USER_DATA = res.data.data;
      return result;
   }
   
   const updateUserData = async (data:USER_DATA) => {
      const res = await api.put('/update/user', JSON.stringify(data));
      const result:USER_RESULT = res.data;
      return result;
   };


   return {
      getUserData,
      updateUserData
   }
}

