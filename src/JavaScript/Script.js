$(document).ready(function() {
    // ao clicar no #mobile_btn, execute a função:
    $('#mobile_btn').on('click', function() {

        //para adicionar a classe active quando clicar
        $('#mobile_menu').toggleClass('active');
        
        //vai adicionar a classe fa-x na tag <i>, transformando as barras em X
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // pegando informações do css
    const sections = $('section');
    const navItems = $('.nav-item');

    // quando rolar na janela 
    $(window).on('scroll', function() {
        const header = $('header');
        let activeSecctionIndex = 0;
        // parametro outerHeight() pega todo o header
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        if (scrollPosition <= 0) {
            // se scroll for igual a 0 não coloque sombra
            header.css('box-shadow', 'none');
        }
        else {
            // caso contrário, coloque essa sombra
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            // parametro outerHeight() pega todo o header
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSecctionIndex = i;
                return false;
            }
        });
        navItems.removeClass('active');
        $(navItems[activeSecctionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('#dishes', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%',
    });
    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
    });
})