export interface Card {
   commerceKey: string;
   count: string;
   menuDescription: string;
   menuImage: string;
   menuKey: string;
   menuName: string;
   menuPrice: string;
}

export interface CheckOutData {
   userKey: string;
   commerceKey: string;
   persons: string;
   commerceDayKey: string;
   commerceHourKey: string;
   observation: string;
   items: CheckOutDataItem[];
}

export interface CheckOutDataItem {
   menuKey: string;
   numbers: string;
   subTotal: string;
}

export interface CheckOutResult {
   status: string;
   message: string;
   data: CheckOutResultData;
}

export interface CheckOutResultData {
   registerKey: string;
   serviceCost: string;
}
