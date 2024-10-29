import React, { useState } from 'react'

export default function CargoB() {
  const [statusEditandoCargo, setStatusEditandoCargo] = useState();
  
  const [cargoProcurado, setCargoProcudado] = useState();
  const [cargo, setCargo] = useState();

  function respostaPesquisaCargo(){
    if(cargoProcurado === cargo){
        return (
            <div>
                <div>
                    <div>
                        <p>Cargo encontrado! Edite-o usando os campos abaixo.</p>
                    </div>
                    <form>
                        <div>
                            <label>Nome do cargo</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Descrição do cargo</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <h3>ID da vaga</h3>
                            <p>O ID da vaga continuará o mesmo!</p>
                        </div>

                        <button>Editar cargo</button>
                    </form>
                </div>
            </div>
        )
    }
  }

  return (
    <div>
        <div>
            <p>Voce está EDITANDO um cargo!</p>
        </div> 
        <div>
            <div>
                <p>ATENÇÃO: Para editarmos um cargo primeiro precisamos localiza-lo! Comece procurando pelo nome do cargo</p>
            </div>
            <div>
                <form action="">
                    <div>
                        <label htmlFor="">Nome do cargo</label>
                        <input type="text" />
                    </div>

                    <button onClick={() => respostaPesquisaCargo()}>Buscar cargo</button>
                </form>
            </div>
        </div>
        <div>
            <div>
                <p>Não encontrado! O cargo que voce esta querendo editar não foi encontrado. Busque o cargo novamente abaixo.</p>
            </div>
            <form action="">
                <div>
                    <label htmlFor="">Nome do cargo</label>
                    <input type="text" placeholder='Insira o nome do cargo'/>
                </div>

                <button>Buscar cargo</button>
            </form>
        </div>
    </div>
  )
}
