let select = document.querySelector('#select');
let convert = document.querySelector('#rendu');

let envoyer = document.querySelector('#envoyer');
let valeur = document.querySelector('#valeur');

let resultat=0;

envoyer.addEventListener('click', calcul);

const devise = ['Selectionnez devise','US-Dollars','CAN-Dollars','Franc SUISSES','Livre Sterling', 'Yen', 'Roubles'];

function calcul(){


switch(select.selectedIndex){
    case 0:
            convert.innerHTML = 'Selectionner une devise et valider';
        break;
    case 1:
            resultat = valeur.value * 1.21;
            convert.innerHTML = 'La somme en Dollard US est : ' + resultat;
        break;
    case 2:
            resultat = valeur.value * 1.08;
            convert.innerHTML = 'La somme en Dollard Dollard Canadien est : ' + resultat;
        break;
    case 3:
            resultat = valeur.value * 0.88;
            convert.innerHTML = 'La somme en Francs Suisses est : ' + resultat;
        break;
    case 4:
            resultat = valeur.value * 126.94;
            convert.innerHTML = 'La somme en Livres Sterling est : ' + resultat;
        break;
    case 5:
            resultat = valeur.value * 126.94;
            convert.innerHTML = 'La somme en Yen est : ' + resultat;
        break;
    case 6:
            resultat = valeur.value * 89.46;
            convert.innerHTML = 'La somme en Roubles est : ' + resultat;
        break;
    default:
        convert.innerHTML = 'Vous n\'avez entrer aucune valeur ou une valeur non valide';
}
}


function listeMonnaie(liste)
    {
        for(i = 0; i < liste.length; i++)
        {
            let option = document.createElement("option");
            option.text = liste[i];
            select.appendChild(option);
        }
    }

        listeMonnaie(devise);
    


  
