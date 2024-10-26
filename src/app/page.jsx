import imgLogin from "@/img/fundoLogin.png";
import Image from "next/image";
import Styles from "@/styles/login.module.css";
import { ST } from "next/dist/shared/lib/utils";

export default function Page() {
  return (
    <div id={Styles.boxLogin}>
      <div id={Styles.boxEsquerdo}>
        <div id={Styles.caixapreta}>
          <div id={Styles.subcaixapreta}>
            <h1 id={Styles.tituloTbaeru}>TABERU</h1>
            <h2 id={Styles.tituloFood}>FOOD</h2>
            <p id={Styles.tetxotitulo}>
              Utilize nosso Dashboard para criar, editar ou deletar.
            </p>
          </div>
        </div>
      </div>
      <div id={Styles.boxDireito}>
        <h1 id={Styles.tituloLogin}>Efetuar login</h1>
        <p id={Styles.textoTitulo}>Efetue o login abaixo</p>
        <input
          className={Styles.caixasdeLoins}
          type="text"
          placeholder="Senha"
        />
        <input
          className={Styles.caixasdeLoins}
          type="text"
          placeholder="Email"
        />
        <label className={Styles.checkboxLabel}>
          <input type="checkbox" />
          <span className={Styles.checkboxText}>Lembrar neste dispositivo</span>
        </label>
        <button id={Styles.btnLogin}>Efetuar login</button>
      </div>
    </div>
  );
}
