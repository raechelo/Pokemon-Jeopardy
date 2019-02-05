// This is the JavaScript entry file - your code begins here
// ! Do not delete or rename this file !

// Tell webpack to use a CSS file
import './css/normalize.css';
import './css/base.css';
// import './css/styles.css';

// Tell webpack to use a JS file
import data from './data';
import domUpdates from './domUpdates';
import Question from './Question';
import GameBoard from './GameBoard';
import Players from './Players';
import Round from './Round';
import DailyDouble from './DailyDouble';

import $ from 'jquery';
import jQuery from 'jquery'
window.$ = jQuery;

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/bg-image.jpg';
import './images/bg2.png';
import './images/bulbasaur.png';
import './images/charmander.png';
import './images/Squirtle.png';
import './images/Oak2.png';

// * This is the JavaScript entry file - your code begins here. *
// $(".start--button").click(function (e) {
//   $(".overlay").remove();
//   $('.start-up').remove();
// });
// $('.col').click(function (e) {
//   $('.question-container').css('visibility', 'visible')
// })
// * ======= Global Variables ======= *
let $player1Name = $('#p1-name-js').val();
let $player2Name = $('#p2-name-js').val();
let $player3Name = $('#p3-name-js').val();

let $cats = [$('.1'), $('.2'), $('.3'), $('.4')];
let $cols1 = [$('.a1'), $('.b1'), $('.c1'), $('.d1')];
let $cols2 = [$('.a2'), $('.b2'), $('.c2'), $('.d2')];
let $cols3 = [$('.a3'), $('.b3'), $('.c3'), $('.d3')];
let $cols4 = [$('.a4'), $('.b4'), $('.c4'), $('.d4')];







// * ======= Functions ======= *
function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}


$(".start--button").click(function (e) {
  e.preventDefault();
  let game = new GameBoard()
  game.startGame();
  // game.players.push($player1Name, $player2Name, $player3Name)
  // let player.name = $('#p1-name-js').val()
  let $p1Name = $("#p1-name-change-js")
  $p1Name.text($('#p1-name-js').val())

  let $p2Name = $("#p2-name-change-js")
  $p2Name.text($('#p2-name-js').val())
  
  let $p3Name = $("#p3-name-change-js")
  $p3Name.text($('#p3-name-js').val())

  $cats.forEach(cat => {
    $cats[cat] = "test"
  })

  $('.overlay').toggle();
  $('.start-up').toggle();
});

$('.col').click(function () {
  $('.overlay').toggle();
  $(".question-container").css('visibility', 'visible');
  $('.q-pop').toggle();
});