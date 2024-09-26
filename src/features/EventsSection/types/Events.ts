
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

export type createEvents ={
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
}

export type updateEvent ={
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
}



