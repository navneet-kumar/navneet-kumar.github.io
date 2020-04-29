import React, { Component } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Wrapper = styled.div`
  padding: 1%;
`;

class Page extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>{this.props.content}</Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page;
