import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css'


const Carousel = () => {



    return (
        <div className="container">
            <OwlCarousel
                className="owl-theme "
                loop
                margin={10}
                nav
                autoplay

            >
                <div className="item">
                    <img className="img-fluid" src="https://i.ibb.co/0FySv6j/71-BIST0z-IBL.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/yBwMyBn/9789506442279-png.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/zSCg1qZ/412-JSB73-D2-L-SX314-BO1-204-203-200.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/zfv9Zs7/portada-el-hobbit-j-r-r-tolkien-201505211338.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/1J6MWXC/91-Q5d-Cjc2-KL.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/z8rrdqT/81s5gr8zna-L.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/gdtr8jn/ERH31764.jpg" alt="" />

                </div>
                <div className="item">
                    <img src="https://i.ibb.co/s264rnx/libro-don-quijote-de-la-mancha-miguel-de-cervantes-tapa-dura-D-NQ-NP-822331-MLA27004045942-032018-F.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/GxWVwKM/9789504970064-png.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/4Vd2fVF/51n-Oqxo0-Gv-L-SX328-BO1-204-203-200.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/vXCsh5k/libro-1360114364.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/fxwKr8F/9789878304151-png.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/JBBByKd/libro-1322161062.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/BPd9b9d/perfume-cke.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/ZhHKJn4/Tiburo-n.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/27FVW7L/descargar-libro-lo-que-el-viento-se-llevo-en-pdf-epub-mobi-o-leer-online.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/j62dBSB/83630-139613-muse13-584-888-20160812190004-La-Vanguardia-Web.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/82fGM6s/9786124758157.jpg" alt="" />
                </div>
                <div className="item">
                    <img src="https://i.ibb.co/pxSJxjD/9788491049616-png.jpg" alt="" />
                </div>



            </OwlCarousel>
        </div>
    );
}

export default Carousel;