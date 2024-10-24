export type Colaborator = {
  CollaboratorId: number;
  UserFullName: string;
  Entitycollaborator?: string;
  UserCedula: string;
  UserBirthDate: Date;
  UserGender: string;
  UserAddress: string;
  UserPhone: string;
  UserEmail: string;
  Status?: string;
  PrincipalCategory: string;
  SubCategory: string;
  Experience?: string;
  Document?: string[];
  DateGenerated: Date;
  ExtraInfo?: string;
  activityDate: Date;
  Reason: string;
  Description: string;
};

export type ColaboratorsList = {
  data: Colaborator[];
  count: number;
};
