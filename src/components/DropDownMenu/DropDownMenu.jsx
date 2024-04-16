import React, { useEffect, useRef } from "react";
import * as S from "./style.ts";
import { NavLink } from "react-router-dom";

const DropDownMenu = ({ onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  return (
    <S.DropDownMenu ref={ref} className="kodchasan-regular">
      <S.DropDownMenuItem>
        <a href="#">Meu Espaço</a>
      </S.DropDownMenuItem>
      <S.DropDownMenuItem $active>
        <a href="#">Quadro de Candidatos</a>
      </S.DropDownMenuItem>
      <S.DropDownMenuItem>
        <a href="#">Quadro de Colaboradores</a>
      </S.DropDownMenuItem>
      <S.DropDownMenuItem>
        <a href="#">Vagas Disponíveis</a>
      </S.DropDownMenuItem>
      <S.DropDownMenuItem>
        <a href="#">Banco de Talentos</a>
      </S.DropDownMenuItem>
      <NavLink to="/login">
        <S.DropDownMenuItem>
            Sair
        </S.DropDownMenuItem>
      </NavLink>

      <S.DropDownMenuItem $border $perfil>
        <img src="/user-rh.svg" alt="" />
        <div>
          <span>Usuário Teste</span>
          <br />
          <span>Analista RH</span>
        </div>
      </S.DropDownMenuItem>
    </S.DropDownMenu>
  );
};

export default DropDownMenu
