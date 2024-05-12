import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
    Button,
    Image,
    Link,
    Divider,
    Breadcrumbs,
    BreadcrumbItem,
    Avatar,
    Accordion,
    AccordionItem
} from "@nextui-org/react";

import {
    NavbarComponent,
    NavUntukMobile
} from "../../component/navbarComponent";
import { ModalDeskripsi, ModalOngkir } from "../../component/ModalComponent";
import {
    TemplateAccordion,
    AccordionBalasan
} from "../../component/AccordionComponent";
import { UserLocation } from "../../component/UserLocation";
import {
    CardProduct,
    CardKeranjang,
    CardBalasan,
    CardFilterUlasan
} from "../../component/CardComponent";
import {
    TabsDetail,
    ProgressStar,
    UrutkanKomentar
} from "../../component/RandomComponent";
import { FooterForMobile } from "../../component/FooterComponent";

import { MenuLogin, MenuPromo, MenuItems } from "../../Data/DataNavbar";

import {
    IoHeartOutline,
    IoStar,
    IoCameraOutline,
    IoChatboxEllipsesOutline,
    IoInformationCircleOutline,
    IoTimeOutline,
    IoCalendarClearOutline,
    IoChevronForward,
    IoLocationSharp,
    IoWarningOutline,
    IoPhonePortraitOutline,
    IoQrCodeOutline,
    IoThumbsUp,
    IoChatbubblesOutline
} from "react-icons/io5";

import { CiStar, CiDeliveryTruck } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductPages = ({ products }) => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFixed, setIsFixed] = useState(true);

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (products && products.length > 0) {
            // Gunakan data produk dari props jika sudah ada
            setProductsData(products);
            setLoading(false);
        } else {
            fetch(`${apiUrl}/v1/api/product`)
                .then(res => res.json())
                .then(data => {
                    if (data && data.getRafi && data.getRafi.data) {
                        setProductsData(data.getRafi.data);
                        setLoading(false);
                    } else {
                        setError("Invalid response format");
                    }
                })
                .catch(error => {
                    setError("Error fetching product data: " + error.message);
                    setLoading(false);
                });
        }
    }, [products]);

    const { name_product } = useParams();
    const product = productsData.find(
        item => item.name_product === name_product
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    // Render produk

    const { price_product, discount, sale } = product;
    const discountedPrice = price_product - price_product * (discount / 100);

    const randomNumber = Math.floor(Math.random() * 200);
    const testimoni = Math.floor(Math.random() * 500);
    const review = Math.floor(Math.random() * 100);
    const ongkir = Math.floor(Math.random() * 32000);
    const ulasan = Math.floor(Math.random() * 50);
    const starRating = Math.floor(Math.random() * 5) + 1;

    const listOngkir = [
        {
            id: 1,
            name: "GTL",
            estimasi: "Estimasi tiba 4 - 8 May",
            price: 53600
        },
        {
            id: 2,
            name: "JNE",
            estimasi: "Estimasi tiba 5 - 7 May",
            price: 58000
        },
        {
            id: 3,
            name: "SiCepat",
            estimasi: "Estimasi tiba 5 - 8 May",
            price: 52200
        },
        {
            id: 4,
            name: "AnterAja",
            estimasi: "Estimasi tiba 5 - 8 May",
            price: 43300
        }
    ];

    const listKargo = [
        {
            id: 1,
            name: "JNE",
            estimasi: "Estimasi tiba 5 - 9 May",
            price: 90000
        },
        {
            id: 2,
            name: "SiCepat Gokil",
            estimasi: "Estimasi tiba 8 - 10 May",
            price: 85000
        }
    ];
    const listEkonomi = [
        {
            id: 1,
            name: "JNE OKE",
            estimasi: "Estimasi tiba 5 - 8 May",
            price: 54000
        },
        {
            id: 2,
            name: "SiCepat HALU",
            estimasi: "Estimasi tiba 5 - 8 May",
            price: 36000
        }
    ];

    return (
        <>
            <NavbarComponent
                DataPromo={MenuPromo}
                DataItems={MenuItems}
                DataLogin={MenuLogin}
                BackgroundColor="bg-white"
                Color="text-black"
            />

            <main className="mt-16">
                {/* For Mobile Device */}
                <section className="md:hidden bg-stone-100">
                    <div>
                        <Image
                            src={product.image_product}
                            alt={product.name_product}
                            loading="lazy"
                            radius="none"
                        />
                    </div>
                    {/* sesi product from price and sale dll START */}
                    <section className="px-4 mt-0  py-3 bg-white">
                        <div className="mb-3 flex items-center">
                            <h1 className="text-xl font-bold">
                                Rp {discountedPrice.toLocaleString()}
                            </h1>
                            <p className="text-sm text-gray-400 ml-1.5 line-through">
                                Rp {product.price_product.toLocaleString()}
                            </p>
                            <p className="ml-1 text-sm text-red-400 font-bold">
                                {product.discount}%
                            </p>
                            <Image
                                src="https://images.tokopedia.net/img/bebas-ongkir-engine/bebas-ongkir/bo-reg-30k.png"
                                className="w-14 ml-1"
                                alt="Bebas Ongkir"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm inline-flex w-72">
                                {product.name_product}
                            </p>
                            <Button isIconOnly color="foreground">
                                <IoHeartOutline className="text-xl" />
                            </Button>
                        </div>
                        <div className="mt-1.5 flex items-center">
                            <p className="text-tiny">Terjual {product.sale}+</p>
                            <Button
                                variant="bordered"
                                className="ml-2 border-gray-200 text-sm"
                                radius="sm"
                                startContent={
                                    <FaStar className="text-yellow-400 text-lg" />
                                }
                                size="sm"
                            >
                                {product.rating}({randomNumber}rb)
                            </Button>
                            <Button
                                color="foreground"
                                variant="bordered"
                                className="text-sm border-gray-200 ml-1.5 "
                                startContent={
                                    <IoCameraOutline className="text-xl" />
                                }
                                size="sm"
                                radius="sm"
                            >
                                {testimoni}
                            </Button>
                            <Button
                                color="foreground"
                                variant="bordered"
                                className="text-sm border-gray-200 ml-1.5 "
                                startContent={
                                    <IoChatboxEllipsesOutline className="text-xl" />
                                }
                                size="sm"
                                radius="sm"
                            >
                                {review}
                            </Button>
                        </div>
                    </section>
                    {/* sesi product from price and sale dll END*/}

                    {/* sesi detail product START*/}
                    <section className="px-4 mt-2 bg-white py-3">
                        <div>
                            <h3 className=" font-bold">Detail Product</h3>
                        </div>

                        <div className="mt-1.5 grid grid-cols-2">
                            <h3 className="text-gray-500">Etalase</h3>
                            <Link
                                className="font-bold text-sm"
                                color="success"
                                href="/"
                            >
                                {product.category}
                            </Link>
                        </div>
                        <Divider className="my-1 bg-gray-100" />
                        <div className="mt-2 grid grid-cols-2">
                            <h3 className="text-gray-500">Kategori</h3>
                            <Breadcrumbs size="sm">
                                <BreadcrumbItem>
                                    <Link
                                        className="font-bold text-sm"
                                        color="success"
                                        href="/"
                                    >
                                        Home
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <Link
                                        className="text-sm font-bold"
                                        color="success"
                                        href="/"
                                    >
                                        Elektornik
                                    </Link>
                                </BreadcrumbItem>
                                <BreadcrumbItem isActive>
                                    <Link
                                        color="success"
                                        className="text-sm font-bold"
                                        href="/"
                                    >
                                        {product.brand}
                                    </Link>
                                </BreadcrumbItem>
                            </Breadcrumbs>
                        </div>

                        <h3 className="mt-3 font-bold">Deskripsi Produk</h3>
                        <div className="mt-3">
                            <p className="line-clamp-3">
                                {product.description}
                            </p>
                            <div className="mt-2">
                                <ModalDeskripsi>
                                    <div className="flex items-end">
                                        <Image
                                            radius="none"
                                            src={product.image_product}
                                            alt={product.name_product}
                                            className="w-24 object-cover"
                                        />
                                        <p className="text-base ml-2 font-bold">
                                            {product.name_product}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <p className="text-gray-500">Kondisi</p>
                                        <p>Baru</p>
                                    </div>
                                    <Divider className="-mt-2 bg-gray-100" />
                                    <div className="grid grid-cols-2">
                                        <p className="text-gray-500">
                                            Berat Satuan
                                        </p>
                                        <p>{testimoni}g</p>
                                    </div>
                                    <Divider className="-mt-2 bg-gray-100" />
                                    <div className="grid grid-cols-2">
                                        <p className="text-gray-500">
                                            Min. Pemesanan
                                        </p>
                                        <p>1 Buah</p>
                                    </div>
                                    <Divider className="-mt-2 bg-gray-100" />
                                    <div className="grid grid-cols-2">
                                        <p className="text-gray-500">
                                            Kategori
                                        </p>
                                        <Link href="/" color="success">
                                            <p className="font-bold">
                                                {product.category}
                                            </p>
                                        </Link>
                                    </div>
                                    <Divider className="-mt-2 bg-gray-100" />
                                    <div className="grid grid-cols-2">
                                        <p className="text-gray-500">Merek</p>
                                        <p>{product.brand}</p>
                                    </div>
                                    <TemplateAccordion
                                        title="Deskripsi Produk"
                                        label="Deskripsi Produk"
                                    >
                                        <p className="text-base">
                                            {product.description}
                                        </p>
                                    </TemplateAccordion>
                                    <TemplateAccordion
                                        title="Informasi Penting"
                                        label="Informasi Penting"
                                    >
                                        <ul>
                                            <li>
                                                commodo cupidatat irure est
                                                tempor non voluptate sint esse
                                                do
                                            </li>
                                        </ul>
                                    </TemplateAccordion>
                                </ModalDeskripsi>
                            </div>
                        </div>
                    </section>
                    {/* sesi detail product END*/}

                    {/* sesi nameshop product START*/}
                    <section className="px-4 mt-2 py-3 bg-white">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image
                                    src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                    className="w-14 h-14 rounded-full"
                                    alt={product.brand}
                                />
                            </Link>
                            <div className="ml-2">
                                <p className="text-base font-bold inline-flex items-center">
                                    <span>
                                        <Image
                                            src="https://images.tokopedia.net/img/official_store/badge_os.png"
                                            alt="official_store"
                                            className="w-4 h-4"
                                        />
                                    </span>
                                    {product.brand} Official Store
                                </p>
                                <p className="text-sm text-gray-500">
                                    Online{" "}
                                    <span className="font-bold">
                                        6 Menit Lalu
                                    </span>
                                </p>
                                <p className="text-sm text-gray-500 inline-flex items-center">
                                    Kab.{product.lokasi}(+1 Lokasi)
                                    <IoInformationCircleOutline className="text-lg" />
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-2 px-1">
                            <div>
                                <p className="inline-flex items-center">
                                    <CiStar className="text-base mr-2.5" />
                                    {product.rating}
                                    <span className="text-sm ml-1 text-gray-400">
                                        {" "}
                                        rata-rata ulasan
                                    </span>
                                </p>
                                <p className="flex items-center">
                                    <IoTimeOutline className="text-base mr-2.5" />{" "}
                                    ±{review} menit{" "}
                                    <span className="text-sm text-gray-400 ml-1">
                                        pesanan diproses
                                    </span>
                                </p>
                            </div>
                            <Button
                                variant="bordered"
                                radius="sm"
                                color="success"
                                className="font-bold"
                            >
                                Follow
                            </Button>
                        </div>
                    </section>
                    {/* sesi nameshop product END*/}

                    {/* SESI DETAIL PENGIRIMAN START*/}
                    <section className="mt-2 py-3 bg-white px-5">
                        <ModalOngkir
                            size="full"
                            header="Detail Pengiriman"
                            placement="bottom"
                            options={
                                <div className="flex justify-between items-center  ">
                                    <div>
                                        <h3 className="font-bold inline-flex items-center">
                                            <span className="mr-1">
                                                <Image
                                                    src="https://images.tokopedia.net/img/restriction-engine/bebas-ongkir/DilayaniTokopedia_Icon.png"
                                                    alt="Free Shipping"
                                                    loading="lazy"
                                                    className="w-4 h-4"
                                                />
                                            </span>
                                            Dilayani Tokopedia Rp.
                                            {ongkir.toLocaleString()}{" "}
                                        </h3>
                                        <p className="inline-flex items-center text-sm text-gray-500">
                                            <IoCalendarClearOutline className="text-gray-400 mr-1.5" />{" "}
                                            Bisa COD • Estimasi tiba 4 - 7 Mei
                                        </p>
                                        <p className="inline-flex items-center text-sm text-gray-500">
                                            <CiDeliveryTruck className="mr-1.5 text-gray-500" />{" "}
                                            Pilihan lainnya: Instan
                                        </p>
                                    </div>
                                    <Button
                                        color="foreground"
                                        isIconOnly
                                        as={Link}
                                        href="/"
                                        className="ml-auto"
                                    >
                                        <IoChevronForward className="text-lg text-black" />
                                    </Button>
                                </div>
                            }
                        >
                            <div className="border border-black p-4 rounded-lg">
                                <div className="flex items-start">
                                    <Image
                                        src="https://images.tokopedia.net/img/restriction-engine/bebas-ongkir/DilayaniTokopedia_Icon.png"
                                        className="w-4 h-4 object-cover mr-4"
                                        alt="free Shipping"
                                        loading="lazy"
                                    />
                                    <div className="-mt-1">
                                        <h3 className="text-base font-bold">
                                            Dilayani Tokopedia
                                        </h3>
                                        <Link href="#!">
                                            <p className="text-sm text-gray-500">
                                                Barang dikirim dari penyimpanan
                                                Tokopedia terdekat. Gratis tanpa
                                                batas & lebih cepat.{" "}
                                                <span>
                                                    <Link
                                                        href="#!"
                                                        className="text-sm"
                                                        color="success"
                                                    >
                                                        Pelajari
                                                    </Link>
                                                </span>
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center md:hidden">
                                    <IoLocationSharp className="text-green-600 text-sm" />
                                    <p className="text-xs ml-1">Dikirim Ke</p>
                                    <div className="-ml-3">
                                        <UserLocation
                                            size="5xl"
                                            placement="bottom"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold">
                                    Simulasi Pengiriman
                                </h3>
                                <p className="text-sm font-bold mt-2">
                                    <span className="text-gray-500 font-normal">
                                        Berat Satuan :
                                    </span>{" "}
                                    {testimoni}gram
                                </p>
                                <p className="text-sm text-gray-500">
                                    Total ongkir akhir akan dihitung saat
                                    checkout.
                                </p>
                            </div>
                            <Divider className="-mb-1 bg-gray-100" />
                            <p className="font-bold text-sm">Instant 3 Jam</p>
                            <Divider className="-mt-1 bg-gray-100" />
                            <div>
                                <div>
                                    <h3 className="font-semibold text-sm">
                                        Regular
                                    </h3>
                                    <ul className="list-disc list-outside mt-2 ml-3.5">
                                        {listOngkir.map(item => (
                                            <li>
                                                <div className="flex justify-between mt-2">
                                                    <div>
                                                        <p className="text-sm">
                                                            {item.name}
                                                        </p>

                                                        <p className="text-xs text-gray-500">
                                                            {item.estimasi}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm">
                                                        Rp.
                                                        {item.price.toLocaleString()}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-semibold text-sm">
                                        Kargo
                                    </h3>
                                    <ul className="list-disc list-outside mt-2 ml-3.5">
                                        {listKargo.map(item => (
                                            <li>
                                                <div className="flex justify-between mt-2">
                                                    <div>
                                                        <p className="text-sm">
                                                            {item.name}
                                                        </p>

                                                        <p className="text-xs text-gray-500">
                                                            {item.estimasi}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm">
                                                        Rp.
                                                        {item.price.toLocaleString()}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-3">
                                    <h3 className="font-semibold text-sm">
                                        Ekonomi
                                    </h3>
                                    <ul className="list-disc list-outside mt-2 ml-3.5">
                                        {listEkonomi.map(item => (
                                            <li>
                                                <div className="flex justify-between mt-2">
                                                    <div>
                                                        <p className="text-sm">
                                                            {item.name}
                                                        </p>

                                                        <p className="text-xs text-gray-500">
                                                            {item.estimasi}
                                                        </p>
                                                    </div>
                                                    <p className="text-sm">
                                                        Rp.
                                                        {item.price.toLocaleString()}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ModalOngkir>
                    </section>
                    {/* SESI REKOMENDASI DARI TOKO START*/}
                    <section className="px-4 mt-2 bg-white py-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">Lainnya di toko ini</h3>
                            <Link
                                className="text-sm font-semibold"
                                color="success"
                                href="#!"
                            >
                                Lihat semua
                            </Link>
                        </div>
                        <div className="">
                            <CardProduct
                                className="w-36 h-fit shrink-0"
                                products={productsData.slice(0,4)}
                                variant="flex overflow-x-scroll gap-x-3 mt-3 scrollbar p-0"
                            />
                        </div>
                    </section>
                    {/*SESI REKOMENDASI DARI TOKO END*/}

                    {/*SESI ULASAN DARI PEMBELI START*/}
                    <section className="px-4 mt-2 py-3 bg-white">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">Ulasan pembeli</h3>
                            <Link
                                className="text-sm font-semibold"
                                color="success"
                                href="#!"
                            >
                                Lihat semua
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="text-lg text-yellow-400 font-normal mr-1" />
                            <p className="font-bold text-sm">
                                {product.rating}
                            </p>
                            <p className="text-sm text-gray-400 ml-2">
                                {review} rating •
                            </p>
                            <p className="text-sm text-gray-400 ml-2">
                                {testimoni} ulasan
                            </p>
                        </div>
                        <div className="flex items-center mt-3 gap-x-3">
                            <Button
                                radius="full"
                                variant="bordered"
                                className="border-gray-300 text-gray-500"
                            >
                                Kualitas Barang ({ulasan})
                            </Button>
                            <Button
                                radius="full"
                                variant="bordered"
                                className="border-gray-300 text-gray-500"
                            >
                                Sesuai Deskripsi ({review})
                            </Button>
                        </div>
                        <div className="flex overflow-x-scroll gap-x-2 mt-3 scrollbar">
                            {Array.from({ length: 5 }, (_, index) => (
                                <div className="shrink-0">
                                    <Image
                                        src="https://placehold.co/600x400"
                                        alt="..."
                                        className="w-24 h-24 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="mt-3">
                            <div className="flex items-center">
                                <Avatar
                                    size="sm"
                                    src="https://images.tokopedia.net/img/cache/100-square/tPxBYm/2023/1/20/0c372e2a-77da-496f-96c9-a453b449f85d.jpg"
                                    className="mr-2"
                                />
                                <div>
                                    <h5 className="font-medium">
                                        Rudi •
                                        <span className="text-green-500 font-normal ml-0.5">
                                            Juara Ulasan
                                        </span>
                                    </h5>
                                    <p className="text-sm text-gray-500">
                                        {ulasan} ulasan lengkap • {review}{" "}
                                        terbantu
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mt-1.5">
                                {Array.from(
                                    { length: starRating },
                                    (_, index) => (
                                        <div key={index} className="mr-1">
                                            <FaStar className="text-yellow-400 text-sm" />
                                        </div>
                                    )
                                )}
                                <p className="text-sm">2 Minggu lalu</p>
                            </div>
                            <div className="mt-2">
                                <p className="text-base">
                                    Alhamdulillah barang sdh sampai sesuai
                                    pesanan.. semuanya OK
                                </p>
                            </div>
                        </div>
                    </section>
                    {/*SESI ULASAN DARI PEMBELI END*/}

                    {/* SESI LAPORAN MASALAH PRODUCT START*/}
                    <section className="px-4 mt-2 py-3 bg-white">
                        <div className="flex items-center">
                            <IoWarningOutline className="text-lg mr-2" />
                            <p className="text-sm">
                                Produk bermasalah ?
                                <span className="ml-1">
                                    <Link
                                        className="text-sm"
                                        color="success"
                                        href="#!"
                                    >
                                        Laporkan
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </section>
                    {/*SESI LAPORAN MASALAH PRODUCT END*/}
                    <FooterForMobile />
                    <NavUntukMobile />
                </section>
                {/* For Desktop Device */}
                <section className="hidden md:block p-3">
                    <Breadcrumbs>
                        <BreadcrumbItem>
                            <Link
                                className="text-base font-normal"
                                color="success"
                                href="/"
                            >
                                Home
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link
                                color="success"
                                className="font-normal text-base"
                                href="/"
                            >
                                {product.category}
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Link
                                color="foreground"
                                className="text-base font-normal"
                                href="#!"
                            >
                                <p>{product.name_product}</p>
                            </Link>
                        </BreadcrumbItem>
                    </Breadcrumbs>
                    <div className="mt-5 grid grid-cols-3">
                        <section>
                            <div className="relative">
                                <Image
                                    src={product.image_product}
                                    alt={product.name_product}
                                    loading="lazy"
                                    radius="sm"
                                    className="w-72"
                                />
                            </div>
                        </section>
                        <section className="flex flex-col overflow-y-scroll">
                            <div>
                                <h4 className="text-xl font-semibold">
                                    {product.name_product}
                                </h4>
                                <div className="flex items-center mt-2 gap-x-3">
                                    <p className="text-sm">
                                        Terjual {product.sale}+
                                    </p>
                                    <p className="inline-flex items-center text-sm">
                                        <FaStar className="text-yellow-400 mr-1" />{" "}
                                        {product.rating} ({review} rating)
                                    </p>
                                    <p className="text-sm">
                                        Diskusi ({ulasan})
                                    </p>
                                </div>
                                <div className="mt-2">
                                    <h4 className="text-2xl font-bold">
                                        Rp.
                                        {discountedPrice.toLocaleString()}
                                    </h4>
                                    <div className="flex items-center gap-x-2 mt-1">
                                        <p className="bg-red-100 w-fit p-1 rounded-md text-red-500 font-bold text-sm">
                                            {product.discount}%
                                        </p>
                                        <p className="text-sm line-through text-gray-400">
                                            Rp.
                                            {product.price_product.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Divider className="my-3" />
                            <div className="">
                                <TabsDetail product={product} />
                            </div>
                            <Divider className="my-3" />
                            <div>
                                <div className="flex items-start">
                                    <Link href="/">
                                        <Image
                                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            className="w-10 h-10 rounded-full object-cover"
                                            alt={product.brand}
                                        />
                                    </Link>
                                    <div className="ml-2 w-full">
                                        <p className="text-base font-bold inline-flex items-center">
                                            <span>
                                                <Image
                                                    src="https://images.tokopedia.net/img/official_store/badge_os.png"
                                                    alt="official_store"
                                                    className="w-4 h-4"
                                                />
                                            </span>
                                            {product.brand} Official Store
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Online{" "}
                                            <span className="font-bold">
                                                6 Menit Lalu
                                            </span>
                                        </p>
                                        <Button
                                            size="sm"
                                            color="success"
                                            variant="bordered"
                                            radius="sm"
                                            className="w-full mt-2 font-bold"
                                        >
                                            Follow
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2 px-1">
                                    <div>
                                        <p className="inline-flex items-center">
                                            <CiStar className="text-base mr-2.5" />
                                            {product.rating}
                                            <span className="text-sm ml-1 text-gray-400">
                                                {" "}
                                                rata-rata ulasan
                                            </span>
                                        </p>
                                        <p className="flex items-center">
                                            <IoTimeOutline className="text-base mr-2.5" />{" "}
                                            ±{review} menit{" "}
                                            <span className="text-sm text-gray-400 ml-1">
                                                pesanan diproses
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Divider className="my-3" />
                            <div>
                                <h3 className="font-bold">Pengiriman</h3>
                                <div className="flex items-center">
                                    <IoLocationSharp className="text-green-600 text-lg" />
                                    <p className="text-xs ml-1">Dikirim Ke</p>
                                    <div className="-ml-3">
                                        <UserLocation
                                            placement="center"
                                            size="3xl"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-start gap-x-1">
                                    <CiDeliveryTruck className="text-lg" />
                                    <div>
                                        <p className="text-sm">
                                            Ongkir Reguler 23 rb - 26,1 rb
                                        </p>
                                        <p className="text-sm">
                                            Estimasi tiba 7 - 11 Mei
                                        </p>
                                        <div className="flex justify-between items-center gap-x-4 mt-2">
                                            <p className="text-sm">
                                                Kurir lainnya: COD
                                            </p>
                                            <ModalOngkir
                                                options={
                                                    <p className="text-sm text-green-500 font-bold">
                                                        Lihat Pilihan Ongkir
                                                    </p>
                                                }
                                            >
                                                Lagi males nulis nanti
                                                kebanyakan code :(
                                            </ModalOngkir>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Divider className="my-3" />
                            <div>
                                <h3 className="font-bold">
                                    Beli di aplikasi, Makin banyak promo!
                                </h3>
                                <div className="mt-3 flex items-start gap-x-2">
                                    <div>
                                        <IoPhonePortraitOutline className="text-green-500 text-xl" />
                                    </div>
                                    <p className="text-sm">
                                        Scan QR-nya untuk lihat barang ini di
                                        aplikasi Tokopedia. Bebas ongkir, lho~
                                    </p>
                                    <Button
                                        variant="bordered"
                                        color="foreground"
                                        size="sm"
                                    >
                                        Scan QR
                                    </Button>
                                </div>
                            </div>
                            <Divider className="my-3" />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <IoWarningOutline className="text-lg mr-2" />
                                    <p className="text-sm">
                                        Produk bermasalah ?
                                    </p>
                                </div>
                                <Link
                                    className="text-sm"
                                    color="success"
                                    href="#!"
                                >
                                    Laporkan
                                </Link>
                            </div>
                            <Divider className="my-3" />
                        </section>

                        <section>
                            <div className="flex justify-center px-5 ">
                                <CardKeranjang product={product} />
                            </div>
                        </section>
                    </div>

                    <section className="mt-16">
                        <div className="grid grid-cols-3">
                            <section className="col-span-1">
                                <h3 className="uppercase font-bold">
                                    Ulasan Pembeli
                                </h3>
                                <div className="flex items-center justify-center w-full mt-4">
                                    <FaStar className="text-3xl text-yellow-400 mr-3" />
                                    <p className="text-6xl">
                                        {product.rating}
                                        <span className="text-xl text-gray-400 ">
                                            /5.0
                                        </span>
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center items-center  mt-4">
                                    <p className="inline-flex items-center font-bold">
                                        94% pembeli merasa puas{" "}
                                        <IoInformationCircleOutline />
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        {review} ulasan • {ulasan} ulasan
                                    </p>
                                </div>
                                <div className="flex flex-col-reverse gap-y-3 mt-5 justify-center items-center ">
                                    <ProgressStar />
                                </div>
                                <div className="mt-10 px-5">
                                    <CardFilterUlasan />
                                </div>
                            </section>
                            <section>
                                <h3 className="uppercase font-bold">
                                    Foto & Video Pembeli
                                </h3>
                                <div className="flex overflow-x-scroll gap-x-2 mt-3 scrollbar">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <div className="shrink-0">
                                            <Image
                                                src="https://placehold.co/600x400"
                                                alt="..."
                                                className="w-20 h-20 object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <h3 className="uppercase font-bold">
                                        Ulasan Pilihan
                                    </h3>
                                    <div className="flex flex-col">
                                        <p className="text-sm">
                                            Menampilkan 10 dari 40 ulasan
                                        </p>
                                        <div className="mt-4">
                                            {" "}
                                            <UrutkanKomentar />
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-full">
                                    <div className="mt-5">
                                        <div className="flex gap-x-1">
                                            {Array.from(
                                                { length: 5 },
                                                (_, index) => (
                                                    <FaStar className="text-yellow-400" />
                                                )
                                            )}
                                            <p className="text-sm text-gray-400 ml-2">
                                                1 Minggu Lalu
                                            </p>
                                        </div>
                                        {Array.from(
                                            { length: 3 },
                                            (_, index) => (
                                                <div className="mt-5">
                                                    {" "}
                                                    <div className="w-full flex items-center mt-2">
                                                        <Avatar
                                                            size="sm"
                                                            src="https://images.tokopedia.net/img/cache/100-square/tPxBYm/2023/1/20/0c372e2a-77da-496f-96c9-a453b449f85d.jpg"
                                                            className="mr-2"
                                                        />
                                                        <h4 className="font-bold">
                                                            Rudi
                                                        </h4>
                                                    </div>
                                                    <div>
                                                        <p className="mb-3 mt-2 text-sm text-gray-500">
                                                            Variant :{" "}
                                                        </p>
                                                        <p>
                                                            Alhamdulillah barang
                                                            sdh sampai sesuai
                                                            pesanan.. semuanya
                                                            OK
                                                        </p>
                                                        <div className="w-full flex flex-col mt-5 justify-between">
                                                            <Link
                                                                href="#!"
                                                                color="foreground"
                                                                className="inline-flex items-center"
                                                            >
                                                                <IoThumbsUp className="text-sm mr-1.5" />
                                                                Membantu
                                                            </Link>
                                                            <AccordionBalasan title="Lihat balasan">
                                                                <CardBalasan
                                                                    product={
                                                                        product
                                                                    }
                                                                />
                                                            </AccordionBalasan>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </section>
                <section className="max-w-full px-5 hidden md:block w-full mt-16">
                    <div>
                        <h1 className="text-xl font-bold">Diskusi(0)</h1>
                        <p className="text-gray-500">{product.name_product}</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <div className="flex justify-between items-center w-[38rem] mt-5 border border-gray-500 p-3 rounded-lg">
                                <div className="flex items-center gap-x-5">
                                    <IoChatbubblesOutline className="text-3xl" />
                                    <p className="w-80">
                                        Ada pertanyaan? Diskusikan dengan
                                        penjual atau pengguna lain
                                    </p>
                                </div>
                                <Button
                                    className="font-bold text-white"
                                    color="success"
                                    radius="sm"
                                >
                                    Tulis Pernyataan
                                </Button>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center mt-10">
                                <Image
                                    src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/42b1f63a.svg"
                                    alt="Tidak ada Diskusi"
                                    loading="lazy"
                                />
                                <h3 className="text-2xl mt-5 font-bold">
                                    Tidak Ada Diskusi
                                </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProductPages;
