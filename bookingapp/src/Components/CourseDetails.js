import React from 'react'
import '../Stylesheets/mystyle.css'

export const CourseDetails=(props)=>{
    return (
    <div className="coursedet colstyle">
        <h1>Course Details</h1>
        <ul>
        {
            props.courses.map(course=>{
                return (
                    <div key={course.id}>
                        <li><h3>{course.cname}</h3></li>
                        <li><h4>{course.cdate}</h4></li>
                    </div>
                );
            })
        }
        </ul>
    </div>);
}