import { Fragment,useEffect, useState } from "react";
import React, {Button, Container, Form, FormGroup,Label,Input} from "reactstrap"
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Updatecourse = ({course})=>{
    useEffect(()=>{
        //for home title
        document.title="Update Courses || By Undefitable"

        //fetch data from server using id
        axios.get('http://localhost:9092/courses/'+id).then(
            (responce)=>{
                setCourse({...Course,title: responce.data.title, description: responce.data.description})
            },
            (error)=>{
                toast.error('Something went wrong..');  
            }
        );
       
    },[]);

    //Retrieve id 
    const {id}= useParams();

    //set courses using set course
    const [Course,setCourse]=useState({
        id: id,
        title: ' ',
        description: ''
    });

   //Handle form
    const handleForm=(e)=>{
        console.log(Course);
        Updatecourse(id);
        e.preventDefault();
        
    };

    //Postdata to server
    const Updatecourse=(id)=>{

        axios.put('http://localhost:9092/courses/'+id, Course).then(
            (responce)=>{
                toast.success('Data has been updated ',{position: toast.POSITION.BOTTOM_CENTER});
            },
            (error)=>{
                toast.error('Something went wrong..',{position: toast.POSITION.BOTTOM_CENTER})
  
            }
        );
    };

    

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userid">Course Id </Label>
                    <Input 
                    type="text"
                    placeholder="Enter here"
                    name="courseId"
                    id="courseId"
                    value={id}
                    onChange={(e)=>{
                        setCourse({...Course,id:e.target.value})
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input  
                    type="text"
                    placeholder="Enter title here" 
                    name="title" 
                    id="title"
                    value={Course.title}
                    onChange={(e)=>{
                        setCourse({...Course,title:e.target.value})
                    }}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="textarea"  for="textarea" 
                      name="description" 
                      id="description"   
                      placeholder="Enter Descriptuin here" 
                      value={Course.description}
                      onChange={(e)=>{
                        setCourse({...Course, description: e.target.value})
                    }}
                      style={{height: 150}} />  
                </FormGroup>

                <Container className="text-center"> 
                    <Button color="success" type="submit"  >Update Course</Button>
                    <Button color="danger" type="reset" className="ms-3" >Cancel</Button>
                </Container>
            </Form>
        </Fragment>
        
    );
}
export default Updatecourse;