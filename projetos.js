document.addEventListener('DOMContentLoaded', function() {
    const dados = [
        { titulo: 'Letras Conscientes!', texto: 'Amo compor músicas que falam sobre como evitar bullying.', corTexto: '#FE5F99', corFundo: '#FAD2E5', img: 'img/microfone.png', imgBlob: 'img/blob1.png' },
        { titulo: 'A arte do artesanato!', texto: 'Gosto muito de fazer artesanatos com materiais recicláveis.', corTexto: '#46CC6B', corFundo: '#D3F1BF', img: 'img/artesanato.png', imgBlob: 'img/blob2.png' },
        { titulo: 'Versos que inspiram!', texto: 'Escrevo poesias com o coração que acolhem e inspiram.', corTexto: '#FFA362', corFundo: '#FFE7D7', img: 'img/pergaminho.png', imgBlob: 'img/blob3.png' },
        // Adicione mais objetos com os dados dos próximos textos, títulos, cores e imagens
        // Exemplo: { titulo: 'Novo Título', texto: 'Novo Texto', corTexto: '#XXXXXX', corFundo: '#XXXXXX', img: 'caminho/nova-imagem.jpg' }
    ];

    let currentIndex = 0;
    const conteudoTitulo = document.querySelector('.conteudo-titulo');
    const tituloElement = conteudoTitulo.querySelector('h2');
    const imgPro = document.querySelector('.main-projeto-img img');
    const magicPattern = document.querySelector('.magicpattern path');
    const mainElement = document.getElementById('meuMain');
    const imgBlob = document.getElementById('blob'); // Corrigido aqui, removido o #

    function updateContent() {
        conteudoTitulo.style.transition = "transform 0.5s, opacity 0.5s";
        mainElement.style.transition = "background 0.5s"; // Modificada a propriedade para background
        imgPro.classList.add('image-transition');
        imgPro.style.transform = "translateY(20px)";

        setTimeout(() => {
            conteudoTitulo.style.transform = "translateY(20px)";
            conteudoTitulo.style.opacity = 0;
        }, 100);

        setTimeout(() => {
            tituloElement.innerText = dados[currentIndex].titulo;
            conteudoTitulo.querySelector('p').innerText = dados[currentIndex].texto;
            tituloElement.style.color = dados[currentIndex].corTexto;
            imgPro.setAttribute('src', dados[currentIndex].img);
            imgBlob.setAttribute('src', dados[currentIndex].imgBlob); // Corrigido aqui, removido o #

            // Mudar a cor do SVG para verde
            magicPattern.style.fill = '#00FF00'; // Altere para a cor verde desejada

            // Mudar a cor de fundo do main
            mainElement.style.background = dados[currentIndex].corFundo;

            // Adicionar ou remover a classe main2 dependendo do índice atual
            if (currentIndex === 1) {
                mainElement.classList.add('main2');
            } else {
                mainElement.classList.remove('main2');
            }
        }, 500);
              if (currentIndex === 0) {
            mainElement.style.background = dados[currentIndex].corFundo;
        } else if (currentIndex === 1) {
            mainElement.style.background = dados[currentIndex].corFundo;
        } else if (currentIndex === 2) {
            mainElement.style.background = dados[currentIndex].corFundo;
        } else {
            mainElement.style.background = '#FAD2E5'; // ou outra cor de fundo que você queira usar
        }

        setTimeout(() => {
            conteudoTitulo.style.transform = "translateY(0)";
            conteudoTitulo.style.opacity = 1;
            imgPro.style.transform = "translateY(0)";
        }, 1000);
    }

    function nextContent() {
        if (currentIndex < dados.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateContent();
    }

    const nextButton = document.querySelector('.cssbuttons-io-button');
    nextButton.addEventListener('click', nextContent);

    updateContent();
});
