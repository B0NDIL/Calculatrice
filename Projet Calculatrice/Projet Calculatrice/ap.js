
const touches = [...document.querySelectorAll('.button')];
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran')

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer (valeur)   
})

document.addEventListener('click', (e) =>{
    const valeur = e.target.dataset.key;
    calculer (valeur)   
})

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch(valeur){
            //faire marche la touche clean
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                //faire marcher le '='
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul;
                break;
            default:
            // faire fonctionner les autres touche
            const indexKeycode = listeKeycode.indexOf(valeur);
            const touche = touches[indexKeycode]
            ecran.textContent += touche.innerHTML;


        }
    }
}
    
window.addEventListener('error', (e) => {
    alert('il y a une erreur dans votre calcul :' + e.message)
})
