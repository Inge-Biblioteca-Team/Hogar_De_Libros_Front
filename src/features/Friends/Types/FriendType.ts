export type Friend = {
  FriendId: number;
  UserFullName: string;
  UserCedula: string;
  UserBirthDate: Date;
  UserAddress: string;
  UserPhone: string;
  UserEmail: string;
  Status: string;
  PrincipalCategory: string;
  SubCategory: string;
  Experience: string;
  Document: string[];
  DateGenerated: Date;
  ExtraInfo: string;
  Reason: string;
};

export type FriendResponse = {
    data: Friends[];
    count: number;
  };