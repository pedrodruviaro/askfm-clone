import styled from "styled-components";

export const Header = styled.header`
    background-color: ${(props) => props.theme.darkBlue};

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
    }

    a {
        max-width: 100px;
    }

    div {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            color: ${(props) => props.theme.light};
        }
    }
`;

export const MainHero = styled.main`
    background-color: ${(props) => props.theme.lightBlue};

    height: 60vh;

    padding: 1rem;

    > div {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;

        > footer {
            position: absolute;
            bottom: 1rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: ${(props) => props.theme.light};
            font-size: 1.15rem;
            font-weight: 500;
        }
    }

    h1 {
        color: ${(props) => props.theme.light};
        font-size: clamp(1.75rem, 4vw, 2.75rem);
        text-shadow: 0.25px 0.25px rgba(0, 0, 0, 0.5);
        margin-bottom: 1rem;
    }

    a {
        outline: none;
        border: none;
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;

        color: ${(props) => props.theme.light};
        background-color: ${(props) => props.theme.green};
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;

        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

        transition: filter 0.2s ease;

        &:hover {
            filter: brightness(1.1);
        }
    }
`;

export const FooterMain = styled.main``;
