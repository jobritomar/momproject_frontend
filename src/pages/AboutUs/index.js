const AboutUs = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4"> About this project </h1>

            <div>
                <h2> How this project was born?</h2>
                <p>
                    O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                    O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
                    Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.
                    Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                </p>
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i0.statig.com.br/bancodeimagens/br/4j/48/br4j4845bvi3ygylo5wnhk84v.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>





        </div>)
}

export default AboutUs