(function(){
    function AddRooms(){
      var currentRooms = firebaseArray.child(newChildValue);//childValue = new child
      currentRooms.update({
        //new key: newValue? currentRooms.push(childValue)??
      });
        return currentRooms;
    }
});
/*
***********Carrie's Quote.js file**********
(function() {
 +    function Quote() {
 +        var quotes = [
 +                "i got a new iphone and it's just been a tragedy ever since",
 +                "crime is just rampant here in cleveland, every time i turn around there's something new. i don't know how it is in memphis.",
 +                "it's gonna go away or i am",
 +                "i've been through hell with this cell phone",
 +                "the more i stay off the thruways the better",
 +                "it must be a sam-sing or something"
 +            ]
 +        return {
 +            all: quotes,
 +            createNewQuote: function(newQuote) {
 +                quotes.push(newQuote)
 +            }
 +        }
 +    }
 +    angular
 +        .module('angularModals')
 +        .factory('Quote', [Quote])
 +})()
