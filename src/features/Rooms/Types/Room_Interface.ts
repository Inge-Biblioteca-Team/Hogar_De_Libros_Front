export type Room = {
    roomId: number;
    roomNumber: string;
    name?: string; 
    area: number;
    capacity: number;
    observations?: string; 
    image?: string; 
    location: string;
    status: string; 
  };

  export type RoomApiResponse = {
    data: Room[];
    
    count: number;
  };
