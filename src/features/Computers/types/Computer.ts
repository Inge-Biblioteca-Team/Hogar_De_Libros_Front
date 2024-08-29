export type Computer = {
    Id:number;
    Status:number;
    Observation:string;
    EquipamentUniqueCode:string;
    EquipamentBrand:string;
    EquipamentCategory:string[];
    EquipamentSerial:string;
    ConditionRating: string[];
    MachineNumber: number
}


export type apiResponseCE ={
    data:Computer[],
    count:number
}
export type ComputerTest = {
    EquipamentUniqueCode:number;
    MachineNumber: number;
    EquipamentSerial:string;
    EquipamentBrand:string;
    Observation:string;
    ConditionRating: number;
    EquipamentCategory:string;
    Status:boolean;
}

export type EquipmentEdit = {
    MachineNumber: number;
    EquipamentSerial:string;
    EquipamentBrand:string;
    ConditionRating: number;
    Observation:string;
    EquipamentCategory:string;
    Status:boolean;
    LoanStatus:true;
}