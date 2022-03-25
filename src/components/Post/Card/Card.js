import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { isEmpty } from "../../Utils";

const Card = ({ post }) => {
  const usersData = useSelector((state) => state.usersReducer);

  return (
    <Container>
      <Row>
        <img
          class="card-img-top"
          src="https://source.unsplash.com/1600x900/?startup,meeting"
          alt="Card image cap"
        />
      </Row>
      <Row>{post.message}</Row>
      <Row>
        {" "}
        <Col>{post.createdAt}</Col>
        <Col>Participants : {post.likers.length}</Col>
      </Row>
      posté par{" "}
      {!isEmpty(usersData[0]) &&
        usersData
          .map((user) => {
            if (user._id === post.posterId) return user.pseudo;
            else return null;
          })
          .join("")}
    </Container>
  );
};

export default Card;

{
  /* <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>; */
}
