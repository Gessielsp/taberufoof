import styles from "@/styles/cargoC.module.css";

import { useEffect, useState } from "react";
import MenuLateral from "./MenuLateral";

export default function CargoC() {
  const [cargoProcurado, setCargoProcurado] = useState();

  const [cargos, setCargos] = useState([
    "Desenvolvedor",
    "Analista",
    "Gerente",
    "Designer",
    "Engenheiro"
  ]);

  const [respostaDaPesquisa, setRespostaDaPesquisa] = useState();

  function pesquisa(){
    const search = cargos.filter((item) => cargoProcurado === item);

    if(search.length > 0){
      cargoEncontrado()
      console.log("chegou sim")
    }else{
      cargoNaoEncontrado()
      console.log("nao chegou porra")
    }
  }

  function cargoEncontrado(){
    setRespostaDaPesquisa(
      <div className={styles.content}>
        <MenuLateral/>
        <div>
          <div>
            <label htmlFor="">Cargo encontrado!</label>
          </div>
          <div>
            <input type="text" value={cargoProcurado} readOnly/>
            <button onClick={() => alert("Cargo excluido")}>Excluir cargo</button>
          </div>
        </div>
      </div>
    )
  }

  function cargoNaoEncontrado(){
    setRespostaDaPesquisa(
      <div className={styles.content}>
        <MenuLateral/>
        <div>
          <div>
            <p>O cargo {cargoProcurado} nao foi encontrado!</p>
          </div>
          <div>
            <input type="text" onChange={(e) => setCargoProcurado(e.target.value)}/>
            <button onClick={() => pesquisa()}>pesquisar</button>
          </div>
        </div>
      </div>
    )
  }
  console.log("cargo procurado:", cargoProcurado)
  return (
    <div>
      {respostaDaPesquisa ? respostaDaPesquisa : 
      <div className={styles.content}>
        <MenuLateral/>
        <div id={styles.subContent}>
          <div>
              <p>Voce esta EXCLUINDO um cargo!</p>
          </div>
          <div>
            <p>ATENÇÃO: Para excluirmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
          </div>
          <div>
            <form action="">
              <div>
                <label htmlFor="">Nome do cargo</label>
                <input type="text" onChange={(e) => setCargoProcurado(e.target.value)}/>
              </div>

              <button onClick={() => pesquisa()}>Buscar cargo</button>
            </form>
          </div>
        </div>
      </div>}
    </div>
  )
}
