export type Programs = {
  Name: string;
  Image: string;
  Description: string;
  id: string;
};
export type Program = {
  programName: string;
  description: string;
  image: string;
  status: boolean;
  programsId: string;
};

export type ApiProgramsResponse = {
  data: Program[];
  count: number;
};

export type Course = {
  Status: boolean;
  courseId: number;
  courseName: string;
  date: string;
  courseTime: string;
  location: string;
  instructor: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  image: string;
  duration: string;
  endDate: string;
  programProgramsId: number;
};

export type Activitie = {
  activitieID: string;
  programName: string;
  activitieName: string;
  activityType: string;
  description: string;
  activitiDate: Date;
  image: string;
};

export type ActivitieList = {
  data: Activitie[];
  count: number;
};
