import { useState } from "react"

export default function CargoA() {

  const [statusCriandoCargo, setCriandoCargo] = useState(true);

  function criarCargo(){
    if(retornoApi === true){
      return alert("Cargo criado com sucesso")
    }else{
      return alert("O cargo não foi criado")
    }
  }

  return (
    <div>
      <div>
        <div>
          <p>Voce está CRIANDO uma vaga!</p>
        </div>
        <form>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <h2>ID da vaga</h2>
            <p>O ID da vaga será gerado automaticamente!</p>
          </div>

          <button type="submit">Criar cargo</button>
        </form>
      </div>

      <div>
        <div>
          <p>Cargo criado com sucesso!</p>
        </div>
      </div>
    </div>
  )
}
