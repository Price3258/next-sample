import { NextPage } from "next";
import styled from "styled-components";


const H1 = styled.h1`
    color: red;
`

const Home: NextPage = () => {
    return (
        <div>
            <H1>Home</H1>
        </div>
    );
}

export default Home;