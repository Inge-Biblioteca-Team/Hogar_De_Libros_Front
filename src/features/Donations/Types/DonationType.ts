export type Donation = {
  DateGenerated: string;
  DonationID: number;
  UserFullName: string;
  UserCedula: string;
  UserAddress: string;
  UserPhone: string;
  UserEmail: string;
  Status: string;
  SubCategory: string;
  Document: string[];
  DateRecolatedDonation: string;
  ItemDescription: string;
  ResourceCondition: string;
  Reason: string | null;
};

export type DonationsList = {
  data: Donation[];
  count: number;
};


export type NewDonation = {
  DonationId: number;
  UserFullName: string;
  UserCedula: string;
  UserBirthDate: Date;
  UserAddress: string;
  UserPhone: string;
  UserEmail: string;
  Document?: File[];
  SubCategory: string;
  DateRecolatedDonation?: Date;
  ResourceCondition: string;
  ItemDescription: string;
};