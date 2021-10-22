import React from "react";
import { Link } from "react-router-dom";
import { ButtonLight } from "../../styles/Button";
import { Header } from "./styles";

export default function Index() {
    return (
        <>
            <Header>
                <Link to="/">
                    <img src="/assets/images/logo.svg" alt="Ask Fm" />
                </Link>
                <div>
                    <span>Já tem uma conta?</span>
                    <ButtonLight>Entrar</ButtonLight>
                </div>
            </Header>
        </>
    );
}
