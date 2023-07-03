// // console.log('Teste');
// // console.log('"Teste"');
// // console.log(232323, 2324324234.4444444);


// // exercícios

// // console.log('Meu nome é "LUIZ GUSTAVO" . Estou aprendendo JavaScript às', 10 , 'da manhã.'); 

// // Luiz está triste 


// // let nome = 'Luiz';
// // let teste; 

// // console.log(teste); // Undefined


// // console.log(nome,'nasceu em 1984.');
// // console.log('Em 2000',nome,'conheceu Maria');
// // console.log(nome,'casou-se com Maria em 2012.');
// // console.log('Maria teve 1 filho e',nome,'em 2015.');
// // console.log('O filho e',nome,'se chama Eduardo.');


// // // Palavras reservadas 



// // Constante tem que


// /*
// Luiz Otávio Miranda tem 30 anos, pesa 84 kg
// Tem 1.8 de altura e seu IMC é 23.3434 

// */








// // let nome = 'Luiz Gustavo';
// // let sobrenome = 'Gonçalves Brito';
// // let nascimento = 2004;
// // let anoAtual = new Date().getFullYear();  
// // let idade = anoAtual - nascimento; 
// // let peso = 84; 
// // let altura = 1.8; 
// // let imc = peso / altura ** 2 ; 


// // console.log(nome,sobrenome,'tem',idade,'anos, pesa', peso,'KG. Tem', altura, 'de altura e seu IMC é', imc, 'Luiz nasceu em', nascimento);
// // console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} KG. Tem altura de ${altura} e seu IMC é ${imc}. Luiz nasceu em ${nascimento}`);





// // VAR X LET      

 
// /*
//     UNDEFINED -> Ausencia de um valor 
//     NULL -> Ausencia de objeto 
//     SYMBOL -> Relação de dependencia entre vetores=
//     Operadores de atribuição 

// */



// // const string = 2;
// // const number = 5;




// // Confirm  


// // let num1 = parseInt(prompt('Informe um número:'));
// // let num2 = parseInt(prompt('Informe um outro número:'));
// // const resultado = alert(num1 + num2);



// // let varA = 'A'; // B
// // let varB = 'B'; // C
// // let varC = 'C'; // A

// // let x = varA;

// // varA = varB; 
// // varB = varC;
// // varC = x;


// // console.log(varA, varB, varC);



// // let stringTeste = "'\teste\ '"; 


// // console.log(stringTeste);


// // Escapando com a barra invetida

// let teste = 'Luiz Gustavo';
// let numero = '1234';
// let rato = 'O rato roeu a roupa do rei de roma'
// // Strings são idexadas
// // console.log(teste[15]);


// // Strings com CharAT   
// // console.log(teste.charAt(4));

// // Função concat e suas variações 
// console.log(teste.concat(' Gonçalves Brito'));
// console.log(`${teste} Gonçalves Brito`);
// console.log(teste + ' Gonçalves Brito');


// // Buscando por um índice  
// console.log(teste.indexOf('u', 3));
// console.log(teste.lastIndexOf('u'));

// // Expressõs regulares 
// // console.log(teste.match(/[a-z]/g)); // Flag G para retornar um ARRAY 


// // console.log(teste.search(/a-z]/));


// // Substituindo valores com replace 
// console.log(teste.replace('Luiz', 'Caio'));
// console.log(rato.replace(/r/g, 'T'));

// // Tamanho da string
// console.log(rato.length);
// console.log(rato.slice(2, 6));



