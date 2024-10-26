import Image from "next/image";
import imgHome from "/src/img/home.png";
import imagemPerfil from "/src/img/image.png";
import imgCargos from "@/img/cargos.png";
import imgCategoria from "@/img/categoria.png";
import imgfuncionarios from "@/img/funcionarios.png";
import imaIngrediantes from "@/img/ingredientes.png";
import imgMeidads from "@/img/medidas.png";
import imgReceitas from "@/img/receitas.png";
import imgRestaurante from "@/img/restaurante.png";
import imgSair from "@/img/sair.png";
import styles from "@/styles/menuLateral.module.css";

export default function MenuLateral() {
  return (
    <header id={styles.headerMain}>
      <h1 id={styles.tituloEmpresa}>
        <strong id={styles.nometaberu}>Taberu</strong> FOOD
      </h1>
      <ul>
        <div id={styles.homeListMain}>
          <li id={styles.homeList}>
            <Image
              className={styles.imgIcons}
              src={imgHome}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/home">
              Home
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgCargos}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/cargos">
              Cargos
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgfuncionarios}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/funcionarios">
              Funcionários
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgReceitas}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/receitas">
              Receitas
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imaIngrediantes}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/ingredientes">
              Ingredientes
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgRestaurante}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/restaurantes">
              Restaurantes
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgMeidads}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/medidas">
              Medidas
            </a>
          </li>
        </div>
        <div className={styles.subListMain}>
          <li className={styles.subList}>
            <Image
              className={styles.imgIcons}
              src={imgCategoria}
              alt="imagem home"
            />
            <a className={styles.titulo} href="/categorias">
              Categorias
            </a>
          </li>
        </div>
      </ul>
      <div id={styles.LinhaBranca}></div>
      <div id={styles.informacoes}>
        <Image
          src={imagemPerfil}
          width={50}
          height={50}
          alt="imagem de pefil"
        />
        <div>
          <h4 id={styles.nomeInfomacao}>Gessiel</h4>
          <p id={styles.emialInformacao}>Gessiel.sp@gmail.com</p>
        </div>
      </div>
        <button id={styles.bntSair}>
          <Image className={styles.imgIcons} src={imgSair} alt="imagem home" />
          Sair
        </button>
    </header>
  );
}
