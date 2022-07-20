export interface Reservations {
   status: string;
   data: ReservationsData[];
}

export interface ReservationsData {
   reservationKey: string;
   observation: string;
   day: string;
   time: string;
   commerceKey: string;
   commerceName: string;
   regionName: string;
   districtName: string;
   commerceAddress: string;
   reservationRegister: string;
   reservationStatus: string;
   colorStatus: string;
   persons: string;
}

export interface ReservationDetail {
   status: string;
   data: ReservationDetailData;
}

export interface ReservationDetailData {
   commerce: Commerce;
   pay: Pay;
   menu: Menu[];
}

export interface Commerce {
   reservationKey: string;
   observation: string;
   day: string;
   time: string;
   commerceKey: string;
   commerceName: string;
   regionName: string;
   districtName: string;
   commerceAddress: string;
   reservationRegister: string;
   reservationStatus: string;
   colorStatus: string;
   persons: string;
}

export interface Menu {
   menuImage: string;
   menuKey: string;
   menuName: string;
   menuDescription: string;
   menuPrice: string;
   number: string;
}

export interface Pay {
   subTotal: string;
   service: string;
   tips: string;
   total: string;
}

