export interface Region {
   status: string;
   data: RegionData[];
}

export interface RegionData {
   regionKey: string;
   regionName: string;
}

export interface District {
   status: string;
   data: DistrictData[];
}

export interface DistrictData {
   districtKey: string;
   districtName: string;
   regionName: string;
}

export interface Category {
   status: string;
   data: CategoryData[];
}

export interface CategoryData {
   categoryKey: string;
   categoryName: string;
}