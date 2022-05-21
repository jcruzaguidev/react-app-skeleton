export interface Recover {
   userMail: string;
}

export interface RecoverResponse {
   status: string;
   message: string;
}

export interface Login {
   userMail: string;
   userPassword: string;
}

export interface LoginResponse {
   status: string;
   message: string;
   item: LoginItem;
   token: string;
}

export interface LoginItem {
   userKey: string;
   userName: string;
   userLastName: string;
   userMail: string;
   userPhone: string;
   userStatus: number;
}

export interface Register {
   userName: string;
   userLastName: string;
   userMail: string;
   userPassword: string;
   userPhone: string;
}