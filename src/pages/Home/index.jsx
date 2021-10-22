import React from "react";
import { Link } from "react-router-dom";
import { ButtonLight } from "../../styles/Button";
import { FooterMain, Header, MainHero } from "./styles";
import { Container } from "../../styles/Container";
import { GrTwitter } from "react-icons/gr";

export default function Index() {
    return (
        <>
            <Header>
                <Container>
                    <Link to="/">
                        <img src="/assets/images/logo.svg" alt="Ask Fm" />
                    </Link>
                    <div>
                        <span>Já tem uma conta?</span>
                        <ButtonLight>Entrar</ButtonLight>
                    </div>
                </Container>
            </Header>

            <MainHero>
                <Container>
                    <div>
                        <h1>Pergunte e responda</h1>
                        <Link to="/register">Criar uma conta</Link>
                    </div>

                    <footer>
                        <span>Veja quem está aqui</span>
                        <GrTwitter />
                    </footer>
                </Container>
            </MainHero>

            <FooterMain></FooterMain>
        </>
    );
}
