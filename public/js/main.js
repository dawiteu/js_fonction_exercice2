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

*/

// exo 4 

let classeCoding16 = []; 
console.log(classeCoding16); 

let addClass = (eleve) => {
    if(eleve.length > 0){
        classeCoding16.push(eleve); 
        return `${eleve} arrive en classe // tab:`+classeCoding16; 
    }else{
        return "error: vide"; 
    } 
}

let delClass = (eleve) => { 
    if(eleve.length > 0){
        if(classeCoding16.includes(eleve)){
            console.log(classeCoding16.indexOf(eleve));
            classeCoding16.splice( classeCoding16.indexOf(eleve), 1); 
            return `${eleve} sort de la classe // tab:`+classeCoding16;   
        }else{
            return "pas de match dans la classe!"+classeCoding16; 
        }
    }else{
        return "error: vide"; 
    }
}

let choix; 
let pers; 

let choixpossibles = [1,2, 3, 4]; 

function init(){
    choix = prompt("Fais un choix: \n [ 1 ] pour ajouter une personne.\n [ 2 ] pour supprimer une personne. \n [ 3 ] pour afficher le tableau. \n [ 4 ] pour quitter ");
    //alert(choix, typeof choix);
    switch(choix){
            case "1":
                pers = prompt("Entre le nom de la personne a ajouter"); 
                if(!classeCoding16.includes(pers)){
                    addClass(pers);
                    alert(`${pers} a bien ete ajouter!`); 
                }else{
                    alert("La personne est deja presente!!");
                }
                init(); 
            break;
            case "2":
                if(classeCoding16.length != 0){
                    pers = prompt("Entre le nom de la personne a SUPPRIMER"); 
                    // pour le del on check dirrectement dans l'autre fonction s'il est present dans le tab []; 
                    let con = confirm(`Confirmez vous la suppresion de ${pers}?`); 
                    if(con){
                        delClass(pers);
                    }else{
                        alert(`${pers} n'a pas ete supp!`);
                    }
                    init();  
                }else{
                    alert("erreur. le tab est vide!!");     
                    init();
                }
            break;
            case "3":
                alert(classeCoding16);
                console.log(classeCoding16);
                init();
            break;
            case "4":
                alert(":Ok je sors:");
                console.log(classeCoding16); 
                alert(classeCoding16); 
            break;
            default:
                console.log(choix, typeof choix);
                alert('erreur',choix, typeof choix); 
                init();
            break;
        }
}



/*
console.log( addClass("dawid") );
console.log( addClass("ayhan") );

console.log( addClass("malo") );

console.log( delClass("ayhan") );

*/

init();

console.log(classeCoding16); 