import styled from "styled-components";

export const Header = styled.header`
    max-width: 1440px;
    background-color: ${(props) => props.theme.darkBlue};

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    > a {
        max-width: 100px;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
            color: ${(props) => props.theme.light};
        }
    }
`;
