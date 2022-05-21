export interface Products {
   status: string;
   data: ProductsData[];
}

export interface ProductsData {
   menuKey: string;
   commerceKey: string;
   menuName: string;
   menuDescription: string;
   menuPrice: string;
   menuImage: string;
}

export interface OnChangeArgs {
   product: ProductsData;
   count: number;
}
