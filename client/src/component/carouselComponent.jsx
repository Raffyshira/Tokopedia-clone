import React from "react";
import Slider from "react-slick";

import { Image } from "@nextui-org/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const MainCarousel = ({ type }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const listCarousel = [
        {
            id: 1,
            image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/22/dc24c6f0-adfb-4457-9ad3-cab425e5d9a4.jpg.webp?ect=4g",
            imageMobile:
                "https://images.tokopedia.net/img/cache/500/VxWOnu/2024/4/22/07cc9491-1b00-4b04-b414-35517e0ba225.jpg"
        },
        {
            id: 2,
            image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/23/9fbeb23f-6f12-4a3c-bda1-5cd51892da67.jpg.webp?ect=4g",
            imageMobile:
                "https://images.tokopedia.net/img/cache/500/VxWOnu/2024/4/23/adb97cdd-f757-4c13-8059-16dde4333221.jpg"
        },
        {
            id: 3,
            image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/24/eefd3912-a7af-4843-a14e-2afc44403223.jpg.webp?ect=4g",
            imageMobile:
                "https://images.tokopedia.net/img/cache/500/VxWOnu/2024/4/19/71cbef35-af5b-493a-a50d-bd3cc8290d9e.jpg"
        },
        {
            id: 4,
            image: "https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/18/a82eb438-d9c9-4399-818a-e5d77cf7884e.jpg.webp?ect=4g",
            imageMobile:
                "https://images.tokopedia.net/img/cache/500/VxWOnu/2024/4/24/cb79ae81-8895-47bb-9211-57eea243b70e.jpg"
        }
    ];
    return (
        <div className="slider-container max-w-full px-0 overflow-hidden">
            <Slider {...settings}>
                {listCarousel.map(item => (
                    <div key={item.id} className="z-50">
                        <Image
                            radius="none"
                            src={item[type]}
                            alt="Main Carousel"
                            className="w-full h-full object-cover z-50"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};
