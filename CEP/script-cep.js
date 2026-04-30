document.querySelector('input__cep')

const url = `https://viacep.com.br/ws/01001000/json/`
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

// function buscarComThen(cep) {

//     const CampoCep = document.getElementById('resultado__cep');

    
// }
