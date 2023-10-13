import { Fragment,useEffect, useState } from "react";
import React, {Button, Container, Form, FormGroup,Label,Input} from "reactstrap"
import axios from "axios";
import { toast } from "react-toastify";

const Addcourse = ()=>{
    useEffect(()=>{
        document.title='Add Course'
       
    },[]);

    //Handle form
    const [Course,setCourse]=useState({});
    const handleForm=(e)=>{
        postdataToserver(Course);
        console.log(Course);
        e.preventDefault();
        
    };

    //Postdata to server
    const postdataToserver=(data)=>{

        axios.post('http://localhost:9092/courses',data).then(
            (responce)=>{
                toast.success("Data has been submitted ",{position: toast.POSITION.BOTTOM_CENTER});
              

            },
            (error)=>{
                toast.error("Something went wrong..",{position: toast.POSITION.BOTTOM_CENTER})
              
               
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
                      onChange={(e)=>{
                        setCourse({...Course,description:e.target.value})
                    }}
                      style={{height: 150}} />  
                </FormGroup>

                <Container className="text-center"> 
                    <Button color="success" type="submit"  >Add Course</Button>
                    <Button color="danger" type="reset" className="ms-3" >Cancel</Button>
                </Container>
            </Form>
        </Fragment>
        
    );
}
export default Addcourse;