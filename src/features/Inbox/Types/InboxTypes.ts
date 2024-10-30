export type Nota = {
    id_Note: number;
    date: Date;
    deletedAt?: Date;
    message: string;
    type: string;
    isRead: boolean;
    trash: boolean;
  };

  export type InboxResponse = {
    data: Nota[];
    count: number;
  };
  
