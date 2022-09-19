import React, { useState } from "react";
import Select from "react-select";
import "./styleDrop.css";
import Imagem from "./imagem.png";
import Porta from "./porta.png";
import Livro from "./livro.png";
import Pao from "./pao.png";
import Lab from "./tubo.png";
import Ferramenta from "./ferramenta.png";

// import React,  from 'react';
// import Select from 'react-select';

function DropDown() {
  const salas = [
    {
      value: 1,
      text: "Sala 01",
      icon: (
        <>
          <img src={Porta} height='20' />
        </>
      ),
    },
    {
      value: 2,
      text: "Sala 02",
      icon:
        <>
          <img src={Porta} height='20' />
        </>
    },

  ];
  const laboratorios = [
    {
      value: 1,
      text: "Lab 01",
      icon: (
        <>
          <img src={Lab} height='20' />
        </>
      ),

    },
    {
      value: 2,
      text: "Lab 02",
      icon: (
        <>
          <img src={Lab} height='20' />
        </>
      ),

    },

  ]
  const oficinas = [
    {
      value: 1,
      text: "Oficina 01",
      icon: (
        <>
          <img src={Ferramenta} height='15' />
        </>
      ),

    },
    {
      value: 2,
      text: "Oficina 02",
      icon: (
        <>
          <img src={Ferramenta} height='15' />
        </>
      ),

    },

  ]
  const biblioteca = [
    {
      value: 1,
      text: "Biblioteca",
      icon: (
        <>
          <img src={Livro} height='20' />
        </>
      ),

    },

  ]
  const refeitorio = [
    {
      value: 1,
      text: "Refeitório",
      icon: (
        <>
          <img src={Pao} height='20' />
        </>
      ),

    },

  ]


  const [selectedOption, setSelectedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedOption(e);
  };

  return (
    <div className="tudo">
      <p className="tittle">- - Salas - -</p>

      <div style={{ height: 70 }} className="drop-all">
        <Select
        // <Select className="drop-um"
          // placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption}
          options={salas}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <p className="tittle2">- - Laboratório - -</p>
      <div className="drop-all2">
        <Select
          //   placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption}
          options={laboratorios}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <p className="tittle3">- - Oficinas - -</p>
      <div className="drop-all3">
        <Select
          //   placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption}
          options={oficinas}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <p className="tittle4">- - Biblioteca - -</p>
      <div className="drop-all4">
        <Select
          //   placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption}
          options={biblioteca}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      <p className="tittle5">- - Refeitório - -</p>
      <div className="drop-all5">
        <Select
          //   placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption}
          options={refeitorio}
          onChange={handleChange}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default DropDown;

