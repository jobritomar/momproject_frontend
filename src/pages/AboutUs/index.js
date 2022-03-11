import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { ROUTES } from "../../router"

import _4 from "../../images/4.jpeg"
import _5 from "../../images/5.jpeg"
import _6 from "../../images/6.jpeg"
import _7 from "../../images/7.jpeg"
import _10 from "../../images/10.jpeg"
import _11 from "../../images/11.jpeg"
import _13 from "../../images/13.jpeg"
import _15 from "../../images/15.jpeg"
import _16 from "../../images/16.jpeg"
import _17 from "../../images/17.jpeg"

const images = [
_4,
_5,
_6,
_7,
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

                            <p class="p-large"> Este site é destinado à divulgação do projeto "Culinária Inclusiva" do grupo de Educação Especial do Agrupamento de Escolas Morgado de Mateus. Pretende-se diviulgar os produtos confeccionados pelos alunos no intuito de arrecadação de fundos para atividades. A culinária estimula a independência, a motricidade fina e a atençâo. Vamos apoiar estes pequenos grandes cozinheiros!</p>

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