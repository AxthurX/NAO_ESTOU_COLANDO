import React from "react";

const CadastroList = ({ cadastros }) => {
  return (
    <div>
      <h2>Lista de Cadastros</h2>
      <ul>
        {cadastros.map((cadastro, index) => (
          <li key={index}>
            <strong>Nome:</strong> {cadastro.nome} <br />
            <strong>Sobrenome:</strong> {cadastro.sobrenome} <br />
            <strong>Email:</strong> {cadastro.email} <br />
            <strong>Gênero:</strong> {cadastro.genero} <br />
            <strong>Data de Nascimento:</strong> {cadastro.dataNascimento}{" "}
            <br />
            <strong>Idade:</strong> {cadastro.idade} <br />
            <strong>Telefone:</strong> {cadastro.telefone} <br />
            <strong>Celular:</strong> {cadastro.celular} <br />
            <strong>CEP:</strong> {cadastro.cep} <br />
            <strong>Faixa Etária:</strong> {cadastro.faixaEtaria} <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CadastroList;
