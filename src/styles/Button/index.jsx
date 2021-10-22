import styled from "styled-components";

export const ButtonLight = styled.button`
    outline: none;
    border: none;
    display: block;
    cursor: pointer;
    border-radius: 4px;

    color: ${(props) => props.theme.light};
    background-color: ${(props) => props.theme.blue};
    padding: 0.25rem 0.75rem;
    font-size: 1rem;

    transition: filter 0.2s ease;

    &:hover {
        filter: brightness(1.1);
    }
`;
