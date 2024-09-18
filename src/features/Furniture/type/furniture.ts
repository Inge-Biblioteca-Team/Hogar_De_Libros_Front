export type furniture ={
    Id: number; //id
    LicenseNumber: string;
    Description: string;
    Location: string;
    InChargePerson: string;
    ConditionRating: number;
    Status: string;
}

export type apiResponseFt ={
    data:furniture[],
    count:number
}

export type FurnitureEdit = {
    Id: number; //id
    LicenseNumber: string;
    Description: string;
    Location: string;
    InChargePerson: string;
    ConditionRating: number;
    Status: string;
}

