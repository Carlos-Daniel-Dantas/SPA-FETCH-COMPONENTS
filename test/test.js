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

fetch('https://viacep.com.br/ws/01001000/json/')


