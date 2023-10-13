import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Container,Button} from "reactstrap";
import {useEffect} from "react"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Updatecourse from "./Updatecourse";
import { Link } from "react-router-dom";

//for passing the course data
const Course = ({course,upadte})=> {

    
//delete  course
    const deleteCourse = (id) => {
        axios.delete('http://localhost:9092/courses/'+id).then(
            (response)=>{
                upadte(id);
                    toast.success(" Course deleted Successfully",{position: toast.POSITION.BOTTOM_CENTER});
                 
            },
            (error)=>{
               toast.error("Something wnt wrong ...!!!",{position: toast.POSITION.BOTTOM_CENTER})
            }
        );
    
    };







    return(
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}- {course.id}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger" type="submit" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                  <Link className="btn btn-warning ms-3" to={'/update-course/'+course.id}>Update</Link>
                </Container>
            </CardBody>
        </Card>
    );
      };
export default Course;