import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceAPI";

const Shop = observer( () => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    },[])
    
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;