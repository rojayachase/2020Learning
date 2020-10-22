var quotes = [
'I always wanted to be somebody, but now I realize I should have been more specific. – Lily Tomlin',
'I find television very educational. Every time someone turns it on, I go in the other room and read a book. – Groucho Marx',
'All you need in this life is ignorance and confidence and then success is sure. – Mark Twain',
'But better to get hurt by the truth than comforted with a lie. ― Khaled Hosseini',
'The one you love and the one who loves you are never ever the same person. ― Chuck Palahniuk Invisible Monsters',
'I speak to everyone in the same way whether he is the garbage man or the president of the university. ― Albert Einstein'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length)); //math.floor rounds down to the nearest whole number, random generate decimal between 0 and 1
  
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

