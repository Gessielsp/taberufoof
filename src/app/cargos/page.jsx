'use client'

import MenuLateral from "@/componets/MenuLateral";
import Image from "next/image";
import imgCriar from "@/img/criar.png";
import imgEcluir from "@/img/Excluir.png";
import imgAlterar from "@/img/alterar.png";

import styles from "@/styles/cargo.module.css";

import { useState } from "react";

import CargoA from "@/componets/cargoA";
import CargoB from "@/componets/cargoB";
import CargoC from "@/componets/cargoC";

export default function Cargos() {
  const [tela, setTela] = useState();

  const [statusTelaHome, setStatusTelaHome] = useState(true);

  function renderizaTela(parametro){
    if(parametro === "criar"){
      setStatusTelaHome(false)
      setTela(<CargoA/>)
    }else if(parametro === "editar"){
      setStatusTelaHome(false)
      setTela(<CargoB/>)
    }else if(parametro === "deletar"){
      setStatusTelaHome(false)
      setTela(<CargoC/>)
    }else{
      setStatusTelaHome(true)
    }
  }

  return (
    <div>
      {statusTelaHome ?

      <div id={styles.container}>
        <MenuLateral />
        <div id={styles.boxTextos}>
          <h2 id={styles.textoTitulo}>
            Seja bem vindo
            <strong id={styles.subtextoP}>ADMINISTRADO MASTER!</strong>
            <div id={styles.linha}></div>
          </h2>   
          <div id={styles.conteudoPrincipal}>
            <button id={styles.btnUnico} onClick={() => renderizaTela("criar")}>
              <Image className={styles.imgIcons} src={imgCriar}alt="imagem home"/>
              Criar cargo
            </button>
            <button className={styles.btns} onClick={() => renderizaTela("editar")}>
              <Image className={styles.imgIcons} src={imgAlterar} alt="imagem home"/>
              Editar cargo
            </button>
            <button className={styles.btns} onClick={() => renderizaTela("deletar")}>
              <Image className={styles.imgIcons} src={imgEcluir} alt="imagem home"/>
              Excluir Cargo
            </button>
          </div>    
          <button onClick={() => renderizaTela()}>Voltar</button>
        </div>
      </div> 
      
      : 
      
      <div id={styles.renderizaTelaBotao}>
        {tela}
      </div>}
    </div>
  );
}
