export type furniture ={
    Id: number; //id
    Lincensenumber: string;
    Description: string;
    Location: string;
    InChargePerson: string;
    ConditionRating: number;
    Status: boolean;
}

export type apiResponseFt ={
    data:furniture[],
    count:number
}

export type FurnitureEdit = {
    Id: number; //id
    Lincensenumber: string;
    Description: string;
    Location: string;
    InChargePerson: string;
    ConditionRating: number;
    Status: boolean;
}

