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
