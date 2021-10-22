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
            font-size: 0.9rem;
        }
    }
`;

export const MainHero = styled.main`
    background-color: ${(props) => props.theme.lightBlue};

    height: 60vh;

    > div {
        display: flex;
        align-items: center;
        height: 100%;
        position: relative;

        > footer {
            position: absolute;
            bottom: 2rem;
            width: calc(100% - 2rem);
            display: flex;
            justify-content: space-between;
            color: ${(props) => props.theme.light};
            font-size: 1.15rem;
            font-weight: 500;

            &::before {
                content: "";
                display: block;
                width: 25px;
                height: 25px;
                background-color: ${(props) => props.theme.light};
                transform: rotate(45deg);
                position: absolute;
                bottom: -45px;
                left: 15px;
            }
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

export const FooterMain = styled.main`
    margin-top: 2rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;

        > p {
            flex: 1;
            font-weight: 600;
        }

        > span {
            color: ${(props) => props.theme.lightBlue};
            filter: brightness(0.8);
            margin: 1rem;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    > div {
        > div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 0.8rem;
            flex-wrap: wrap;

            span {
                margin: 1rem;

                &:first-child {
                    margin-left: 0;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
`;
