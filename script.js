var quote =[
    {
        quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        Author:"--Nelson Mandela",
    },
    {
        quote:"It's not what happens to you, but how you react to it that matters." ,
        Author:"--Epictetus",
    },
    {
        quote:"The best revenge is massive success.",


        Author:"--Frank Sinatra",

    },
];
var lastQuote=-1;

function generateQuote(){

var index;
do {
 index=Math.floor(Math.random()* quote.length);

 console.log(index,lastQuote);
}
while(lastQuote === index);



lastQuote=index;
document.getElementById('quote').innerHTML=quote[index].quote;
document.getElementById('author').innerHTML=quote[index].Author;


}