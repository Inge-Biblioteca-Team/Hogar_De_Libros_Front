//cambiar a course cuando este el api

export type Events = {
  date: string;
  title: string;
  location: string;
  details: string;
  Image: string;
  TargetAudience:string;
  id: string;
};

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

