
export type Events = {
  EventId: number;
  Location: string;
  Title: string;
  Details: string;
  Category: string;
  Date: string;
  Time: string;
  Image: string;
  TargetAudience: string;
  Status: string;
  InchargePerson: string;
};

export type apiResponseE ={
  data:Events[],
  
  count:number
}


export type Event = {
  id: string;
  eventType: string;
  image: string;
  instructor: string;
  location: string;
  date: Date;
  eventTime: string;
  objetiveAge: string;
  status: string;
  details: string;
  title: string;
};

export type ApiEventsResponse = {
  data:Event[];
  count: number;
};