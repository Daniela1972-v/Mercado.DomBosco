  //Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
 hamburguerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível

 });

 //Criamos uma função que o ouvir o click do Mouse, ele REMOVE uma class, que está fazendo nossa caixa (DIV) desaparecer, ou seja, ficar invisível.
 closeButton.addEventListener("click", function() {
    mobileMenu.classList.remove("flex");

 });