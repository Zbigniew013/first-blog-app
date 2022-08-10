import { Button } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import { getPostById } from "../../redux/postsRedux";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { removePost } from "../../redux/postsRedux";


const SinglePost = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();

  const thrash = (event) => {
    event.preventDefault();
    dispatch(removePost(postData.id))
  };

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
        </Link> <Button variant="outline-danger" onClick={handleShow} >Delete</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This operation will completely remove this this post from the app. Are you sure you want to do that?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={thrash}>Remove</Button>
        </Modal.Footer>
      </Modal>

      </Col>
      <Col lg={2}></Col>
    </Row>
  )
};

export default SinglePost;