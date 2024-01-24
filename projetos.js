document.addEventListener('DOMContentLoaded', function() {
    const dados = [
        {
            titulo: 'Letras Conscientes!',
            texto: 'Amo compor músicas que falam sobre como evitar bullying.',
            corTexto: 'var(--titulorosa)',
            corFundo: '#FAD2E5',
            img: 'img/microfone.png',
            imgBlob: 'img/blob1.png',
            width: '230px',
            colorBtn: 'var(--titulorosa)',
            corQua: '#FFC2E1',
            flecha: 'var(--titulorosa)'
        },
        {
            titulo: 'A arte do artesanato!',
            texto: 'Gosto muito de fazer artesanatos com materiais recicláveis.',
            corTexto: 'var(--tituloverde)',
            corFundo: '#D3F1BF',
            img: 'img/artesanato.png',
            imgBlob: 'img/blob2.png',
            width: '280px',
            colorBtn:'var(--tituloverde)',
            corQua: '#BADBA4',
            flecha: 'var(--tituloverde)',
        },
        {
            titulo: 'Versos que inspiram!',
            texto: 'Escrevo poesias com o coração que acolhem e inspiram.',
            corTexto: '#753203',
            corFundo: '#FFE7D7',
            img: 'img/pergaminho.png',
            imgBlob: 'img/blob3.png',
            width: '300px',
            colorBtn:'#753203',
            corQua: '#FFDBC1',
            flecha: '#753203',
        },
        // Adicione mais objetos conforme necessário
        // Exemplo: { titulo: 'Novo Título', texto: 'Novo Texto', corTexto: '#XXXXXX', corFundo: '#XXXXXX', img: 'caminho/nova-imagem.jpg', width: 'XXXpx' }
    ];

    let currentIndex = 0;
    const conteudoTitulo = document.querySelector('.conteudo-titulo');
    const tituloElement = conteudoTitulo.querySelector('h2');
    const imgPro = document.querySelector('.main-projeto-img img');
    const magicPattern = document.querySelector('.magicpattern path');
    const mainElement = document.getElementById('meuMain');
    const imgBlob = document.getElementById('blob');
    const btn = document.querySelector('.trocado');
    const btnQua = document.querySelector('#iconn');
    const flecha = document.querySelector('#flecha');

    function updateContent() {
        conteudoTitulo.style.transition = "transform 0.5s, opacity 0.5s";
        mainElement.style.transition = "background 0.5s";
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
            btn.style.backgroundColor = dados[currentIndex].colorBtn;
            flecha.style.color = dados[currentIndex].flecha;
            imgPro.setAttribute('src', dados[currentIndex].img);
            imgBlob.setAttribute('src', dados[currentIndex].imgBlob);
            imgPro.style.width = dados[currentIndex].width; // Defina a largura da imagem dinamicamente
            btnQua.style.backgroundColor = dados[currentIndex].corQua;
            magicPattern.style.fill = '#00FF00';
            mainElement.style.background = dados[currentIndex].corFundo;

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
            mainElement.style.background = '#FAD2E5';
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
