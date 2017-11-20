// ==UserScript==
// @name         TTFL Filtre
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Affiche le haut du panier TTFL en filtrant vos choix de pick
// @author       Alvarez Romain - Hinitial
// @include      http://fantasy.trashtalk.co/
// @include      http://fantasy.trashtalk.co/?champweek=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var idJoueurSelection = new Array(
        "joueur203471",
        "joueur202681",
        "joueur1626156",
        "joueur2730","joueur202689",
        "joueur203897",
        "joueur2544","joueur201567","joueur202738",
        "DAL",
        "joueur203999","joueur200794",
        "joueur203083",
        "joueur201939","joueur201142","joueur203110","joueur202691",
        "joueur201935","joueur101108",
        "joueur203506","joueur203506",
        "joueur201933",
        "LAL",
        "joueur201188",
        "joueur201609","joueur202355",
        "joueur203507","joueur202339",
        "joueur202710","joueur1626157","joueur203952",
        "joueur202326","joueur203076",
        "joueur204001",
        "joueur2546","joueur202331","joueur201566",
        "joueur202696","joueur203095",
        "joueur203954","joueur1627732",
        "joueur1626164",
        "joueur203081","joueur203468",
        "SAC",
        "joueur200746","joueur200752","joueur202695",
        "joueur201942","joueur200768",
        "joueur203497",
        "joueur203078","joueur202322");

    var listeEquipe = document.getElementById("ajax_liste_equipe");
    // Ajout d'un gestionnaire pour l'événement click
    listeEquipe.addEventListener("click", function () {
        var listeJoueur = document.querySelectorAll("#ajax_liste_joueurs > ul > li.list-group-item");
        for (var i = 1; i < listeJoueur.length; i++) {
            if( idJoueurSelection.indexOf(listeJoueur.item(i).id) === -1 ){
               var id = document.getElementById(listeJoueur.item(i).id);
               id.parentNode.removeChild(id);
            }
        }
    });
})();
