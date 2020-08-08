import React from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

export const StoryComponent = () => {
  return (
    <div className="photogalery container mt-5">
      <CardColumns>
        <Card className="shadow">
          <CardImg
            top
            width="100%"
            src="https://www.celarity.com/wp-content/uploads/2017/02/UX1-23043203.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Web Designer/ Developer</CardTitle>
            <CardSubtitle>not a professional</CardSubtitle>
            <CardText>
              I've designed two websites of my own. and also worked in an
              keeperSpot which is a stratup.
            </CardText>
            <p className="name">Tools used</p>
            <ListGroup>
              <ListGroupItem>Bootstrap 4</ListGroupItem>
              <ListGroupItem>Adobe Illustrator</ListGroupItem>
              <ListGroupItem>Node.Js</ListGroupItem>
              <ListGroupItem>React.Js & React Native</ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
        <Card className="shadow">
          <CardImg
            top
            width="100%"
            src="https://images.idgesg.net/images/article/2018/01/emerging-tech_ai_machine-learning-100748222-large.jpg"
            alt="Card image cap"
          />
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Machine Learning</CardTitle>
            <CardText>
              The feild of AI has fascinated me alot. Albeit I've not worked on
              it neither I'm an expert but I would like to dig deeper into this
              feild.
            </CardText>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#3F6E8A", borderColor: "#333" }}
          className="shadow"
        >
          <CardTitle>Number of Projects </CardTitle>
          <CardText>
            I've completed two projects. First one is Tripplin which is a dummy
            Car Rental site like zoom Car and the second one is a Chat
            Application.
          </CardText>
        </Card>
        <Card className="shadow">
          <CardImg
            top
            width="100%"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Competitive-Programming.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              Data Structure/Algorithms and Competitive Programming
            </CardTitle>
            <CardSubtitle>learning</CardSubtitle>
            <CardText>
              I also love to do competitive Programming. with all these
              interesting feild of studies its really hard to choose.
            </CardText>
            <p className="name">Tools used</p>
            <ListGroup>
              <ListGroupItem>Language- C++</ListGroupItem>
              <ListGroupItem>Vs Code</ListGroupItem>
              <ListGroupItem>Leetcode, CodeChef </ListGroupItem>
            </ListGroup>
          </CardBody>
        </Card>
      </CardColumns>
    </div>
  );
};
