import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Tamagotchi } from './tamagotchi.js';

var myTamagotchi;


$(document).ready(function() {

  $('.tamagotchi').submit(function(event){
    event.preventDefault();
    var name = $('input#name').val();
     myTamagotchi = new Tamagotchi(name);
     console.log(name);
});
 
  $("#feed").click(function(){
     event.preventDefault();
     let feed = myTamagotchi.feed();
     console.log(feed);
     $("#output").text(feed).show();
  });

  $("#play").click(function(){
    event.preventDefault();
    let play = myTamagotchi.toString();
    console.log(play);
    $("#output").text(play).show();
});

  // $("#teach").click(function(){
  //   event.preventDefault();
  //   myTamagotchi.teach();
  // });
});
