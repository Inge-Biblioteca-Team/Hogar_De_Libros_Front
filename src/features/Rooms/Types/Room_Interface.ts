
  export type RoomApiResponse = {
    data: Room[];
    
    count: number;
  };

export type Room = {
    image: string[],
    name: string,
    area: number,
    capacity: number,
    location: string,
    roomNumber: string,
    observations: string,
    roomId:number;
}

export type CreateRoom = {
    name: string,
    roomNumber: string,
    area: number,
    capacity: number,
    observations: string,
    image?: string[],
    location: string;
}

export type updateRooms = {
    roomId: number,
    name: string,
    roomNumber: string,
    area: number,
    capacity: number,
    observations: string,
    image?: string[],
    location: string;
}