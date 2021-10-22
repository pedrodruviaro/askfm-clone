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

            <FooterMain>
                <Container>
                    <nav>
                        <p>Potuguês (Brasil)</p>
                        <span>English</span>
                        <span>Español</span>
                        <span>Français</span>
                        <span>Deutsch</span>
                        <span>Italiano</span>
                        <span>Turkçe</span>
                        <span>Polski</span>
                        <span>Todos os idiomas</span>
                    </nav>
                    <hr />
                    <div>
                        <span>&copy; SIA Ask.fm 2021</span>
                        <span>Privacidade</span>
                        <span>Termos de Uso</span>
                        <span>Logotipo e botões</span>
                        <span>Anunciar</span>
                        <span>Entre em contato</span>
                        <span>
                            Idioma: <strong>Português</strong>
                        </span>
                    </div>
                </Container>
            </FooterMain>
        </>
    );
}
