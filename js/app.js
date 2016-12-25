$(document).ready(function(){
  // add the first line of response here
  $('#send-button').on('click', function(){
    var firstWords = ('WOOF');
    console.log(firstWords);

    //We added the div class of the chat bubble to the chat window by prepending the div class.
    $(".chat-window").prepend('<div id="user-bubble" class="chat-bubble user"><p><span id="user-name" class="user-name">User:&nbsp</span></p></div>');

    //Return the text input by using the .val jquery method. Then set the value as a var userMessage and appened that variable to the user bubble p
    var userMessage = $('#user-field').val();
    console.log(userMessage)
    $("#user-bubble p").append(userMessage);
  });

// add predetermined reponse (yes or no) that leads into another line of questions

// var headingText = document.createTextNode("Hello world!");
// console.log(headingText);
});
