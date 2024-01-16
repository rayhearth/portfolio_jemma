import styled from "styled-components";


export const Image = styled.img`
  :first-child {
  width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }`

export const BgImage = styled.img`
  position: absolute;
  
  `

export const Cloud = styled.img`
  position: absolute;
  z-index:500;
  `