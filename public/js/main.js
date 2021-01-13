/*

// exo 1 
let revnum = (number) => {
    if(!isNaN(number)){
        number = number+'';
        numbers = number.split(''); 
        numbers = numbers.reverse();
        numbers = numbers.join(''); 
        numbers = parseInt(numbers);
        return numbers; 
    }else{
        return "error! pas un nombre"; 
    }
}

console.log( revnum(851) );

// exo 2 


let divpar2 = (number) => {
    if(!isNaN(number)){
        number = parseInt(number); 
        if(number % 2 == 0){
            return `${number} est divisible par 2. => ${number/2}`; 
        }else{
            return `${number} n'est pas divisible par 2.`;
        }
    }else{
        return "error! ce nest pas un nombre!"; 
    }
}

console.log( divpar2("3") );

// exo 3 
*/

let pass = "mdp"; 


let check = prompt("Entrez le mot de passe.");; 

let checkLogIn = (password) => { 
    console.log(`entre fonction ${check} - ${pass} `); 
    if(check == pass){
        return alert('Log-in OK!');
    }
    while(check != pass){
        console.log('case false'); 
        check = prompt("Entrez le mot de passe.");; 
        checkLogIn(check);
    }
}

if(check.length > 0){ 
    console.log(`echeck lenght ok `); 
    checkLogIn(check);
}


