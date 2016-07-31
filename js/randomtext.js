$(document).ready(function() {
  function setRandomPhrase() {
    // Set phrases into an array
    var phrases = new Array(
      "'Think before you speak. Read before you think -  Fran Lebowitz'",
      "'Keep your face always toward the sunshine - and shadows will fall behind you. -  Walt Whitman'",
      "'Write it on your heart that every day is the best day in the year.' - Ralph Waldo Emerson",
      "'Do not pray for an easy life, pray for the strength to endure a difficult one' - Bruce Lee",
      "'To handle yourself, use your head; to handle others, use your heart.' - Eleanor Roosevelt",
      "'Everything in moderation, including moderation.' - Oscar Wilde",
      "'Dream as if you will live forever; Live as if you will die today.' - James Dean",
      "'The past is behind, learn from it. The future is ahead, prepare for it. The present is here, live it.' - Thomas S. Monson",
      "'Run mad as often as you choose, but do not faint!.' - Jane Austen"
    );

    // Selects a random phrase
    var random = Math.floor(Math.random()*phrases.length);

    while (phrases[random] == $("#phrase").text())
      {
         var random = Math.floor(Math.random()*phrases.length);
      }
    // Sets the area to use that random phrase
    $("#phrase").fadeOut('slow',function(){$("#phrase").text(phrases[random]).fadeIn('slow')});

  }
  
  // Fire the function every 5 seconds...
  setInterval(setRandomPhrase,10000);
});