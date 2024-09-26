export type Course = {
  CourseType: string;
  Quota: string;
  Image: string;
  Name: string;
  date: string;
  Location: string;
  OjetiveAge: string;
  MaxQuota: string;
  id: number;
};
export type Courses = {
  Id: number;
  image: string;
  courseType: string;
  instructor: string;
  avaibleQuota: number;
  capacity: number;
  location: string;
  Date: Date;
  CourseTime:Date;
  EndDate: Date;
  objetiveAge: number;
  status: string;
  duration:string
};

export type ApiCourseResponse = {
  data: Courses[];
  count: number;
};
