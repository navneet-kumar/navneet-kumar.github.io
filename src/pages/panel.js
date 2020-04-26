import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1em;
    background: grey;
    width: 75%;
    height: 100%;
    float: right;
`;

class Panel extends Component {
    render() { 
        return <Wrapper></Wrapper>;
    }
}
 
export default Panel;