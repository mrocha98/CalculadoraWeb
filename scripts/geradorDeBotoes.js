function adicionaClasses(btn, txt){
    btn.innerHTML = txt;
    btn.classList.add("button");
    btn.classList.add("is-medium");
    if(Number.isInteger(Number(txt))) btn.classList.add("is-number");
    else btn.classList.add("is-operation");
}

function adicionaIds(btn, txt){
    btn.setAttribute("id", "_"+txt);
}

function geraBotoes(div, txts){
    let i = 0;
    txts.forEach(function(txt){
        if(i % 4 == 0) divBotoes.appendChild(document.createElement("br")); 
        let btn = document.createElement("BUTTON");
        adicionaClasses(btn, txt);
        adicionaIds(btn, txt)
        div.appendChild(btn);
        i++;	
    });
}

const txts = [
    "X²", "n!", "C", "/",
    "7", "8", "9", "*", 
    "4", "5", "6", "-", 
    "1", "2", "3", "+",
     "+/-", "0", ".", "=" ];
let divBotoes = document.querySelector("div.botoes");

geraBotoes(divBotoes, txts);



