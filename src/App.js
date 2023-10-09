import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CadastroForm from "./CadastroForm";
import ListaCadastros from "./ListaCadastros";

function App() {
  const [cadastros, setCadastros] = useState([]);
  const [cadastroSelecionado, setCadastroSelecionado] = useState(null);

  const handleCadastroSubmit = (cadastro) => {
    setCadastros([...cadastros, cadastro]);
  };

  const handleSelectCadastro = (cadastro) => {
    setCadastroSelecionado(cadastro);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="mt-4">Sistema de Cadastro</h1>
        <Switch>
          <Route
            path="/cadastros"
            render={() => (
              <ListaCadastros
                cadastros={cadastros}
                onSelectCadastro={handleSelectCadastro}
              />
            )}
          />
          <Route
            path="/detalhes"
            render={() =>
              cadastroSelecionado ? (
                <div>
                  <h2>Detalhes do Cadastro</h2>
                  <p>
                    <strong>Nome:</strong> {cadastroSelecionado.nome}{" "}
                    {cadastroSelecionado.sobrenome}
                  </p>
                  <p>
                    <strong>Email:</strong> {cadastroSelecionado.email}
                  </p>
                  <p>
                    <strong>Gênero:</strong> {cadastroSelecionado.genero}
                  </p>
                  <p>
                    <strong>Data de Nascimento:</strong>{" "}
                    {cadastroSelecionado.dataNascimento.toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Idade:</strong> {cadastroSelecionado.idade} anos
                  </p>
                  <p>
                    <strong>Telefone:</strong> {cadastroSelecionado.telefone}
                  </p>
                  <p>
                    <strong>Celular:</strong> {cadastroSelecionado.celular}
                  </p>
                  <p>
                    <strong>CEP:</strong> {cadastroSelecionado.cep}
                  </p>
                  <p>
                    <strong>Faixa Etária:</strong>{" "}
                    {cadastroSelecionado.faixaEtaria.label}
                  </p>
                </div>
              ) : (
                <div>
                  <h2>Detalhes do Cadastro</h2>
                  <p>Selecione um cadastro para ver os detalhes.</p>
                </div>
              )
            }
          />
          <Route
            path="/"
            render={() => (
              <CadastroForm onCadastroSubmit={handleCadastroSubmit} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
