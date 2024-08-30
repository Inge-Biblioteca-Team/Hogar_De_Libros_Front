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


export type ComputerTest = {
    EquipmentUniqueCode:string;
    MachineNumber: number;
    EquipmentSerial:string;
    EquipmentBrand:string;
    Observation:string;
    ConditionRating: number;
    EquipmentCategory:string;
    Status:boolean;
}

export type apiResponseCE ={
    data:ComputerTest[],
    count:number
}
export type EquipmentEdit = {
    MachineNumber: number;
    EquipmentSerial:string;
    EquipmentBrand:string;
    ConditionRating: number;
    Observation:string;
    EquipmentCategory:string;
    Status:boolean;
    LoanStatus:true;
}