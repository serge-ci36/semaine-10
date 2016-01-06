$bouton1 = document.getElementById("bouton1");
$bouton2 = document.getElementById("bouton2");
$multiplicateur = document.getElementById("multiplicateur");
$affichage1 = document.getElementById("affichage1");
$affichage2 = document.getElementById("affichage2");
$affichage3 = document.getElementById("affichage3");
$affichage4 = document.getElementById("affichage4");
$autoclick = document.getElementById("autoclick");
$vaisseau = document.getElementById("vaisseau");
$info1 = document.getElementById("info1");
$info2 = document.getElementById("info2");

score = 0;
multiplicateur1 = 1;
etoilenoire = 2000;
numvais = 1 ;

var elmt1 = document.getElementById("bouton1");
var elmt2 = document.getElementById("figure1");
var elmt3 = document.getElementById("bouton1");

figure2.style.display = "none" ;
figure3.style.display = "none" ;
bouton2.style.display = "none" ;


/*AFFICHAGE DU NOMBRE DE CLIC*/
function afficherScore() {
    $affichage1.innerHTML = score +" tirs";
    $affichage2.innerHTML = "Votre score : " + score+" points";
    /* $affichage3.innerHTML = "Etoile noire : état du bouclier " + etoilenoire; */
	
	if (etoilenoire <= 0) {
		bouton1.style.display = "none"; bouton2.style.display = "block"; }
		else { bouton2.style.display = "none"; bouton1.style.display = "block"; 	}
		
		if (etoilenoire <= 2000 )  {	$affichage4.innerHTML = "████████████████████████████████████████" 	;   }
		if (etoilenoire <= 1950 )  {	$affichage4.innerHTML = "███████████████████████████████████████░" 	;   }
		if (etoilenoire <= 1900 )  {	$affichage4.innerHTML = "██████████████████████████████████████░░" 	;   }
		if (etoilenoire <= 1850 )  {	$affichage4.innerHTML = "█████████████████████████████████████░░░" 	;   }
		if (etoilenoire <= 1800 )  {	$affichage4.innerHTML = "████████████████████████████████████░░░░" 	;   }
		if (etoilenoire <= 1750 )  {	$affichage4.innerHTML = "███████████████████████████████████░░░░░" 	;   }
		if (etoilenoire <= 1700 )  {	$affichage4.innerHTML = "██████████████████████████████████░░░░░░" 	;   }
		if (etoilenoire <= 1650 )  {	$affichage4.innerHTML = "█████████████████████████████████░░░░░░░" 	;   }
		if (etoilenoire <= 1600 )  {	$affichage4.innerHTML = "████████████████████████████████░░░░░░░░" 	;   }
		if (etoilenoire <= 1550 )  {	$affichage4.innerHTML = "███████████████████████████████░░░░░░░░░" 	;   }
		if (etoilenoire <= 1500 )  {	$affichage4.innerHTML = "██████████████████████████████░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1450 )  {	$affichage4.innerHTML = "█████████████████████████████░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1400 )  {	$affichage4.innerHTML = "████████████████████████████░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1350 )  {	$affichage4.innerHTML = "███████████████████████████░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1300 )  {	$affichage4.innerHTML = "██████████████████████████░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1250 )  {	$affichage4.innerHTML = "█████████████████████████░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1200 )  {	$affichage4.innerHTML = "████████████████████████░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1150 )  {	$affichage4.innerHTML = "███████████████████████░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1100 )  {	$affichage4.innerHTML = "██████████████████████░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1050 )  {	$affichage4.innerHTML = "█████████████████████░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <= 1000 )  {	$affichage4.innerHTML = "████████████████████░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  950 )  {	$affichage4.innerHTML = "███████████████████░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  900 )  {	$affichage4.innerHTML = "██████████████████░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  850 )  {	$affichage4.innerHTML = "█████████████████░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  800 )  {	$affichage4.innerHTML = "████████████████░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  750 )  {	$affichage4.innerHTML = "███████████████░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  700 )  {	$affichage4.innerHTML = "██████████████░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  650 )  {	$affichage4.innerHTML = "█████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  600 )  {	$affichage4.innerHTML = "████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  550 )  {	$affichage4.innerHTML = "███████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  500 )  {	$affichage4.innerHTML = "██████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  450 )  {	$affichage4.innerHTML = "█████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  400 )  {	$affichage4.innerHTML = "████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  350 )  {	$affichage4.innerHTML = "███████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  300 )  {	$affichage4.innerHTML = "██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  250 )  {	$affichage4.innerHTML = "█████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  200 )  {	$affichage4.innerHTML = "████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  150 )  {	$affichage4.innerHTML = "███░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=  100 )  {	$affichage4.innerHTML = "██░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=   50 )  {	$affichage4.innerHTML = "█░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }
		if (etoilenoire <=    0 )  {	$affichage4.innerHTML = "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░" 	;   }	
	
}

/*AFFICHAGE DU MULTIPLICATEUR*/
function afficherMultiplicateur() {
    $multiplicateur.innerHTML = "Dégats X" + multiplicateur1 + " +  Puissance X" + numvais ;
	$info1.innerHTML = "Prix du prochain X : " + prix() + " points";}

/*AFFICHAGE DU AUTOCLIC*/
function afficherPrixAutoclick(){
    $autoclick.innerHTML = "Tir auto" ;
	$info2.innerHTML = "Prix du Tir AUTO : " + prixAutoClick() + " points";} 

function clic() {
	etoilenoire =  etoilenoire - multiplicateur1 - numvais;
    score = score + multiplicateur1 + numvais;
    afficherScore();
	afficheretoilenoire();
	}

function prix() {
    return 50 * multiplicateur1 * multiplicateur1;}

function prixAutoClick(){
    return 100;}

function acheterMultiplicateur() {
    if (score >= prix()) {
        score = score - prix();
        multiplicateur1 = multiplicateur1 + 1;
        afficherMultiplicateur();
        afficherScore();
    } else {
        alert("Vous n'avez pas assez de points !");
    }}

function acheterAutoclick() {
    if (score >= prixAutoClick()) {
        score = score - prixAutoClick();
        autoclicker();
    } else {
        alert("Votre score est insuffisant.");
    }}

function autoclicker(){
     $stop = setInterval($bouton1.onclick,1000);}
	 
	 
	 

/*deathstar DEVIENT PLUS PETIT QUAND IL EST CLIQUE*/
function mouseDown() {
    elmt1.style.height = "305px";
	
	switch (numvais) {
		case 1 : figure1.style.width = "151px" ; figure1.style.height = "86px" ; break ;
		case 2 : figure2.style.width = "151px" ; figure2.style.height = "88px" ; break ;
		case 3 : figure3.style.width = "202px" ; figure3.style.height = "120px" ; break ;
	}
}

function mouseUp() {
    elmt1.style.height = "300px";
	
	switch (numvais) {
		case 1 : figure1.style.width = "150px" ; figure1.style.height = "85px" ; break ;
		case 2 : figure2.style.width = "150px" ; figure2.style.height = "87px" ; break ;
		case 3 : figure3.style.width = "200px" ; figure3.style.height = "119px" ; break ;
	}
}
	
function afficherVaisseau(){ 
	if ( score >= 200 && numvais == 1){
		figure1.style.display = "none";
		figure2.style.display = "block";
		score = score - 200 ;
		numvais = 2 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else if ( score >= 400 && numvais == 2) {
		figure1.style.display = "none";
		figure2.style.display = "none";
		figure3.style.display = "block";
		numvais = 3 ;
		score = score - 400 ;
		afficherScore();
		afficherMultiplicateur();
		afficherPrixAutoclick();
	}else {} }
	
	
$bouton1.onclick = clic;
$multiplicateur.onclick = acheterMultiplicateur;
$autoclick.onclick = acheterAutoclick;
$vaisseau.onclick = afficherVaisseau;

afficherScore();
afficherMultiplicateur();
afficherPrixAutoclick();