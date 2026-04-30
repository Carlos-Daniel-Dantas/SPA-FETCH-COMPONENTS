// =========================================================== //

// const compo = document.querySelector('body')

// const carregarComponente = async(caminho, container) =>{
//     try{

//         const resposta = await fetch(caminho);

//         if(!resposta.ok){
//             throw new Error('Error ao carregar componente')
//         }

//         const html = await resposta.text();

//         container.innerHTML = html;

//     }catch(erro){
//         console.warn(erro)

//     };                                        
// };
// url = 'c-test.html';
// Componente = document.querySelector('#app');
// carregarComponente();

// =========================================================== //

// try {
// let saldo = 100;

// if (saldo < 200){

//     throw geradorErros(1001, 'VALIDACAO', 'Dinheiro insuficiente') /* Chamei a função gerador de erros e setei os parametros criados nela em ordem */
// };

// } catch (erro) {

//     let text = `
//     <strong>Nome do erro: </strong> ${erro.name} <br />
//     <strong>Mensagem: </strong> ${erro.message} <br />
//     <strong>Código: </strong> ${erro.codigo} <br />
//     `;

//     document.body

// };

// // 
// function geradorErros(codigo, tipo, mensagem) {

//     let erro =  new Error(mensagem)
    
//     erro.codigo = codigo
//     erro.tipo = tipo

//     return erro

// }

// console.log(geradorErros)

// =========================================================== //

document.querySelector('input__cep')

const url = `https://viacep.com.br/ws/${cep}/json/`
const consulta = fetch(url)
console.log(consulta)
consulta.then(resposta => {

    if(!resposta.ok){
        throw new Error('Erro na Requisição')
    }
    console.log(dados)
})

.then((resposta) => {
    return resposta.json()
})

.then((dados) => {
    console.log(dados)
})
.catch((error) => {
    console.warn(error)
}
)

function buscarComThen(cep) {

    const CampoCep = document.getElementById('resultado__cep');

    const cepCapturado = document.querySelector('cep')
    
    
}
