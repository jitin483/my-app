import {useEffect} from "react";
import { ListGroup} from "reactstrap";
import { Link } from 'react-router-dom';
import Updatecourse from "./Updatecourse";

const Menu=()=>{
 
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action> 
              Home
            </Link >
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action> 
              Add Course
            </Link >
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-course" action> 
              View Course
            </Link >
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action> 
              About
            </Link >
            <Link className="list-group-item list-group-item-action" tag="a" to=" " action > 
              Contact Us
            </Link >
        </ListGroup>
    );

}
export default Menu;