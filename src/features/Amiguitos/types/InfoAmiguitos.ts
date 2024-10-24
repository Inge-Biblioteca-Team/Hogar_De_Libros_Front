import { User } from "../../Loan/Types/BookLoan";

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
  disability: string;          
  userGender: "M" | "F" | "";          
  userBirthDate: Date;             
  userAddress: string;         
  userPhone: string;           
  userEmail?: string;          
  status: string;             
  principalCategory: string;   
  subCategory: string;         
  document?: string[];            
  dateGenerated?: Date;       
  dateRecolatedDonation?: Date; 
  extraInfo?: string;
  user?: User;  
  };

  