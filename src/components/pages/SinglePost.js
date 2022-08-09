import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import { getPostById } from "../../redux/postsRedux";
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const SinglePost = () => {

  const { id } = useParams();

  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/"/>

  return (
    <Row >
      <Col lg={2}></Col>
      <Col lg={6}>
        <Card.Title className="mb-3">{postData.title}</Card.Title>
          <Card.Subtitle className="mt-0"><strong>Author:</strong>{postData.author}</Card.Subtitle>
          <Card.Subtitle className="mt-0"><strong>Published:</strong>{postData.publishedDate}</Card.Subtitle>
          <Card.Text className="mt-2">{postData.shortDescription}</Card.Text>
      </Col>
      <Col lg={2}>
        <Link key={postData.id} to={"/post/edit/" + postData.id}>
          <Button variant="outline-info"  className="mr-4">Edit</Button>
        </Link> <Button variant="outline-danger">Delete</Button>
      </Col>
      <Col lg={2}></Col>
    </Row>
  )
};

export default SinglePost;