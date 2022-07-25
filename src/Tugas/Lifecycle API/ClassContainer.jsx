import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Card } from "react-bootstrap";
import axios from 'axios';



export default class ClassContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            users: [],
            valueSearch: ''
        }
    }

    getApi = (inputKey) => {
        let url = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=237862ee55f1472db0725d019903c9d0'
        if (inputKey !== '') {
            url = 'https://newsapi.org/v2/everything?apiKey=237862ee55f1472db0725d019903c9d0&q=' + inputKey
        }
        axios.get(url)
            .then(usersx => {
                const gab = usersx.data.articles
                this.setState({
                    users: gab
                })

            })

    }




    componentDidMount() {

        this.getApi('')
    }



    render() {
        if (this.state.users.length > 0) {
            return (
                <div className="row" style={{ padding: '40px 30px' }}>
                    <div className="row-md text-center">
                        <Form className="d-flex">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2 xxx"
                                aria-label="Search"
                                onChange={e => this.setState({ valueSearch: e.target.value }, () => {
                                    this.getApi(this.state.valueSearch)
                                })}
                            />
                        </Form>
                    </div>
                    <div className="row" style={{ paddingTop: '50px' }}>

                        {

                            this.state.users.map((user, idx) => {
                                return (
                                    <Col key={idx} className="col-md-4 col-sm-6 mb-5">
                                        <Card >
                                            <Card.Img variant="top" src={user.urlToImage} />
                                            <Card.Body>
                                                <Card.Title>{user.title}</Card.Title>
                                                <br /><p style={{ color: "grey" }}>{user.author}, {user.publishedAt}</p>

                                                <p>{user.description}</p>
                                                <Button href={user.url} target="blank" variant="primary">Selanjutnya</Button>
                                            </Card.Body>
                                        </Card>

                                    </Col>

                                )


                            })
                        }

                    </div>

                </div >
            )
        } else {
            <p>Content yang anda cari tidak ditemkan</p>
        }

    }

}

