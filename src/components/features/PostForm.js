import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');


  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

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
        {/* <Form.Control 
          placeholder="Enter date"
          // type="date"
          value={publishedDate} 
          onChange={event => setPublishedDate(event.target.value)}  /> */}
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
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
        {/* <Form.Control 
          placeholder="Leave a comment here"
          as="textarea" 
          rows={5}
          value={content} 
          onChange={event => setContent(event.target.value)}  /> */}
        <ReactQuill theme="snow" value={content} onChange={setContent} />
      </Form.Group>

      <Button variant="primary" type="submit" >{actionText}</Button>

    </Form>
  );
};

export default PostForm;