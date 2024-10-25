import React from 'react';
import { Card } from 'flowbite-react';
import { Courses } from '../types/Courses';

type CardViewCoursesProps = {
  course: Courses;
};

const CardViewCourses: React.FC<CardViewCoursesProps> = ({ course }) => {
  return (
    <Card
      imgAlt={course.courseName}
      imgSrc={course.image}
      className="hover:scale-105 transition-transform duration-300"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900">
        {course.courseName}
      </h5>
      <p className="font-normal text-gray-700">
        Instructor: {course.instructor}
      </p>
      <p className="font-normal text-gray-700">
        Fecha: {new Date(course.date).toLocaleDateString()}
      </p>
      <p className="font-normal text-gray-700">
        Lugar: {course.location}
      </p>
    </Card>
  );
};

export default CardViewCourses;