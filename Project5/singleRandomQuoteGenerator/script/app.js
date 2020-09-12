'use strict'

let frame = document.querySelector('.frame');
let changeButton = document.querySelector(".nextQuotebtn");

let showQuote = document.getElementById("displayQoute");




let quoteHead =[
    'Sometimes later ',
    'Things work out best for those',
    'If you are not willing to risk the usual',
    'All our dreams can come true if we',
    'Whenever you see a successful person you only'

];

let quoteJoiner =[
    'becomes',
    'who make the best of',
    'you will have to',
    'have the courage',
    'see the public glories'
];

let quoteTail =[
    'Do it now',
    'how things work out',
    'the ordinary',
    'pursue them',
    'never the private sacrifices to reach them'
];




let quoteGenerate = ()=>{

 let randomGen = Math.floor(Math.random()*4);

    return randomGen;
};


let quotePartsJoiner = ()=>{

    return '"' + quoteHead[quoteGenerate()]+" "+ quoteJoiner[quoteGenerate()] +" "  + quoteTail[quoteGenerate()] + '"';
};





let showOneQuote =()=>{
    showQuote.innerHTML = quotePartsJoiner();
};



changeButton.addEventListener('click',()=>{

       // showQuote.innerHTML = fiveQuotes[Math.floor(Math.random()*1)];
        
        showOneQuote();
});

