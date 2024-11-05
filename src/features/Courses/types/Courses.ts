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
  Status: boolean;
  image: string;
  duration: string;
  endDate: Date;
  programProgramsId: string;
  programsName: number;
  availableQuota: number;
  currentStatus: string;
  materials: string;
};

export type ResponseC = {
  data: Courses[];
  count: number;
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
  materials: string;
};
export type ApiCourseResponse = {
  data: NextCourses[];
  count: number;
};

export type program = {
  programName: string;
  programsId: number;
};
