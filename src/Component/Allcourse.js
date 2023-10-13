import React, { useState,useEffect, Fragment } from "react"
import Course from "./course";
import base_url from "../Api/bootapi";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Allcourse = ()=>{

    useEffect(()=>{
        //Load Courses from server
        loadallCourse();
    }, []);


    // for course for courses and setfor set the courses 
const [courses,setCourses]=useState([]);

//Fuction to call server 
const loadallCourse =()=>{
    axios.get('http://localhost:9092/courses').then(
        (responce)=>{
            setCourses(responce.data);
            toast.success('Courses load successfully',{position: toast.POSITION.BOTTOM_CENTER})
        },
        (error)=>{
            toast.error('Somethong went wrong..',{position: toast.POSITION.BOTTOM_CENTER_CENTER});
        }
    );
};
// for after remove course list will be update on same
 const removecoursebyid=(id)=>{
    setCourses(courses.filter((c) => c.id != id ));
 };



   

    return (
    <Fragment>
    <p>List of All Courses</p>
    {
        courses.length>0? courses.map((item,index)=>(
            < Course  course={item}  Key={index} upadte={removecoursebyid} /> 
        )): "No courses available"
    }

    </Fragment>
    );
  };
export default Allcourse;