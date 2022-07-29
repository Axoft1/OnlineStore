import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import star from '../assets/star.svg';

const DevicePage = () => {
    const device = { id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://img5.lalafo.com/i/posters/original/e3/35/d5/8b003b74c299624a509534d4af.jpeg' }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 гб' },
        { id: 2, title: 'Оперативная память', description: '5 гб' },
        { id: 3, title: 'Оперативная память', description: '5 гб' },
        { id: 4, title: 'Оперативная память', description: '5 гб' },
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-colum align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-colum align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={'outline-dark'} >Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'Lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>

        </Container>
    )
}

export default DevicePage;