import Layout from '../components/Layout'
import styled from "styled-components";

const index = () => {
    return (
        <Layout>
            <Title>Welcome To my Simple Next.js App</Title>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum nostrum recusandae corporis harum soluta non, nihil mollitia assumenda illo minus tempora quidem placeat incidunt vitae iusto voluptatibus vel esse.</Text>
        </Layout>
    )
}

const Title = styled.h1`
  text-align: center;
  color: palevioletred;
`;

const Text = styled.p`
  text-align: center;
  color: gray;
`;

export default index

