export interface CommerceSearch {
   status: string;
   data: CommerceInfo[];
}

export interface CommerceInfo {
   commerceKey: string;
   commerceName: string;
   commerceAddress: string;
   commerceBio: string;
   districtName: string;
   categoryName: string;
   commerceImage: string;
}

export interface DaysAvailable {
   status: string;
   persons: Person[];
   days: Day[];
}

export interface Day {
   commerceDayKey: string;
   commerceDay: string;
}

export interface Person {
   persons: string;
   personsLabel: string;
}

export interface HoursAvailable {
   status: string;
   data: Hour[];
}

export interface Hour {
   commerceHourKey: string;
   commerceHour: string;
}