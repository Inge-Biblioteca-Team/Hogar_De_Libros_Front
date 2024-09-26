export type Courses = {
  courseId: number,
  date: Date,
  courseTime: string,
  location: string,
  instructor: string,
  courseType: string,
  targetAge: number,
  capacity: number,
  Status: boolean,
  image: string, 
  duration: string,
  endDate: Date
};

export type ResponseC = {
  data: Courses[],
  count: number
}

export type updateCourse = {
  date: Date,
  courseTime: string,
  location: string,
  instructor: string,
  courseType: string,
  targetAge: number,
  capacity: number,
  Status: boolean,
  image: string, 
  duration: string,
  endDate: Date
}

export type createCourse = {
  date: Date,
  courseTime: string,
  location: string,
  instructor: string,
  courseType: string,
  targetAge: number,
  capacity: number,
  Status: boolean,
  image: string, 
  duration: string,
  endDate: Date
}