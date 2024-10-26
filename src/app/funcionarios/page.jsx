import MenuLateral from "@/componets/MenuLateral";
import Image from "next/image";
import imgCriar from "@/img/criar.png";
import imgEcluir from "@/img/Excluir.png";
import imgAlterar from "@/img/alterar.png";
import styles from "@/styles/Funcionários.module.css";

export default function Funcionarios() {
  return (
    <div id={styles.container}>
      <MenuLateral />
      <div id={styles.boxTextos}>
        <h2 id={styles.textoTitulo}>
          Seja bem vindo,{" "}
          <strong id={styles.subtextoP}>ADMINISTRADO MASTER!</strong>
          <div id={styles.linha}></div>
        </h2>
        <div id={styles.BtnBox}>
          <button id={styles.btnUnico}>
            <Image
              className={styles.imgIcons}
              src={imgCriar}
              alt="imagem home"
            />
            Criar cargo
          </button>
          <button className={styles.btns}>
            <Image
              className={styles.imgIcons}
              src={imgAlterar}
              alt="imagem home"
            />
            Editar cargo
          </button>
          <button className={styles.btns}>
            <Image
              className={styles.imgIcons}
              src={imgEcluir}
              alt="imagem home"
            />
            Excluir Cargo
          </button>
        </div>
      </div>
    </div>
  );
}
