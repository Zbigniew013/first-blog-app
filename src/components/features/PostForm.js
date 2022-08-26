import { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';


const PostForm = ({ action, actionText, ...props }) => {

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
    action({ title, author, publishedDate, shortDescription, content });
    };
  };

  return (

    <Form onSubmit={validate(handleSubmit)} >

      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          {...register('title', { required: true, minLength: 3 })}
          placeholder="Enter title" 
          value={title} 
          onChange={event => setTitle(event.target.value)} />
        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control 
          {...register('author', { required: true, minLength: 3 })}
          placeholder="Enter author"
          value={author} 
          onChange={event => setAuthor(event.target.value)} />
          {errors.author && <small className="d-block form-text text-danger mt-2">Author is too short (min is 3)</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPublished">
        <Form.Label>Published</Form.Label>
        {/* <Form.Control 
          placeholder="Enter date"
          type="date"
          value={publishedDate} 
          onChange={event => setPublishedDate(event.target.value)}  /> */}
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">The field is required</small>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Short description</Form.Label>
        <Form.Control 
          {...register('shortDescription', { required: true, minLength: 20 })}
          placeholder="Leave a comment here"
          as="textarea" 
          rows={2}
          value={shortDescription} 
          onChange={event => setShortDescription(event.target.value)} />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">Comment is too short (min is 20)</small>}

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
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
      </Form.Group>

      <Button variant="primary" type="submit" >{actionText}</Button>

    </Form>
  );
};

export default PostForm;