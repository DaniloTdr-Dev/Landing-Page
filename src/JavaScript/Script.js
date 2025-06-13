$(document).ready(function() {
    // ao clicar no #mobile_btn, execute a função:
    $('#mobile_btn').on('click', function() {

        //para adicionar a classe active quando clicar
        $('#mobile_menu').toggleClass('active');
        
        //vai adicionar a classe fa-x na tag <i>, transformando as barras em X
        $('#mobile_btn').find('i').toggleClass('fa-x');
    })
})