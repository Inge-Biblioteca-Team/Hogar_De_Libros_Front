export type Reservation = {
  observations: string;
  selectedHours: number[];
  date: string;
  name: string;
  EventId?: number;
  courseId?: number;
  userCedula: string;
  roomId: number;
  reason: string;
  personNumber: string;
};
export type Reserve = {
  observations: string;
  selectedHours: number[];
  reservationDate: string;
  date: string;
  name: string;
  EventId?: number;
  courseId?: number;
  userCedula: string;
  roomId: number;
  reason: string;
  personNumber: string;
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