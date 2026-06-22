//IMPORTANDO ARQUIVOS
import {calcDesconto} from "./scripts_calculos.js";

//PEGANDO ELEMENTOS DO DOM
const formPessoa= document.querySelector('#form-pessoa')
const divLista = document.querySelector('#div-lista-pessoas')

//CRIANDO ARRAY pessoas
const pessoas = []

//CAPTURAR O EVENTO submit DO FORMULÁRIO
formPessoa.addEventListener('submit', (evt) => {
    //INTERROMPE O EFEITO PADRÃO DE SUBMETER DOS DADOS DO FORMULÁRIO
    evt.preventDefault ()

    //CRIAR UM OBJETO FORMULÁRIO
    const dadosFormPessoa = new FormData (formPessoa)

    //CRIAR UM ONJETO LITERAL 
    const pessoa = {
        nome: dadosFormPessoa.get('nome'),
        idade: dadosFormPessoa.get('idade'),
        renda: dadosFormPessoa.get('renda')
    }

    //CHAMANDO FUNÇÃO addPessoa E PASSANDO O OBJETO LITERAL pessoa
    addPessoa(pessoa)

    //LIMPAR O FORMULÁRIO
    formPessoa.reset()
})

//CRIANDO A FUNÇÃO ADICIONAR PESSOA
const addPessoa = (objPessoa) => {
    //ADICIONANDO O OBJETO LITERAL NO ARRAY PESSOAS
    pessoas.push(objPessoa)

    //APÓS ADICIONAR O OBJETO LITERAL NO ARRAY CHAMA A FUNÇÃO listPessoas
    listPessoas ()
}

//FUNÇÂO PARA LISTAR PESSOAS DO ARRAY
const listPessoas = () => {
    //LIMPANDO A DIV LISTA
    divLista.innerHTML = ''

    //PERCORRER O ARRAY pessoas COM O forEach
    pessoas.forEach((elem, i) => {
     divLista.innerHTML += ` ${i+1} - ${elem.nome} - ${elem.idade}, ${parseFloat(elem.renda).toFixed(2).replace('.',',')} ${calcDesconto(elem)}<br>`
    })
}