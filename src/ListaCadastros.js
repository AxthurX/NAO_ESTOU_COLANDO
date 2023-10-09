import React from "react";

const ListaCadastros = ({ cadastros, onSelectCadastro }) => {
  return (
    <div>
      <h2>Lista de Cadastros</h2>
      <ul className="list-group">
        {cadastros.map((cadastro, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {cadastro.nome} {cadastro.sobrenome}
            <button
              className="btn btn-primary"
              onClick={() => onSelectCadastro(cadastro)}
            >
              Ver Detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCadastros;
