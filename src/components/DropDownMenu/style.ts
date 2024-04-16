import styled, { css } from "styled-components";

export const DropDownMenu = styled.div`
  position: fixed;
  top: 0;
  width: 215px;
  background: linear-gradient(180deg, #2d2945 0%, #225fa1 100%);
  z-index: 400;
  border-radius: 0 0 8px 8px;
  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  overflow: hidden;

  @keyframes slide-top {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const DropDownMenuItem = styled.div<{
  $active?: boolean;
  $border?: boolean;
  $perfil?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #ddd;

  & a {
    font-weight: 500;
    text-decoration: none;
    color: #ddd;
  }

  &:hover {
    background-color: #225fa1;
  }

  ${({ $border }) =>
    $border && `border-top: 1px solid rgba(255, 255, 255, 0.07);`}

  ${({ $perfil }) => $perfil && `background-color:#4682b4;`}
  
  
    ${({ $active }) =>
    $active &&
    css`
      background-color: #2d2945;

      &:hover {
        background-color: #2d2945;
      }
    `}
`;
