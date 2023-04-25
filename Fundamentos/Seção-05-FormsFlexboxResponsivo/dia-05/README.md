Descrição dos exercícios:

1. index.html style.css:
    A primeira div só poderá aparecer se nossa tela possuir largura mínima de 500px.
    A segunda div só poderá aparecer se a largura estiver entre 600px e 1000px.
    A terceira div não deverá aparecer se nossa tela possuir largura entre 650px e 950px.
    Sem alterar a classe trick, faça com que o texto dela apareça somente quando a tela estiver com menos de 500px de largura.

2. small-screen.html small-screen.css:
    Faça o tamanho da fonte ser maior;
    Faça o tamanho da fonte dos elementos h1 e h2 serem menores;
    Aumente o espaçamento entre as figuras;
    Adicione um pouco de margin na página.

    Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso, podemos consultar a tabela acima e utilizar o min-width: 768px e quando estivermos em telas menores que 768px, esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?
    Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.
    Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);
    Ajuste o tamanho da fonte;
    Ajuste as margens da página;
    Faça as imagens serem mostradas em duas colunas.
    Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso, você pode consultar novamente a tabela com os tamanhos.
    Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):
    Altere a cor de fundo;
    Ajuste o tamanho da fonte;
    Ajuste as margens da página;
    Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.