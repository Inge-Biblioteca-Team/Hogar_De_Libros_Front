export type Reservation = {
  observations: string;
  selectedHours: number[];
  date: string;
  name: string;
  EventId?: string;
  courseId?: string;
  userCedula: string;
  roomId: number;
  reason: string;
  personNumber: string;
};
export type Reserve = {
  observations: string;
  personNumber: string;
  reason: string;
  finishObservation: string;
  selectedHours: number[];
  reservationDate: string;
  EventName: string;
  CourseName: string;
  UserName: string;
  UserLastName: string;
  UserEmail: string;
  UserPhone: string;
  room: string;
  roomName: string;
  date: string;
  name: string;
  userCedula: string;
  roomId: number;
  rommReservationId: number;
};

export type EndReservation = {
  rommReservationId: number;
  finishObservation: string;
};

export type ReserveResponse = {
  data: Reserve[];
  count: number;
};

export type queque = {
  rommReservationId: 3;
  selectedHours: string[];
  reason: string;
  roomNumber: string;
  roomId: number;
};

export const HourMapping: { [key: number]: string } = {
  8: "8 AM",
  9: "9 AM",
  10: "10 AM",
  11: "11 AM",
  12: "12 PM",
  13: "1 PM",
  14: "2 PM",
  15: "3 PM",
  16: "4 PM",
  17: "5 PM",
};

export type myReservation = {
  rommReservationId: number;
  name: string;
  date: Date;
  selectedHours: number[];
  observations: string;
  personNumber: string;
  reason: string;
  reserveStatus: string;
  room: number;
  roomName: string;
  images: string[];
};

export type responseMyReservations = {
  data: myReservation[];
  count: number;
};
