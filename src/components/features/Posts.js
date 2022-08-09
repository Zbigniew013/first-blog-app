import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Posts = () => {

  const posts = useSelector(getAllPosts);


  return (
    <section>
      <div className="d-flex justify-content-between">
        <h2>All posts</h2>
        <Link to={"/post/add"}>
          <Button variant="outline-info">Add post</Button>
        </Link>
      </div>
      
      <Row> 
        {posts.map(post => 
          <Col key={post.id} className="col-12 col-sm-12 col-md-6 col-lg-4     col-xl-3 mt-4">
            <Card >
              <Card.Body>
                <Card.Title className="mb-3">{post.title}</Card.Title>
                <Card.Subtitle className="mt-0"><strong>Author:</strong>{post.author}</Card.Subtitle>
                <Card.Subtitle className="mt-0"><strong>Published:</strong>{post.publishedDate}</Card.Subtitle>
                <Card.Text className="mt-2">{post.shortDescription}</Card.Text>
                <Link to={"/post/" + post.id} key={post.id}>
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </section>
  )
};
export default Posts;