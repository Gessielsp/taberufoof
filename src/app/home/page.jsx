"use client"; 

import MenuLateral from "@/componets/MenuLateral";
import styles from "@/styles/home.module.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [totalFuncionarios, setTotalFuncionarios] = useState(0);
    const [totalCargos, setTotalCargos] = useState(0);
    const [totalReceitas, setTotalReceitas] = useState(0); 
    const [totalIngredientes, setTotalIngredientes] = useState(0); 
    const [totalRestaurantes, setTotalRestaurantes] = useState(0); 
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const funcionariosResponse = await axios.get('http://127.0.0.1:5000/total_funcionarios');
                const cargosResponse = await axios.get('http://127.0.0.1:5000/total_cargos');
                const receitasResponse = await axios.get('http://127.0.0.1:5000/total_receitas'); 
                const ingredientesResponse = await axios.get('http://127.0.0.1:5000/total_ingredientes'); 
                const restaurantesResponse = await axios.get('http://127.0.0.1:5000/total_restaurantes'); 

                console.log('Funcionários Response:', funcionariosResponse.data); 
                console.log('Cargos Response:', cargosResponse.data); 
                console.log('Receitas Response:', receitasResponse.data); 
                console.log('Ingredientes Response:', ingredientesResponse.data); 
                console.log('Restaurantes Response:', restaurantesResponse.data); 

                setTotalFuncionarios(funcionariosResponse.data.total_funcionarios);
                setTotalCargos(cargosResponse.data.total_cargos);
                setTotalReceitas(receitasResponse.data.total_receitas); 
                setTotalIngredientes(ingredientesResponse.data.total_ingredientes);
                setTotalRestaurantes(restaurantesResponse.data.total_restaurantes); 
            } catch (err) {
                setError(err.message);
                console.error('Erro ao buscar dados:', err); 
            }
        };

        fetchData();
    }, []);

    return (
        <div id={styles.container}>
            <MenuLateral />
            <div id={styles.conteudoPrincipal}>
                <div>
                    <h2 id={styles.textoTitulo}>
                        Seja bem vindo
                        <strong id={styles.subtextoP}>ADMINISTRADOR MASTER!</strong>
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
                            <h4 className={styles.tetxoTituloCards}>{totalCargos}</h4>
                            <p className={styles.tetxoCards}>Cargos criados</p>
                        </div>
                        <div className={styles.boxCards}>
                            <h4 className={styles.tetxoTituloCards}>{totalFuncionarios}</h4>
                            <p className={styles.tetxoCards}>Funcionários</p>
                        </div>
                        <div className={styles.boxCards}>
                            <h4 className={styles.tetxoTituloCards}>{totalReceitas}</h4> 
                            <p className={styles.tetxoCards}>Receitas</p>
                        </div>
                        <div className={styles.boxCards}>
                            <h4 className={styles.tetxoTituloCards}>{totalIngredientes}</h4> 
                            <p className={styles.tetxoCards}>Ingredientes</p>
                        </div>
                        <div className={styles.boxCards}>
                            <h4 className={styles.tetxoTituloCards}>{totalRestaurantes}</h4>
                            <p className={styles.tetxoCards}>Restaurantes</p>
                        </div>
                    </div>
                    <h4 id={styles.tituloFinal}>
                        <strong id={styles.subTituloFinal}>ADMINISTRADOR MASTER</strong>
                        ADMINISTRADOR MASTER, você tem o poder de criar, editar e excluir
                        absolutamente qualquer coisa!
                    </h4>
                    <p id={styles.tetxofinal}>
                        Use o menu lateral para navegar entre as funcionalidades.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
