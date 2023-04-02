import './Carousel.css';


function Carrosel(){
    return(
        <div className='homepagebackground'>
           <section class="carousel" aria-label="Gallery">
            <ol class="carousel__viewport">


                <li id="carousel__slide1"
                    tabindex="0"
                    class="carousel__slide">

                <div class="carousel__snapper">
                    <a href="#carousel__slide10"
                    class="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide2"
                    class="carousel__next">Go to next slide</a>
                </div>
                </li>


                <li id="carousel__slide2"
                    tabindex="0"
                    class="carousel__slide2">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide1"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide3"
                    class="carousel__next">Go to next slide</a>
                </li>


                <li id="carousel__slide3"
                    tabindex="0"
                    class="carousel__slide3">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide2"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide4"
                    class="carousel__next">Go to next slide</a>
                </li>


                <li id="carousel__slide4"
                    tabindex="0"
                    class="carousel__slide4">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide3"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide5"
                    class="carousel__next">Go to next slide</a>
                </li>


                <li id="carousel__slide5"
                    tabindex="0"
                    class="carousel__slide5">
                <div class="carousel__snapper">
                    <a href="#carousel__slide4"
                    class="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide6"
                    class="carousel__next">Go to next slide</a>
                </div>
                </li>


                <li id="carousel__slide6"
                    tabindex="0"
                    class="carousel__slide6">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide5"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide7"
                    class="carousel__next">Go to next slide</a>
                </li>



                <li id="carousel__slide7"
                    tabindex="0"
                    class="carousel__slide7">
                <div class="carousel__snapper">
                    <a href="#carousel__slide6"
                    class="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide8"
                    class="carousel__next">Go to next slide</a>
                </div>
                </li>


                <li id="carousel__slide8"
                    tabindex="0"
                    class="carousel__slide8">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide7"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide9"
                    class="carousel__next">Go to next slide</a>
                </li>



                <li id="carousel__slide9"
                    tabindex="0"
                    class="carousel__slide9">
                <div class="carousel__snapper">
                    <a href="#carousel__slide8"
                    class="carousel__prev">Go to last slide</a>
                    <a href="#carousel__slide10"
                    class="carousel__next">Go to next slide</a>
                </div>
                </li>


                <li id="carousel__slide10"
                    tabindex="0"
                    class="carousel__slide10">
                <div class="carousel__snapper"></div>
                <a href="#carousel__slide9"
                    class="carousel__prev">Go to previous slide</a>
                <a href="#carousel__slide1"
                    class="carousel__next">Go to next slide</a>
                </li>



            </ol>

            <aside class="carousel__navigation">


                <ol class="carousel__navigation-list">
                    
                <li class="carousel__navigation-item">
                    <a href="#carousel__slide1"
                    class="carousel__navigation-button">Go to slide 1</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide2"
                    class="carousel__navigation-button">Go to slide 2</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide3"
                    class="carousel__navigation-button">Go to slide 3</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide4"
                    class="carousel__navigation-button">Go to slide 4</a>
                </li>
                <li class="carousel__navigation-item">
                    <a href="#carousel__slide5"
                    class="carousel__navigation-button">Go to slide 5</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide6"
                    class="carousel__navigation-button">Go to slide 6</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide7"
                    class="carousel__navigation-button">Go to slide 7</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide8"
                    class="carousel__navigation-button">Go to slide 8</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide9"
                    class="carousel__navigation-button">Go to slide 9</a>
                </li>

                <li class="carousel__navigation-item">
                    <a href="#carousel__slide10"
                    class="carousel__navigation-button">Go to slide 10</a>
                </li>

                </ol>


            </aside>
            </section>
        </div>
    )
}
export default Carrosel