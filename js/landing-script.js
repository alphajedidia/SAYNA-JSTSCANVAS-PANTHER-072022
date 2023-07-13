let btnToPrinceBorn = document.getElementById('btn-to-prince-born');
let princeBorn = document.getElementById('prince-born');
let contentPresentation = document.getElementById('content-presentation');

btnToPrinceBorn.addEventListener('click', ()=> {
  window.scrollTo({
    top: princeBorn.offsetTop,
    behavior: 'smooth'
  });
});

const form = document.querySelector('form');
const popup = document.querySelector(".popup-message");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  popup.style.display = "block";
});

let personnageData = [
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_1.png',
      'alt': 'Photo de Killmonger avec ses arme'
    },
    'title': 'KILLMONGER',
    'text': "La sauvagerie de N'Jadaka alors qu'il servait dans une unité d'opérations noires de l'armée américaine lui a valu le surnom de Killmonger. D’origine Wakandaise, et se sentant abandoné par sa nation, il cherche à détroner T’Challa dans une quête vers le pourvoir."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_2.png',
      'alt': 'Photo de Dora Milaje'
    },
    'title': 'OKOYE',
    'text': "Okoye est le général des Dora Milaje (groupe d’élite de femmes guerrières) et le chef des forces armées et des renseignements wakandais. Témoin du couronnement de T'Challa, elle se joint à lui dans de nombreuses aventures."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_3.png',
      'alt': 'Photo de Killmonger avec ses arme'
    },
    'title': 'SHURI',
    'text': "Shuri est la Princesse du Wakanda, la fille de T'Chaka et de Ramonda, la sœur de T'Challa et la leader du Groupe de Design du Wakanda. Innovatrice, elle est chargée de créer une grande partie de la technologie moderne du Wakanda ainsi que les Habits de la Panthère."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_4.png',
      'alt': 'Photo de Nakia'
    },
    'title': 'NAKIA',
    'text': "Nakia est une membre des Chiens de Guerre et l'amoureuse de T'Challa. Elle est souvent en mission à travers le monde, assistant aux grandes détresses de nombreux peuples et commence à croire avec force que le Wakanda pourrait activement les aider."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_5.png',
      'alt': 'Photo de Ramonda'
    },
    'title': 'RAMONDA',
    'text': "Ramonda est la Reine Mère du Wakanda, épouse de T'Chaka et mère de T'Challa et Shuri. Elle se tenait aux côtés de son fils quand il devint le Roi du Wakanda, mais fut forcée de partir en exil lorsque Erik Killmonger vainquit T'Challa et prit le contrôle du trône."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_6.png',
      'alt': 'Photo de W’kabi'
    },
    'title': 'W’kabi',
    'text': "W'Kabi est l'ancien chef de la sécurité pour la Tribu de la Porte du Wakanda ainsi que l'ancien meilleur ami de T'Challa. Ayant perdu la foi en son roi pour avoir échouer à capturer Ulysses Klaue, l'homme responsable de la mort de ses parents, W'Kabi apporta son soutien à Erik Killmonger et lui permit de prendre le trône du Wakanda."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_7.png',
      'alt': 'Photo de m’baku'
    },
    'title': 'm’baku',
    'text': "M'Baku est le chef de la Tribu Jabari, un groupe de Wakandais qui s'étaient écartés de la société principale du Wakanda et un fervant opposant du pouvoir de T'Challa, mais échoua à le vaincre lors de l'affrontement rituel pour le trône, avant de l'aider à défendre le Wakanda face à Erik Killmonger."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_8.png',
      'alt': 'Photo de ZURI'
    },
    'title': 'ZURI',
    'text': "Zuri était un ancien membre des Chiens de Guerre et un shaman Wakandais, loyal conseiller de son Roi. Après avoir gardé les secrets de T'Chaka à propos de sa gestion de la mort de N'Jobu dans le passé, Zuri continua à soutenir le Roi du Wakanda alors que T'Challa reprenait le trône."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_9.png',
      'alt': 'Photo de EVERETT KENNETH ROSS'
    },
    'title': 'EVERETT KENNETH',
    'text': "L'Agent Everett Ross est un agent de la CIA et un ancien Commissaire Exécutif à l'Antiterrorisme pour la Force Conjointe AntiTerroriste. Après avoir quitté la Force Conjointe AntiTerroriste, Ross fut chargé de traquer et neutraliser Ulysses Klaue, ce qui plaça Ross sur le chemin de Black Panther, qui cherchait à capturer de nouveau Klaue pour ses crimes passés."
  },
  {
    'image': {
      'src': './images/accueil/Pantherhome_slider_10.png',
      'alt': 'Photo de ULYSSE KLAUE'
    },
    'title': 'ULYSSE KLAUE',
    'text': "Ulysses Klaue est un criminel international, gangster et vendeur d'armes sur le marché noir. En 1992, il collabora avec N'Jobu afin de voler une quantité importante de vibranium au Wakanda. Bien qu'il soit parvenu à voler et à s'échapper avec un stock important, il reçut une marque sur le cou de la part des Wakandais."
  }
]

let selectedImage = document.getElementById('selected-image');
let selectedTitle = document.getElementById('selected-title');
let selectedText = document.getElementById('selected-text');

let image2 = document.getElementById('image-2');
let title2 = document.getElementById('title-2');
let text2 = document.getElementById('text-2');

let image3 = document.getElementById('image-3');

let morePerson = document.getElementById('more-person');
let showMore = document.querySelectorAll('.plus');
function showMores(b){
  if(b) {
    for(let i=0; i<showMore.length; i++) {
      showMore[i].style.opacity = '1';
    }
  } else {
    for(let i=0; i<showMore.length; i++) {
      showMore[i].style.opacity = '0';
    }
  }
}
morePerson.addEventListener('click', ()=>{
  let first = personnageData.splice(0, 1);
  personnageData = personnageData.concat(first);
  setTimeout(() => {
    selectedImage.style.opacity = '0';
    selectedImage.style.transform = 'scale(-5em)';
    showMores(false);
    setTimeout(()=>{
      selectedImage.style.opacity = '1';
      selectedImage.style.transform = 'scale(1)';
      selectedImage.style.transform = 'translateX(-200%)';
      selectedTitle.style.opacity = '0';
      selectedText.style.opacity = '0';
      title2.style.opacity = '0';
      text2.style.opacity = '0';
      image3.style.transform = 'translateX(-215%)';
      changeContent();
      selectedImage.style.opacity = '0';
      image2.style.opacity = '0';
      setTimeout(()=>{
        selectedImage.style.transform = 'translateX(0)';
        selectedImage.style.opacity = '1';
        selectedTitle.style.opacity = '1';
        selectedText.style.opacity = '1';
        image2.style.opacity = '1';
        title2.style.opacity = '1';
        text2.style.opacity = '1';
        image3.style.transform = 'translateX(0)';
        showMores(true);
      }, 1000);
    }, 200);
  }, 200);
});

function changeContent() {
  setTimeout(()=>{
    selectedImage.innerHTML = "";
    selectedTitle.innerHTML = "";
    selectedText.innerHTML = "";
    image2.innerHTML = "";
    title2.innerHTML = "";
    text2.innerHTML = "";
    image3.innerHTML = "";

    let sImg = document.createElement('img');
    sImg.setAttribute('src', personnageData[0].image.src);
    sImg.setAttribute('alt', personnageData[0].image.alt);
    sImg.style.opacity = '0';
    sImg.style.transform = 'scale(0.7)';
    sImg.style.transition = 'opacity 3s ease, transform 3s ease';
    setTimeout(() => {
      sImg.style.opacity = '1';
      sImg.style.transform = 'scale(1)';
    }, 100);
    selectedImage.appendChild(sImg);
    selectedTitle.innerHTML = personnageData[0].title;
    selectedText.innerHTML = personnageData[0].text;

    let img2 = document.createElement('img');
    img2.setAttribute('src', personnageData[1].image.src);
    img2.setAttribute('alt', personnageData[1].image.alt);
    image2.appendChild(img2);
    title2.innerHTML = personnageData[1].title;
    text2.innerHTML = personnageData[1].text;

    image3.setAttribute('src', personnageData[2].image.src);
    image3.setAttribute('alt', personnageData[2].image.alt);
  }, 1000);
}

changeContent();
