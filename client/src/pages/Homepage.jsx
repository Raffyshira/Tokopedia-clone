import React, { useState, useEffect } from "react";

import { MainCarousel } from "../component/carouselComponent";
import { NavbarComponent } from "../component/navbarComponent";
import { UserLocation } from "../component/UserLocation";
import Countdown from "../component/countdown";
import { CardDiskon, CardProduct, CardTopUp } from "../component/CardComponent";
import { TabsHomepage, KategoriPilihan } from "../component/RandomComponent";

import { Image, Button, Avatar, Link, Card } from "@nextui-org/react";

import DataShortcut from "../Data/DataShortcut";

import { IoChevronForward, IoLocationSharp } from "react-icons/io5";

import { MenuLogin, MenuPromo, MenuItems } from "../Data/DataNavbar";

const Homepage = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const endTime = new Date("2024-05-15");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${apiUrl}/v1/api/product`)
            .then(res => res.json())
            .then(data => {
                if (data && data.getRafi && data.getRafi.data) {
                    setProducts(data.getRafi.data);
                    setLoading(false); // Set loading menjadi false setelah data diterima
                } else {
                    alert("Invalid response format");
                    setLoading(false); // Set loading menjadi false karena terjadi kesalahan
                }
            })
            .catch(error => {
                alert("Error fetching product data:", error);
                setLoading(false); // Set loading menjadi false karena terjadi kesalahan
            });
    }, []);

    const renderShortcuts = (start, end) => {
        return DataShortcut.slice(start, end).map(item => {
            return (
                <div
                    className="w-14 shrink-0 flex flex-col items-center"
                    key={item.id}
                >
                    <Link item={item} href={item.link}>
                        <Image
                            className="w-full h-full"
                            src={item.image}
                            alt={item.name}
                        />
                    </Link>
                    <span className="text-tiny text-center">{item.name}</span>
                </div>
            );
        });
    };
    const renderDesktop = (start, end) => {
        return DataShortcut.slice(start, end).map(item => {
            return (
                <div className="w-28 shrink-0 flex" key={item.id}>
                    <Button
                        variant="bordered"
                        className="border border-black"
                        size="sm"
                        radius="full"
                        item={item}
                        asLink
                        href={item.link}
                        startContent={
                            <Image
                                className="w-full"
                                src={item.image}
                                alt={item.name}
                            />
                        }
                    >
                        <p className="text-xs">{item.name}</p>
                    </Button>
                </div>
            );
        });
    };

    const listShortcut1 = renderShortcuts(0, 9);
    const listShortcut2 = renderShortcuts(9, 20);
    const listShortcut3 = renderDesktop(0, 10);

    return (
        <>
            <NavbarComponent
                DataItems={MenuItems}
                DataLogin={MenuLogin}
                BackgroundColor="bg-white"
                Color="text-black"
            />
            <main className="mt-14">
                <section className="px-5 py-2 ">
                    <div className="flex items-center md:hidden">
                        <IoLocationSharp className="text-green-600 text-sm" />
                        <p className="text-xs ml-1">Dikirim Ke</p>
                        <div className="-ml-3">
                            <UserLocation />
                        </div>
                    </div>
                    <div className="flex items-center justify-between md:hidden">
                        <div className="flex">
                            <Link href="/post-product">
                                <Avatar
                                    className="w-8 h-8 "
                                    src="https://images.tokopedia.net/img/home/login_widget/toped_login.png?ect=4g"
                                />
                            </Link>
                            <div className="ml-2">
                                <p className="text-sm font-bold">
                                    Hai, Trooper
                                </p>
                                <p className="text-tiny font-light">
                                    Akses semua fitur, yuk~
                                </p>
                            </div>
                        </div>
                        <Button
                            color="success"
                            size="sm"
                            radius="sm"
                            className="px-4 text-white font-bold"
                            as={Link}
                            href="/login"
                        >
                            Masuk
                        </Button>
                    </div>
                </section>
                <div className="md:hidden">
                    <MainCarousel type="imageMobile" />
                </div>
                <div className="hidden md:block">
                    <MainCarousel type="image" />
                </div>

                <section className="px-5 overflow-y-scroll scrollbar md:hidden">
                    <div className="flex gap-x-5">{listShortcut1}</div>
                    <div className="flex gap-x-5 mt-1.5">{listShortcut2}</div>
                </section>

                <section className="p-5">
                    <Card radius="sm" shadow="sm" className="p-4">
                        <div className="md:grid md:grid-cols-2 hidden md:block">
                            <div className="col-span-1">
                                <h3 className="text-xl font-bold">
                                    Kategori Pilihan
                                </h3>
                                <KategoriPilihan />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Top Up & Tagihan
                                </h3>
                                <div className="mt-3">
                                    <CardTopUp />
                                </div>
                            </div>
                        </div>
                        <div className="flex overflow-x-scroll gap-x-5 scrollbar mt-5">
                            {listShortcut3}
                        </div>
                    </Card>
                </section>

                <section className="">
                    <div className="flex justify-between items-center p-5">
                        <div>
                            <h1 className="text-lg font-bold">
                                Kejar Diskon Spesial
                            </h1>
                            <p className="text-tiny font-light inline-flex items-center">
                                Berakhir dalam
                                <span className="ml-1">
                                    <Countdown endTime={endTime} />
                                </span>
                            </p>
                        </div>
                        <Button
                            isIconOnly
                            as={Link}
                            href="/"
                            variant="bordered"
                            radius="full"
                            className="border-gray-200"
                        >
                            <IoChevronForward />
                        </Button>
                    </div>

                    <div className="flex overflow-x-scroll gap-x-2 scrollbar items-start bg-teal-200 items-start py-2">
                        <div className="shrink-0 ">
                            <Image
                                src="https://images.tokopedia.net/img/cache/240/zssuBf/2024/4/17/eebfd86a-af47-4d6a-87ca-7b90cc9b009e.png.webp"
                                alt="..."
                                className="w-32 h-48 object-cover"
                            />
                        </div>

                        <CardDiskon products={products} />
                    </div>
                </section>
                <section className="p-2">
                    <h3 className="font-bold">Berdasarkan Pencarianmu</h3>
                    <div className="mt-4 flex overflow-x-scroll   scrollbar">
                        {" "}
                        <CardProduct
                            className="w-36 h-fit"
                            variant="flex"
                            products={products.slice(0, 4)}
                        />
                    </div>
                </section>
                <section>
                    <TabsHomepage products={products} />
                </section>
            </main>
        </>
    );
};

export default Homepage;
