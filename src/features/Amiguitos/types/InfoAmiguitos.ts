
export type Amigos = {
    Image: string;
    NameType: string;
    Description: string;
    id: string
}

export type CreateFriends = {
    friendId: number;           
    userFullName: string;        
     userCedula: string;        
     userBirthDate: Date;             
     userAddress: string;         
     userPhone: string;           
     userEmail?: string;             
     principalCategory: string;   
     subCategory: string;  
     Experience: string;       
     document?: string[];      
     extraInfo?: string;
     };
   
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
   
     export type Donation ={
       DonationId: number;
       UserFullName: string;
       UserCedula: string;
       UserBirthDate: Date;
       UserAddress: string;
       UserPhone: string;
       UserEmail: string;
       Document?: string[];
       SubCategory: string;
       dateRecolatedDonation?: Date; 
       ResourceCondition: string;
       ItemDescription: string;
     }
     