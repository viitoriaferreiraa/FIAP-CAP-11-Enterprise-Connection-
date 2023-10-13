import Banner from "../../assets/banner.jpg";
import Image from "../../assets/vic.jpg";
import HTML from "../../assets/ico_html5.png";
import CSS from "../../assets/ico_css3.png";
import JS from "../../assets/ico_js.png";
import Angular from "../../assets/ico_angular.svg";
import React from "../../assets/ico_react.png";
import Github from "../../assets/ico_github.png";
import { Title } from "../../components/Title";
import { Card } from "../../components/Card";
import { useState } from "react";
import * as Styles from "./Home.styles";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [cep, setCep] = useState("");
  const [dataCep, setDataCep] = useState({});
  const [cepError, setCepError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCep(event.target.value);
  };

  const chamarCep = () => {
    if (cep.length < 8) {
      setCepError("CEP inválido. O CEP deve ter 8 dígitos.");
      return;
    }

    setCepError(null);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setDataCep(data);
      })
      .catch((error) => {
        console.error("Erro na consulta do CEP: ", error);
      });
  };

  return (
    <>
      <Styles.Header>
        <img src={Banner} alt="Banner" />
        <Styles.Image>
          <img src={Image} alt="Foto de perfil" />
        </Styles.Image>
      </Styles.Header>
      <Styles.Dialog>
        Sou Desenvolvedora Full Stack, formada pela RECODE turma 2. Minha
        primeira formação em tecnologia foi em 2008 aos 11 anos com informática
        básica e Web Designer, durante o decorrer da vida segui outros rumos,
        mas as raízes deixadas me trouxeram ao caminho, o qual sempre esteve
        fundamentado em minha vida! Em constante evolução, não sou a mesma de
        ontem e provavelmente não serei a mesma amanhã. No meu tempo livre gosto
        muito de ler, tocar teclado, correr e jogar vôlei.
      </Styles.Dialog>
      <Title>Tecnologias</Title>
      <Styles.Wrapper>
        <Card imageUrl={HTML} />
        <Card imageUrl={CSS} />
        <Card imageUrl={JS} />
        <Card imageUrl={Angular} />
        <Card imageUrl={React} />
        <Card imageUrl={Github} />
      </Styles.Wrapper>
      <Title>Projeto CEP</Title>
      <Styles.CpfForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira o CEP para obter o endereço"
          value={cep}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            chamarCep();
          }}
        >
          Consultar CEP
        </button>
      </Styles.CpfForm>
      {cepError && <Styles.Error>{cepError}</Styles.Error>}
      {dataCep && Object.keys(dataCep).length > 0 && (
        <Styles.CepResult>
          <p>CEP: {dataCep.cep}</p>
          <p>Logradouro: {dataCep.logradouro}</p>
          <p>Bairro: {dataCep.bairro}</p>
          <p>Localidade: {dataCep.localidade}</p>
          <p>UF: {dataCep.uf}</p>
        </Styles.CepResult>
      )}
      <Footer />
    </>
  );
};
