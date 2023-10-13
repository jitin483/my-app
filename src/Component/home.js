import {useEffect} from "react"
import { Container, Button } from 'reactstrap';

const Home=()=> {
  useEffect(()=>{
    document.title='Home';
},[]);

return(
<div >
<div className=" p-5 bg-secondary  text-white rounded text-center">
  <h1 > Welcome To Undefeatable ! </h1>
  <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  <Container >
<Button color="primary" outline  > Start using</Button>  
</Container>

</div>


</div>
);
} 
export default Home;