import React, { Component } from 'react';
import styled  from "styled-components";
import ProfilePic from "../utils/profilePic";

const Wrapper = styled.div`
    padding: 1em;
    background: red;
    width: 25%;
    height: 100%;
    float: left;
`;

class SideMenu extends Component {
    render() { 
        return <Wrapper>
                <ProfilePic></ProfilePic>
            </Wrapper>;
    }
} 
export default SideMenu;