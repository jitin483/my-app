import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { Button, Container, Row,Col, Card, CardBody} from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './Component/home';
import Course from './Component/course';
import AllCourse from './Component/Allcourse';
import Addcourse from './Component/Addcourse';
import Updatecourse from './Component/Updatecourse';
import Menu from './Component/Menu';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import { Fragment } from 'react';

function App() {



  return (
    <Fragment>
     <Router>
     <ToastContainer />
      <Container>
      <Header/>
        <Row>
          <Col md={4} >
                  <Menu/>
          </Col>

          <Col md={8} >
          <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="add-course" Component={Addcourse} exact/>
          <Route path="view-course" Component={AllCourse} exact/>
          <Route path="update-course/:id" element={<Updatecourse/>} exact/>
          </Routes>
          </Col>

        </Row>
      </Container>
   </Router>
  
   </Fragment>
  );
}

export default App;
