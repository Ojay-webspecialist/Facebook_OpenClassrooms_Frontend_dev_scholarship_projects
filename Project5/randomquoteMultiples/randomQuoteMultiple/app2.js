'use strict'

let frame = document.getElementById('frame');
let changeButton = document.querySelector(".nextQuotebtn");

let showQuote = document.getElementById("displayQoute");

let selectOption = document.getElementById("mySelect");
let typeOfQuote = document.getElementById("mySelect2");
let displayQuoteBut = document.getElementById("displayQuotebut");



let randomQuotes = {

    quotes:[[
        'Programs must be written for people to read ',
        'Any fool can write code that a computer can understand',
        'Truth can only be found',
        'I am not a great programmer',
        'Perl-the only language that looks'
    
    ],
    [
        'and only incidentally for',
        'good programmers write code',
        'in one place:',
        'I am just a good programmer',
        'the same before'
    ],
    [
        'machines to execute',
        'that humans can understand',
        'the code',
        'with great habits',
        'and after RSA'
    ]
],
quotesMot:[
[
    'Sometimes later ',
    'Things work out best for those',
    'If you are not willing to risk the usual',
    'All our dreams can come true if we',
    'Whenever you see a successful person you only'

],
[
    'becomes',
    'who make the best of',
    'you will have to',
    'have the courage',
    'see the public glories'
],
[
    'Do it now',
    'how things work out',
    'the ordinary',
    'pursue them',
    'never the private sacrifices to reach them'
]

],
quotePartsJoinerProg:()=>{

    return '"' + randomQuotes.quotes[0][Math.floor(Math.random()*randomQuotes.quotes[0].length)] + ' ' + randomQuotes.quotes[1][Math.floor(Math.random()*randomQuotes.quotes[1].length)]+" " + randomQuotes.quotes[2][Math.floor(Math.random()*randomQuotes.quotes[2].length)] + '"';
},
quotePartsJoinerMot:()=>{
    return '"' + randomQuotes.quotesMot[0][Math.floor(Math.random()*randomQuotes.quotesMot[0].length)] + ' ' + randomQuotes.quotesMot[1][Math.floor(Math.random()*randomQuotes.quotesMot[1].length)]+" " + randomQuotes.quotesMot[2][Math.floor(Math.random()*randomQuotes.quotesMot[2].length)] + '"';
}


};


displayQuoteBut.addEventListener('click',()=>{

    let values='';


    if(typeOfQuote.value ==="motivational"){


      

    for(let i=0; i<Number(selectOption.value);i++){
         values += randomQuotes.quotePartsJoinerMot()+ "<br>";
        
    }

    showQuote.innerHTML=values ;
      
       
     
   }else{
    

    for(let i=0; i<Number(selectOption.value);i++){
         values += randomQuotes.quotePartsJoinerProg()+ "<br>";
        
    }

    showQuote.innerHTML=values ;
   }
    
    

   
   
});





