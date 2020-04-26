import React,{Component} from 'react';
import styled from "styled-components";

const Link = styled.a`
    display: block;
    float: left;
    font-size: 2em;
    padding: 10px 20px;
    text-decoration: none;
`;

class organizationLogo extends Component {
    render() { 
        return <Link href="#"/>;
    }
}
 
export default organizationLogo;