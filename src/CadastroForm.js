import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { useHistory } from "react-router-dom";
import CadastroList from "./CadastroList";

const CadastroForm = ({ onCadastroSubmit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    genero: "",
    dataNascimento: null,
    telefone: "",
    celular: "",
    cep: "",
    faixaEtaria: null,
  });

  const [cadastros, setCadastros] = useState([]);
  const [idade, setIdade] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCadastroSubmit = (e) => {
    e.preventDefault();
    const novoCadastro = { ...formData };
    setCadastros([...cadastros, novoCadastro]);
    setFormData({
      nome: "",
      sobrenome: "",
      email: "",
      genero: "",
      dataNascimento: "",
      idade: "",
      telefone: "",
      celular: "",
      cep: "",
      faixaEtaria: "",
    });
  };

  const handleDataNascimentoChange = (date) => {
    setFormData({
      ...formData,
      dataNascimento: date,
    });
    const hoje = new Date();
    const nascimento = new Date(date);
    const diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
    setIdade(diferencaAnos);
  };

  const handleTelefoneChange = (value) => {
    setFormData({
      ...formData,
      telefone: value,
    });
  };

  const handleCelularChange = (value) => {
    setFormData({
      ...formData,
      celular: value,
    });
  };

  const handleCepChange = (e) => {
    const cep = e.target.value;
    setFormData({
      ...formData,
      cep,
    });
  };

  const handleFaixaEtariaChange = (selectedOption) => {
    setFormData({
      ...formData,
      faixaEtaria: selectedOption,
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCadastroSubmit(formData);
    history.push("/cadastros");
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastroSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome:</label>
          <input
            type="text"
            id="sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Gênero:</label>
          <div className="form-check">
            <input
              type="radio"
              id="generoMasculino"
              name="genero"
              value="Masculino"
              onChange={handleChange}
              checked={formData.genero === "Masculino"}
              className="form-check-input"
              required
            />
            <label htmlFor="generoMasculino" className="form-check-label">
              Masculino
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              id="generoFeminino"
              name="genero"
              value="Feminino"
              onChange={handleChange}
              checked={formData.genero === "Feminino"}
              className="form-check-input"
              required
            />
            <label htmlFor="generoFeminino" className="form-check-label">
              Feminino
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="dataNascimento">Data de Nascimento:</label>
          <DatePicker
            id="dataNascimento"
            name="dataNascimento"
            selected={formData.dataNascimento}
            onChange={handleDataNascimentoChange}
            className="form-control"
            dateFormat="dd/MM/yyyy"
            showYearDropdown
            maxDate={new Date()}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <PhoneInput
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleTelefoneChange}
            inputProps={{
              required: true,
              className: "form-control",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Celular:</label>
          <PhoneInput
            id="celular"
            name="celular"
            value={formData.celular}
            onChange={handleCelularChange}
            inputProps={{
              required: true,
              className: "form-control",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleCepChange}
            className="form-control"
            pattern="[0-9]{8}"
            required
          />
        </div>
        <div className="form-group">
          <label>Faixa Etária:</label>
          <Select
            id="faixaEtaria"
            name="faixaEtaria"
            value={formData.faixaEtaria}
            onChange={handleFaixaEtariaChange}
            options={[
              { value: "crianca", label: "Criança" },
              { value: "adolescente", label: "Adolescente" },
              { value: "adulto", label: "Adulto" },
              { value: "idoso", label: "Idoso" },
            ]}
            isSearchable={false}
            className="basic-single"
            classNamePrefix="select"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </form>
      <CadastroList cadastros={cadastros} />
    </div>
  );
};

export default CadastroForm;
