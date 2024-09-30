export type createCourse = {
  date: Date;
  courseTime: string;
  location: string;
  instructor: string;
  courseName: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
  programProgramsId: number;
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
  courseName: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: string;
  image: string;
  duration: string;
  endDate: Date;
  programProgramsId: number;
  programsName: number;
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
  courseName: string;
  courseType: string;
  targetAge: number;
  capacity: number;
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
  programProgramsId: number;
};

export type NextCourses = {
  Id: number;
  image: string;
  courseType: string;
  courseName: string;
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
  data: NextCourses[];
  count: number;
};

export type program = {
  programName: string;
  programsId: number;
}
