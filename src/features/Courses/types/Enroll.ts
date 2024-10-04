export type Enrollment = {
  userCedula: string;
  courseId: number;
  UserName: string;
  direction: string;
  phone: string;
  ePhone: string;
  email: string;
  enrollmentDate: Date;
};

export type EnrollResp = {
  data: Enrollment[];
  count: number;
};
