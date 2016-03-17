

	var score1 = 0;
	var score2 = 0;
	var score3 = 0;
	var score4 = 0;
	var score5 = 0;
	var score6 = 0;
	var score7 = 0;
	var score8 = 0;
	var score9 = 0;
	var final = 0;


	function affiche(){
if( $('input[name=ajout-langue]').is(':checked') ){
    $(".hide-group-lang").show('slow');
} else {
	document.getElementById('langue-2-0').checked = false;
	document.getElementById('langue-2-1').checked = false;
	document.getElementById('langue-2-2').checked = false;
	document.getElementById('langue-2-3').checked = false;

	document.getElementById('niveau-2-0').checked = false;
	document.getElementById('niveau-2-1').checked = false;
	document.getElementById('niveau-2-2').checked = false;
	document.getElementById('niveau-2-3').checked = false;
	document.getElementById('niveau-2-4').checked = false;

    $(".hide-group-lang").hide('slow');


}
	}
/* _______________LANGUES _____________*/

$('input[name="langue-1"]').on('change', function() {
         
  	if (document.getElementById('langue-1-0').checked === true) {
  		score1 = 1000;
  	}else if(document.getElementById('langue-1-1').checked === true){
  		score1 = 1000;
  	}else if(document.getElementById('langue-1-2').checked === true){
  		score1 = 500;
  	}else if(document.getElementById('langue-1-3').checked === true){
  		score1 = 500;
  	}


  	console.log(score1);
  	return score1;
});

$('input[name="langue-2"]').on('change', function() {
         
  	if (document.getElementById('langue-2-0').checked === true) {
  		score3 = 1000;
  	}else if(document.getElementById('langue-2-1').checked === true){
  		score3 = 1000;
  	}else if(document.getElementById('langue-2-2').checked === true){
  		score3 = 500;
  	}else if(document.getElementById('langue-2-3').checked === true){
  		score3 = 500;
  	}

  	console.log(score3);
  	return score3;
});


/*______________Niveau Langue _______________*/

$('input[name="niveau-1"]').on('change', function() {
         
  	if (document.getElementById('niveau-1-0').checked === true) {
  		score2 = 1000;
  	}else if(document.getElementById('niveau-1-1').checked === true){
  		score2 = 1000;
  	}else if(document.getElementById('niveau-1-2').checked === true){
  		score2 = 500;
  	}else if(document.getElementById('niveau-1-3').checked === true){
  		score2 = 500;
  	}else if(document.getElementById('niveau-1-4').checked === true){
  		score4 = 500;
  	}

  	console.log(score2);
  	return score2;
});

$('input[name="niveau-2"]').on('change', function() {
         
  	if (document.getElementById('niveau-2-0').checked === true) {
  		score4 = 1000;
  	}else if(document.getElementById('niveau-2-1').checked === true){
  		score4 = 1000;
  	}else if(document.getElementById('niveau-2-2').checked === true){
  		score4 = 500;
  	}else if(document.getElementById('niveau-2-3').checked === true){
  		score4 = 500;
  	}else if(document.getElementById('niveau-2-4').checked === true){
  		score4 = 500;
  	}

  	console.log(score4);
  	return score4;
});


function Activity() {

	var activity = document.getElementById("select-activity").value;
	if(activity == 'tc'){
		score5 = 0;
	}else if (activity == 'ux') {
		score5 = 700;
		console.log("ux");
	}else if (activity == 'da') {
		score5 = 500;
		console.log("da");
	}else if (activity == 'gd') {
		score5 = 1000;
		console.log("gd");
	}else if (activity == 'gi') {
		score5 = 1500;
		console.log("gi");
	}else if (activity == 'gm') {
		score5 = 1000;
		console.log("gm");
	}else if (activity == 'illu') {
		score5 = 1000;
		console.log("illu");
	}else if (activity == 'icono') {
		score5 = 500;
		console.log("icono");
	}else if (activity == 'ld') {
		score5 = 1000;
		console.log("ld");
	}else if (activity == 'm3d') {
		score5 = 0;
		console.log("m3d");
	}else if (activity == 'wd') {
		score5 = 1000;
		console.log('wd');
	}else if (activity == 'sjv') {
		score5 = 1000;
		console.log("sjv");
	}else if (activity == 'rea3d') {
		score5 = 1000;
		console.log("rea3d");
	}else if (activity == 'peintre') {
		score5 = 1000;
		console.log("peintre");
	}
	console.log(score5);
	return score5;
};
$('input[name="annee-xp"]').on('change', function() {
         
  	if (document.getElementById('annee-xp-0').checked === true) {
  		score6 = 1000;
  	}else if(document.getElementById('annee-xp-1').checked === true){
  		score6 = 400;
  	}else if(document.getElementById('annee-xp-2').checked === true){
  		score6 = 300;
  	}else if(document.getElementById('annee-xp-3').checked === true){
  		score6 = 200;
  	}else if(document.getElementById('annee-xp-4').checked === true){
  		score6 = 100;
  	}else if(document.getElementById('annee-xp-5').checked === true){
  		score6 = 200;
  	}


  	console.log(score6);
  	return score6;
});
$('input[name="teletravail"]').on('change', function() {
         
  	if (document.getElementById('teletravail-0').checked === true) {
  		score7 = 1000;
  	}else if(document.getElementById('teletravail-1').checked === true){
  		score7 = 400;
  	}

  	console.log(score7);
  	return score7;
});

$('input[name="internationale"]').on('change', function() {
         
  	if (document.getElementById('internationale-0').checked === true) {
  		score8 = 1000;
  	}else if(document.getElementById('internationale-1').checked === true){
  		score8 = 400;
  	}

  	console.log(score8);
  	return score8;
});

function Contrat() {

	var contrat = document.getElementById("contrat").value;

	if (contrat == 'cdd') {
		score9 = 700;
		console.log(score9);
	}else if (contrat == 'cdi') {
		score9 = 500;
		console.log(score9);
	}else if (contrat == 'cp') {
		score9 = 1000;
		console.log(score9);
	}else if (contrat == 'missions') {
		score9 = 1500;
		console.log(score9);
	}
	console.log(score9);
	return score9;
};


/*            // On attend que la page soit chargée 
            jQuery(document).ready(function()
                                   {
                // On cache la zone de texte
                jQuery('#toggle').hide();
                // toggle() lorsque le lien avec l'ID #toggler est cliqué
                jQuery('a#toggler').click(function()
                                          {
                    jQuery('#toggle').toggle(400);
                    return false;
                });
            });*/