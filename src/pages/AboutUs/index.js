import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ROUTES } from "../../router"


const AboutUs = (props) => {
    return (<>


        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-container">
                            <div class="countdown">
                                <span id="clock"></span>
                            </div>
                            <div>
                                <div class="py-5">
                                    <h1 class="display-3 fw-bold text-white">Mom Project</h1>

                                </div>
                            </div>

                            <p class="p-large">Do you feel like you're doing a lot of guess work when it comes to SEO for your website? Take the SEO training course to change that
                                O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.
                                O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro.
                                Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada.
                                Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                            </p>

                            <div class="head-btn" >

                            <button type="button" onClick={() => {window.location.assign(ROUTES.products)}} className="btn btn-outline-warning btn-lg">See our products</button>
            

                        </div>
                    </div>
                </div>
            </div>

            </div>


        </header>



        <div class="outer-container">
            <div class="slider-container">
                <div class="swiper-container image-slider-1">
                    <div class="swiper-wrapper">
                        <Carousel autoPlay={true}>
                            <div class="swiper-slide">
                                <img class="img-fluid" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*" alt="1"/>
                            </div>
                            <div class="swiper-slide">
                                <img src="https://i0.statig.com.br/bancodeimagens/br/4j/48/br4j4845bvi3ygylo5wnhk84v.jpg" alt="2" />
                            </div>
                            <div class="swiper-slide">
                                <img src="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png" alt="3"/>
                            </div>
                        </Carousel>

                    </div>
                </div>
            </div>

        </div>










    </>)
}




export default AboutUs