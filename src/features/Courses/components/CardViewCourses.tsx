import React, { useState } from 'react';
import { Button, Card } from 'flowbite-react';
import { NextCourses } from '../types/Courses';
import EnrollmentToCourse from './Modals/EnrollmentToCourse';

type CardViewCoursesProps = {
    course: NextCourses;
};

const CardViewCourses: React.FC<CardViewCoursesProps> = ({ course }: { course: NextCourses }) => {
    const [open, setopen] = useState<boolean>(false);

    return (
        <>
            <Card className="hover:scale-105 transition-transform duration-300">
                <div className="w-full h-48 overflow-hidden">
                    <img
                        src={course.image}
                        alt={course.courseName}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 mt-2">
                    {course.courseName}
                </h5>
                <p className="font-normal text-gray-700">
                    Instructor: {course.instructor}
                </p>
                <p className="font-normal text-gray-700">
                    Fecha: {new Date(course.Date).toLocaleDateString()}
                </p>
                <p className="font-normal text-gray-700">
                    Lugar: {course.location}
                </p>
                <div className="flex justify-center items-center mb-2">
                    <Button color="blue" onClick={() => setopen(true)}>
                        Matricular
                    </Button>
                </div>
            </Card>
            <EnrollmentToCourse course={course} open={open} setOpen={setopen} />
        </>
    );
};

export default CardViewCourses;