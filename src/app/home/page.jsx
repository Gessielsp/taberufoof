import MenuLateral from "@/componets/MenuLateral";
import styles from "@/styles/home.module.css";

export default function Page() {
  return (
    <div id={styles.container}>
      <MenuLateral />
      <div id={styles.conteudoPrincipal}>
        <div>
          <h2 id={styles.textoTitulo}>
            Seja bem vindo
            <strong id={styles.subtextoP}>ADMINISTRADO MASTER!</strong>
          </h2>
        </div>
        <div id={styles.linhaHorizontal}></div>
        <div id={styles.conteudo}>
          <div id={styles.boxBtn}>
            <button id={styles.btnRelatorio}>Imprimir Relatorio</button>
            <button id={styles.btnfiltro}>Filtro</button>
          </div>
          <div id={styles.boxContainer}>
            <div id={styles.boxCardsUnico}>
              <h4 className={styles.tetxoTituloCards}>55</h4>
              <p className={styles.tetxoCards}>Cargos criados</p>
            </div>
            <div className={styles.boxCards}>
              <h4 className={styles.tetxoTituloCards}>55</h4>
              <p className={styles.tetxoCards}>Funcionarios</p>
            </div>
            <div className={styles.boxCards}>
              <h4 className={styles.tetxoTituloCards}>55</h4>
              <p className={styles.tetxoCards}>Receitas</p>
            </div>
            <div className={styles.boxCards}>
              <h4 className={styles.tetxoTituloCards}>55</h4>
              <p className={styles.tetxoCards}>Ingrediente</p>
            </div>
            <div className={styles.boxCards}>
              <h4 className={styles.tetxoTituloCards}>55</h4>
              <p className={styles.tetxoCards}>Restaurantes</p>
            </div>
          </div>
          <h4 id={styles.tituloFinal}>
            <strong id={styles.subTituloFinal}>ADMINISTRADOR MASTER</strong>{" "}
            ADMINISTRADOR MASTER, voce tem o poder de criar, editar e excluir
            absolutamente qualquer coisa!{" "}
          </h4>
          <p id={styles.tetxofinal}>
            Use o menu lateral para navegar entre as funcionalidades.
          </p>
        </div>
      </div>
    </div>
  );
}
