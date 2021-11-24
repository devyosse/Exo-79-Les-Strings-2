let pomme = "Elle est belle ma pomme !";

console.log(pomme.lastIndexOf('m'));


let podex = pomme.indexOf('pomme')
    document.getElementById('index-pomme').innerHTML = podex;


let lastdex = pomme.lastIndexOf('m')
document.getElementById('last-index-m').innerHTML = lastdex;

if(pomme.startsWith("Elle")){
    console.log("Elle est belle ma pomme ! Commence bien par Elle")
}

if(pomme.endsWith("!")){
    console.log("Elle est belle ma pomme ! Se termine par un point d'exclamation")
}

let pomme2 = pomme.substring(18, 24);
document.getElementById('pomme').innerHTML = pomme2;

for (let i = 0; i <pomme.length;i++){
    document.getElementById('one-line').innerHTML = pomme;
}