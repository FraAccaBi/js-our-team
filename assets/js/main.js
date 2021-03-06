/* Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1 (da fare entro le 18):
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 (se ce la fai falla entro le 18 altrimenti puoi consegnare anche dopo le 18 - easy):
stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1 (solo se non sei giá frustrato dalle milestone 1 e 2):
trasformare la stringa foto in una immagine effettiva
BONUS 2 (solo se non sei giá fuso):
organizzare i singoli membri in card/schede */

//struttura fornita
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//creo una variabile associata all'elemtno team della dom
const teamElement = document.querySelector('.team')

for (let index = 0; index < team.length; index++) {
    const addetto = team[index];
    //creo un div  
    const addettoElement = document.createElement('div')
    addImg(addetto.image, addettoElement)
    //associo al div sopra il contenuto di addetto
    addettoElement.innerHTML += addetto.name + '<br>'
    addettoElement.innerHTML += addetto.role
    teamElement.classList.add('flex', 'text-center', 'gap-1')
    addettoElement.classList.add('bg-cards', 'p-1')
    //appendo all'div generico team nel dom l'addettoElement
    teamElement.append(addettoElement)
    console.log(typeof addetto);
    console.log(addetto.name);
    console.log(addetto.role);
    console.log(addetto.image);
    console.log('____________________');
    
}

function addImg(objValue,element) {
    let img = document.createElement('img')
    img.classList.add('block')
    img.src = `./img/${objValue}` 
    console.log(img.src);  
    element.append(img) 
}



