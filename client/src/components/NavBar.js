import React, { useContext } from "react";
import { Context } from "..";
import Navbar from "react-bootstrap/Navbar";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from "react-bootstrap/esm/NavLink";
import Button from "react-bootstrap/Button";
import { observer } from "mobx-react-lite";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/const";
import { useNavigate } from "react-router-dom";




const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: 'white' }} >
                            <Button variant={'outline-light'} onClick={() => history(ADMIN_ROUTE)} className="me-3">Админ панель</Button>
                            <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)} >Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)} >Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
 