export type Amigos = {
  Image: string;
  NameType: string;
  Description: string;
  id: string;
};

export type CreateFriends = {
  friendId: number;
  UserFullName: string;
  UserCedula: string;
  UserBirthDate: Date;
  UserGender: string;
  UserAddress: string;
  UserPhone: string;
  UserEmail?: string;
  PrincipalCategory: string;
  SubCategory: string;
  Experience: string;
  Document?: File[];
  ExtraInfo?: string;
};

