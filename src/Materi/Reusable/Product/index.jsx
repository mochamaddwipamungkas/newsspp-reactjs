import React from "react";
import styled from "styled-components";
import Counter from "../Counter";
import imgProduct2 from "./profil.jpg"

// const imgProduct = "./profil.jpg";

const CardContainer = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
`;

const Image = styled.img`
    width: 100%;
`;

const Heading = styled.h1`
    font-size: 10px;
`;

const Price = styled.p`
    color: grey;
    font-size: 22px;
`;

const Description = styled.p`
    font-size: small;
`;

export default class Product extends React.Component {


    handleValue = (data) => {
        this.props.receiveValue(data);
    }
    render() {
        return (
            <div>
                <CardContainer>
                    <Image src={imgProduct2} alt="img" />
                    <Heading>Title Card</Heading>
                    <Price>$19,99</Price>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit ea sapiente beatae sunt! Necessitatibus, beatae. Sit veniam eum animi qui aspernatur distinctio nisi necessitatibus pariatur placeat repellat, voluptatem ratione!</Description>
                    <Counter receiveValue={this.handleValue} />
                </CardContainer>
            </div>
        )
    }
}