export type Friend = {
  DateGenerated: string;
  FriendId: number;
  UserFullName: string;
  UserCedula: string;
  UserBirthDate: string;
  UserGender: string;
  UserAddress: string;
  UserPhone: string;
  UserEmail: string;
  Status: string;
  PrincipalCategory: string;
  SubCategory: string;
  Experience: string;
  Document: string[];
  ExtraInfo: string;
  Reason: string;
};

export type FriendResponse = {
  data: Friend[];
  count: number;
};
