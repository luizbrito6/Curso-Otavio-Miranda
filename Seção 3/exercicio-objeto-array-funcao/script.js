const form = document.querySelector('#form'); 
const resultado = document.querySelector('#resultado');
const pessoas = []; 
form.querySelector('#enviar').addEventListener('click', function(){
    let nome = form.querySelector('#name').value; 
    let sobrenome = form.querySelector('#sobrenome').value; 
    let peso = form.querySelector('#peso').value; 
    let altura = form.querySelector('#altura').value; 
    const objetoPessoas = {
        nome: nome,
        sobrenome: sobrenome,
        peso: peso, 
        altura: altura
    };
    pessoas.push(objetoPessoas);
    console.log(pessoas);
    resultado.innerHTML += `
    <label>Nome: ${nome}</label>
    <label>Sobrenome: ${sobrenome}</label>
    <label>Peso: ${peso}</label>
    <label>Altura: ${altura}</label>

    `;
})











