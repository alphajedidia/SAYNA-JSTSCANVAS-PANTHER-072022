let p = 0;
let proress = document.getElementById('progress');
let textIntro = document.getElementById('text-intro');
let textEnigme = document.getElementById('text-enigme');
let titleKnow = document.getElementById('title-know');
let textKnow = document.getElementById('text-know');
let formResponseEnigme = document.getElementById('form-response-enigme');
const popup = document.querySelector(".popup-message");
const comming = document.querySelector(".popup-comming");
const restartGame = document.getElementById('restart-game');
const returnHome = document.getElementById('return-home');
let restart = true;

let dataEnigme = [
    {
        'textIntro': `Prouve ton talent d’espion et déchiffre cette réplique d’Okoyé écrite en Wakandais, et apprend par la même occasion la première valeur d’une Dora Milaje !`,
        'textEnigme': `“ SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS ”`,
        'titleKnow': `Voici la transicription de l’alphabet :`,
        'textKnow': `A = <span class="wf">A</span> ; B = <span class="wf">B</span> ; C = <span class="wf">C</span> ; D = <span class="wf">D</span> ; E = <span class="wf">E</span> ; F = <span class="wf">F</span> ; G = <span class="wf">G</span> ; H = <span class="wf">H</span> ; I = <span class="wf">I</span> ; J = <span class="wf">J</span> ; K = <span class="wf">K</span> ; L = <span class="wf">L</span> ; M = <span class="wf">M</span> ; N = <span class="wf">N</span> ; O = <span class="wf">O</span> ; P = <span class="wf">P</span> ; Q = <span class="wf">Q</span> ; R = <span class="wf">R</span> ; S = <span class="wf">S</span> ; T = <span class="wf">T</span> ; U = <span class="wf">U</span> ; W = <span class="wf">W</span> ; X = <span class="wf">X</span> ; Y = <span class="wf">Y</span> ; Z = <span class="wf">Z</span>`
    },
    {
        'textIntro': `Une anecdote intéressante est écrite juste en dessous mais elle est codée par un code césar également appelé code de chiffrement par décalage . L’alphabet a été décalé, trouve la clé de chiffrement qui te permettrait de retrouver les lettres et retranscris la phrase :`,
        'textEnigme': `Tm nqtu lmjcbm i Wikstivl mv Kitqnwzvqm. Qt aioqb lm ti dqttm lwvb mab wzqoqviqzm Zgiv Kwwotmz mb moitmumvb ti dqttm ycq i dc viqbzm tm uwcdmumvb xwtqbqycm lma jtiks xivbpmza`,
        'titleKnow': `Le savais tu ?`,
        'textKnow': `Plusieurs sources s’entendent pour dire que la lettre la plus utilisée en français est la lettre E. En pourcentage de fréquence, la lettre est utilisée à 14% dans une phrase. Et si tu regardais quel symbole revient le plus souvent pour en déduire son décalage dans l’alphabet ?`
    },
    {
        'textIntro': `Lorsque T’Challa mange l’herbe en forme de coeur pour recevoir les pouvoirs du Black Panther, il voit son père afin de lui demander conseil afin de devenir un bon roi. Cette scène rappelle la même scène d’un certain film où un père dit à son fils de ne pas oublier qui il est et d’où il vient. Quel est ce film ?`,
        'textEnigme': `01001100 01000101 00100000 01010010 01001111 01001001 00100000 01001100 01001001 01001111 01001110 00001101 00001010`,
        'titleKnow': `Le savais tu ?`,
        'textKnow': `Le philosophe Francis Bacon inventa en 1605 un alphabet bilitère, uniquement composé des deux lettres A et B. C'est en quelque sorte l'ancêtre du système binaire des ordinateurs actuels car toute lettre pouvait être construite avec un enchainement précis de ces deux lettres, tandis que le système binaire informatique utilise 0 et 1.`
    }
]

changeContent(dataEnigme[p]);

function changeContent(enigme) {
    p++;
    proress.innerHTML = p;
    textIntro.innerHTML = enigme.textIntro;
    if (p != 1) {
        textEnigme.style.fontSize = '1.3em';
        textEnigme.style.letterSpacing = '0.5';
        textEnigme.style.fontFamily = 'Cantarell';
    } else {
        textEnigme.style.fontSize = '2em';
        textEnigme.style.letterSpacing = '1';
        textEnigme.style.fontFamily = 'Wakanda Forever';
    }
    textEnigme.innerHTML = enigme.textEnigme;
    titleKnow.innerHTML = enigme.titleKnow;
    textKnow.innerHTML = enigme.textKnow;
}

function verifyResponse(p) {
    const res = formResponseEnigme.querySelector('input[name="res"]').value.toLowerCase().trim();
    formResponseEnigme.querySelector('input[name="res"]').value = '';
    const response1 = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS".toLowerCase();
    const response2 = "Le film debute a Oackland en Californie. Il sagit de la ville dont est originaire Ryan Coogler et egalement la ville qui a vu naitre le mouvement politique des black panthers".toLowerCase();
    const response3 = "LE ROI LION".toLowerCase();
    if(p == 1) {
        if(res == response1) {
            return true;
        } else {
            return false;
        }
    } else if(p==2) {
        if(res == response2) {
            return true;
        } else {
            return false;
        }
    } else {
        if(res == response3) {
            return true;
        } else {
            return false;
        }
    }
}

function showPopUp(t, m) {
    let popupTitle = document.getElementById('popup-title');
    let message = document.getElementById('message');
    message.innerHTML = m;
    popupTitle.innerHTML = t;
    popup.style.display = "block";
}

function navigateToPage(url) {
  window.location.href = url;
}

returnHome.addEventListener('click', ()=>{
    navigateToPage('index.html');
});

function showPopUpComming(t, m) {
    comming.style.display = "block";
    let count = 60;
    let counter = document.getElementById('counter');
    counter.innerHTML = count;
    const interval = setInterval(() => {
      count--;
      if(count == 0) {
        navigateToPage('index.html');
      }
      if(count > 9) {
        counter.textContent = count;
      } else {
        counter.textContent = '0'+ count;
      }
    }, 1000);
}

formResponseEnigme.addEventListener('submit', (event) => {
  restartGame.innerHTML = 'RESTART GAME';
  event.preventDefault();
  if(!verifyResponse(p)) {
    if (p == 1){
        let t = 'DEFAITE';
        let m = 'C\'EST PAS TOUT A FAIT CA, A LA PROCHAINE';
        showPopUp(t, m);
    } else if(p == 2) {
        let t = 'DEFAITE';
        let m = 'C\'EST PAS MAL DU TOUT, ENCORE UN PEU D\'EFFORT';
        showPopUp(t, m);
    } else {
        let t = 'DEFAITE';
        let m = 'TU Y ES PRESQUE, REFLECHIR BIEN';
        showPopUp(t, m);
    }
  } else {
    if(p<3){
        restart = false;
        restartGame.innerHTML = 'QUESTION SUIVANTE';
        let t = 'BRAVO';
        let m = 'Tu as trouvé la réponse. Es tu prêt pour l’énigme suivante ?';
        showPopUp(t, m);
        changeContent(dataEnigme[p]);
    } else {
        showPopUpComming();
    }
  }
});

restartGame.addEventListener('click', ()=>{
    if(restart) {
        p = 0;
        popup.style.display = "none";
        changeContent(dataEnigme[p]);
    } else {
        restart = true;
        popup.style.display = "none";
    }
});