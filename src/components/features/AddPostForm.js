import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsRedux";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPost ({ id: Math.random().toString(), title, author, publishedDate, shortDescription, content }));
    setTitle('');
    setAuthor('');
    setPublishedDate('');
    setShortDescription('');
    setContent('');
    navigate("/", { replace: true });
  }
  
  return (

    <Form onSubmit={handleSubmit} >

      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          placeholder="Enter title" 
          value={title} 
          onChange={event => setTitle(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          placeholder="Enter author"
          value={author} 
          onChange={event => setAuthor(event.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublished">
        <Form.Label>Published</Form.Label>
        <Form.Control 
          placeholder="Enter date"
          value={publishedDate} 
          onChange={event => setPublishedDate(event.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          placeholder="Leave a comment here"
          as="textarea" 
          rows={2}
          value={shortDescription} 
          onChange={event => setShortDescription(event.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Main content</Form.Label>
        <Form.Control 
          placeholder="Leave a comment here"
          as="textarea" 
          rows={5}
          value={content} 
          onChange={event => setContent(event.target.value)}  />
      </Form.Group>

      <Button variant="primary" type="submit" >Add post</Button>

    </Form>
  );
};

export default AddPostForm;

