'use strict'

let frame = document.getElementById('frame');
let changeButton = document.querySelector(".nextQuotebtn");

let showQuote = document.getElementById("displayQoute");

let selectOption = document.getElementById("mySelect");
let typeOfQuote = document.getElementById("mySelect2");
let displayQuoteBut = document.getElementById("displayQuotebut");




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


let quotePartsJoinerMot = ()=>{

    return '"' + quoteHead[quoteGenerate()]+" "+ quoteJoiner[quoteGenerate()] +" "  + quoteTail[quoteGenerate()] + '"';
};

let quote1 = quotePartsJoinerMot();
let quote2 = quotePartsJoinerMot();
let quote3 = quotePartsJoinerMot();
let quote4 = quotePartsJoinerMot();
let quote5 = quotePartsJoinerMot();



let fiveQuotesMot = [
    quote1,quote2,quote3,quote4,quote5
];

let displayQuoteMot = (numberOfQuotes)=>{
    if(numberOfQuotes === 1){

        showQuote.innerHTML= fiveQuotesMot[0];

    }else  if(numberOfQuotes === 2){

        showQuote.innerHTML= fiveQuotesMot[0] + "<br>" + "<br>" + fiveQuotesMot[1];


    }else if(numberOfQuotes === 3){
        
        showQuote.innerHTML= fiveQuotesMot[0] + "<br>" + "<br>" + fiveQuotesMot[1] + "<br>"+ "<br>"  + fiveQuotesMot[2];

    }else if(numberOfQuotes ===4){
        showQuote.innerHTML= fiveQuotesMot[0] + "<br>"+ "<br>"  + fiveQuotesMot[1] + "<br>"+ "<br>"  + fiveQuotesMot[2] + "<br>" + "<br>" + fiveQuotesMot[3];

    }
    else if(numberOfQuotes ===5){

        showQuote.innerHTML= fiveQuotesMot[0] + "<br>"+ "<br>"  + fiveQuotesMot[1] + "<br>"+ "<br>"  + fiveQuotesMot[2] + "<br>"+ "<br>"  + fiveQuotesMot[3] +"<br>"+ "<br>"  + fiveQuotesMot[4] ;

        
    }
}




/*
changeButton.addEventListener('click',()=>{

       // showQuote.innerHTML = fiveQuotes[Math.floor(Math.random()*1)];
        location.reload();
        showOneQuote();
});

showOneQuote();
*/


let quoteHeadProg =[
    'Programs must be written for people to read ',
    'Any fool can write code that a computer can understand',
    'Truth can only be found',
    'I am not a great programmer',
    'Perl-the only language that looks'

];

let quoteJoinerProg =[
    'and only incidentally for',
    'good programmers write code',
    'in one place:',
    'I am just a good programmer',
    'the same before'
];

let quoteTailProg =[
    'machines to execute',
    'that humans can understand',
    'the code',
    'with great habits',
    'and after RSA'
];


let allQuotes = {

    programmingQuotes:[[
        'Programs must be written for people to read ',
        'Any fool can write code that a computer can understand',
        'Truth can only be found',
        'I am not a great programmer',
        'Perl-the only language that looks'
    
    ]],


};


let quoteGenerateProg = ()=>{

 let randomGen = Math.floor(Math.random()*4);

    return randomGen;
};


let quotePartsJoinerProg = ()=>{

    return '"' + quoteHeadProg[quoteGenerateProg()]+" "+ quoteJoinerProg[quoteGenerateProg()] +" "  + quoteTailProg[quoteGenerateProg()] + '"';
};

let quotep1 = quotePartsJoinerProg();
let quotep2 = quotePartsJoinerProg();
let quotep3 = quotePartsJoinerProg();
let quotep4 = quotePartsJoinerProg();
let quotep5 = quotePartsJoinerProg();



let fiveQuotesProg = [
    quotep1,quotep2,quotep3,quotep4,quotep5
];



let displayQuoteProg = (numberOfQuotesProg)=>{
    if(numberOfQuotesProg === 1){

        showQuote.innerHTML= fiveQuotesProg[0];

    }else  if(numberOfQuotesProg === 2){

        
        let display = fiveQuotesProg[0] + "<br>"+"<br>"+ fiveQuotesProg[1];
        showQuote.innerHTML= display;
        
    }else if(numberOfQuotesProg === 3){
        
        showQuote.innerHTML= fiveQuotesProg[0] + "<br>" + "<br>" + fiveQuotesProg[1]  + "<br>"+ "<br>"  + fiveQuotesProg[2];
        

    }else if(numberOfQuotesProg ===4){
        showQuote.innerHTML= fiveQuotesProg[0] + "<br>" + "<br>" + fiveQuotesProg[1] + "<br>"+ "<br>"  + fiveQuotesProg[2] + "<br>" + "<br>" + fiveQuotesProg[3];
        
    }
    else if(numberOfQuotesProg ===5){

        showQuote.innerHTML= fiveQuotesProg[0] + "<br>" + "<br>" + fiveQuotesProg[1] + "<br>"+ "<br>"  + fiveQuotesProg[2] + "<br>" + "<br>" + fiveQuotesProg[3] +"<br>"+ "<br>"  + fiveQuotesProg[4] ;

        
    }
}




displayQuoteBut.addEventListener('click',()=>{

    let whatTodisplay="";
    

    console.log(typeOfQuote.value);
    let selectValue= selectOption.value;
    console.log(selectValue);

    console.log(typeof(selectValue));
    
    if(typeOfQuote.value ==="motivational"){


         displayQuoteMot(Number(selectValue));
       
        
      
    }else{
        
         displayQuoteProg(Number(selectValue));
    }

   
});





