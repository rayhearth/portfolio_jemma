import styled from "styled-components";


export const ModeButton = styled.button`
    width:30px;
    height: 30px;
    border-radius: 50%;
    background: ${({ bg }) => bg};
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;
