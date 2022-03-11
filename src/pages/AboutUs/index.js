import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ROUTES } from "../../router"

import _1 from "../../images/1.jpeg"
import _3 from "../../images/3.jpeg"
import _4 from "../../images/4.jpeg"
import _5 from "../../images/5.jpeg"
import _6 from "../../images/6.jpeg"
import _7 from "../../images/7.jpeg"
import _9 from "../../images/9.jpeg"
import _10 from "../../images/10.jpeg"
import _11 from "../../images/11.jpeg"
import _13 from "../../images/13.jpeg"
import _15 from "../../images/15.jpeg"
import _16 from "../../images/16.jpeg"
import _17 from "../../images/17.jpeg"

const images = [
_1,
_3,
_4,
_5,
_6,
_7,
_9,
_10,
_11,
_13,
_15,
_16,
_17,
]

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
                            {
                                images.map(img => (
                                    <div class="swiper-slide">
                                        <img class="img-fluid" src={img} alt="p"/>
                                    </div>
                                ))
                            }
                        </Carousel>

                    </div>
                </div>
            </div>

        </div>










    </>)
}




export default AboutUs