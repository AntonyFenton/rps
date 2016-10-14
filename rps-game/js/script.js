$(document).ready(function(){

  //Declare selectors as variables
  var $player = $('.player');
  var $computerHand = $('.computer-hand');
  var $humanrHand = $('.human-hand');
  var $humanpoints = $('#human-points');
  var $computerpoints = $('#computer-points');
  var $rules = $('.rules');
  var $results = $( '#results' );
  var $countbox = $( '.count-box');
  var $playButton = $( '.play-btn');

  var human;
  var showHandType;

  //Instances of Get score closure to have separate counts for Humans and Computers
  var computerScore = getScore();
  var humanScore = getScore();

  //Closure to itterate the score count
  function getScore() {
    var num = 1;
    function itterateNumb() {
      return  num++;
    }
    return itterateNumb;
  }

  //Calculates Computers hand
  function play(value){
    if(value <= 33.33){
      value = "rock";
      $computerHand.addClass('fa-hand-rock-o');
    }else if (value <= 66.66) {
      value = "paper";
      $computerHand.addClass('fa-hand-paper-o');
      $computerHand.removeClass('fa-hand-rock-o');
    }else{
      value = "scissors";
      $computerHand.addClass('fa-hand-scissors-o');
      $computerHand.removeClass('fa-hand-rock-o');
    }
    return value;
  }

  //Logic to see who wins
  function compare(human,computer){
    if (computer == "rock" && computer != human) {
      if (human == "scissors") {
	      $results.html("Unlucky <br /> Computer Wins");
        winner = "computer";
      }else{
        $results.html("You Win!");
        winner = "human";
      }
    }else if (computer == "paper" && computer != human) {
      if (human == "rock") {
	      $results.html("Unlucky <br /> Computer Wins");
        winner = "computer";
      }else{
        $results.html("You Win!");
        winner = "human";
      }
    }else if (computer == "scissors" && computer != human) {
      if (human == "paper") {
	      $results.html("Unlucky <br /> Computer Wins");
        winner = "computer";
      }else{
        $results.html("You Win!");
        winner = "human";
      }
    }else{
      $results.html("It's a Draw!");
      winner = "nill";
    }
    $countbox.addClass('active');
    updateScore(winner);
  }

  //Updates the score
  function updateScore(winner){
    if(winner != "nill"){
      if(winner == 'human'){
        $humanpoints.html(humanScore());
      }else{
        $computerpoints.html(computerScore());
      }
    }
  }

  $playButton.on('click',function(e){
    e.preventDefault();

    //Removing states from Classes
    $results.removeClass('active');
    $countbox.removeClass('active');
    $player.toggleClass('ritual');
    $player.addClass('fa-hand-rock-o');
    $player.removeClass('fa-hand-paper-o fa-hand-scissors-o');

    human = this.id;
    showHandType= "fa-hand-" + this.id + "-o";

    setTimeout (function(){
        var computer = play( Math.floor((Math.random() * 100) + 1));
        compare(human,computer);
        showHand();
    },1600);

    function showHand(){
      $humanrHand.removeClass('fa-hand-rock-o');
      $humanrHand.addClass(showHandType);
      $player.toggleClass('ritual');
    }

  });

  //Menu
  $('.rules-menu, .close-rules-menu').on('click',function(){
    $rules.toggleClass('active');
  });

});
