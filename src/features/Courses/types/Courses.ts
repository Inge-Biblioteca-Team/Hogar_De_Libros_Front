export type createCourse = {
  date: Date;
  courseTime: string;
  location: string;
  instructor: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
};

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
  courseId: number;
  date: Date;
  courseTime: string;
  location: string;
  instructor: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
};

export type ResponseC = {
  data: Courses[];
  count: number;
};

export type updateCourse = {
  date: Date;
  courseTime: string;
  location: string;
  instructor: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
};

export type NextCourses = {
  Id: number;
  image: string;
  courseType: string;
  instructor: string;
  avaibleQuota: number;
  capacity: number;
  location: string;
  Date: Date;
  CourseTime: Date;
  EndDate: Date;
  objetiveAge: number;
  status: string;
  duration: string;
};
export type ApiCourseResponse = {
  data: Courses[];
  count: number;
};
