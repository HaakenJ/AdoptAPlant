import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";


class Books extends Component {
  state = {
    books: [],
    title: "",
  };

  // componentDidMount() {

  // }

  // loadBooks = (res) => {
  //   this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: "" })
  //     .catch(err => console.log(err));
  // };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    API.getAll(this.state.title).then(bookData => {
      console.log(bookData.data.items);
      this.setState({
        books: bookData.data.items
      });
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Google Book Search and Database!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.value}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Book Title(required)"
              />

              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Find Now
              </FormBtn>
            </form>
            <List>
              {this.state.books.map(element =>
                <ListItem
                  key={element.volumeInfo.id}
                  title={element.volumeInfo.title}
                  author={element.volumeInfo.hasOwnProperty("authors") ? element.volumeInfo.authors.join(",") : ""}
                  description={element.volumeInfo.description}
                  image={element.volumeInfo.imageLinks.thumbnail}
                  link={element.volumeInfo.previewLink}
                />
              )}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
