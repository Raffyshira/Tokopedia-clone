import React, { useEffect, useState } from "react";
import {
    Tabs,
    Tab,
    Divider,
    Progress,
    Select,
    SelectItem,
    Input,
    Button,
    Image
} from "@nextui-org/react";

import { CardProduct } from "./CardComponent";
import { ModalOngkir } from "./ModalComponent";

import { FaStar } from "react-icons/fa";
import {
    IoArrowBackCircleOutline,
    IoArrowForwardCircleOutline
} from "react-icons/io5";

export const TabsDetail = ({ product }) => {
    return (
        <>
            <Tabs
                color="success"
                size="lg"
                variant="underlined"
                aria-label="Options"
            >
                <Tab
                    key="detail"
                    title={<div className="font-bold">Detail</div>}
                >
                    <div className="ml-2">
                        <p className="text-sm text-gray-400">
                            Kondisi: <span className="text-black">Baru</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Min.Pemesanan:{" "}
                            <span className="text-black">1 Buah</span>
                        </p>
                        <p className="text-sm text-gray-400">
                            Etalasa:{" "}
                            <span className="text-green-500 font-semibold">
                                {product.category}
                            </span>
                        </p>
                        <div className="mt-4">
                            <p className="line-clamp-5 text-sm">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </Tab>
                <Tab
                    key="infopenting"
                    title={<div className="font-bold">Info Penting</div>}
                >
                    <div>
                        <h3 className="font-bold  uppercase">Notes</h3>
                        <p className="line-clamp-2">
                            UNTUK BARANG READY,BISA LANGSUNG DI CHECKOUT APABILA
                            ADA INFO YANG KURANG JELAS BISA LANGSUNG MENGHUBUNGI
                            ADMIN. PENGIRIMAN DILAKUKAN DI HARI SENIN-SABTU.
                        </p>
                    </div>
                    <div className="mt-2">
                        <ModalOngkir
                            size="2xl"
                            header="Notes"
                            placement="center"
                            options={
                                <div className="text-green-500">
                                    Lihat Selengkapnya
                                </div>
                            }
                        >
                            <p>
                                UNTUK BARANG READY,BISA LANGSUNG DI CHECKOUT
                                APABILA ADA INFO YANG KURANG JELAS BISA LANGSUNG
                                MENGHUBUNGI ADMIN. PENGIRIMAN DILAKUKAN DI HARI
                                SENIN-SABTU.
                            </p>
                            <p>
                                HARAP MELAKUKAN UHNBOXING SAAT BARANG SAMPAI.
                                TIDAK MENERIMA KOMPLAIN TANPA VIDEO UNBOXING.
                                TERIMA KASIH,SELAMAT BERBELANJA :)
                            </p>
                        </ModalOngkir>
                    </div>
                </Tab>
            </Tabs>
        </>
    );
};

export const ProgressStar = () => {
    const oneStar = Math.floor(Math.random() * 20);
    const twoStar = Math.floor(Math.random() * 30);
    const threeStar = Math.floor(Math.random() * 40);
    const fourStar = Math.floor(Math.random() * 50);
    const fiveStar = Math.floor(Math.random() * 100);

    const listStar = [
        { id: 1, value: oneStar },
        { id: 2, value: twoStar },
        { id: 3, value: threeStar },
        { id: 4, value: fourStar },
        { id: 5, value: fiveStar }
    ];
    return (
        <>
            {listStar.map(item => (
                <div className="flex items-center gap-x-1">
                    <div className="flex items-center">
                        <FaStar className="text-sm text-yellow-400" />
                        <p className="text-sm text-gray-400">{item.id}</p>
                    </div>
                    <Progress
                        key={item.id}
                        size="md"
                        className="w-[12.2rem]"
                        color="success"
                        aria-label="progress star"
                        value={item.value}
                    />
                    <p className="text-sm text-gray-400">{item.value}</p>
                </div>
            ))}
        </>
    );
};

export const UrutkanKomentar = () => {
    const listUrutkan = [
        { id: 1, name: "Paling Membantu" },
        { id: 2, name: "Terbaru" },
        { id: 3, name: "Rating Tertinggi" },
        { id: 4, name: "Rating Terendah" }
    ];
    return (
        <>
            <Select
                size="md"
                variant="bordered"
                label={<div className="mt-2 text-sm font-bold">Urutkan</div>}
                radius="sm"
                className="max-w-full"
                labelPlacement="outside-left"
            >
                {listUrutkan.map(item => (
                    <SelectItem key={item.name} value={item.name}>
                        {item.name}
                    </SelectItem>
                ))}
            </Select>
        </>
    );
};

export const TabsHomepage = props => {
    const { products } = props;

    const listTab = [
        {
            id: 1,
            name: "For You",
            element: (
                <CardProduct
                    className="w-full h-full "
                    variant="grid grid-cols-2 gap-3 w-full md:grid-cols-6 "
                    products={products}
                />
            )
        },
        {
            id: 2,
            name: "HandPhone",
            element: (
                <CardProduct
                    className="w-full h-full "
                    variant="grid grid-cols-2 gap-3 w-full md:grid-cols-6 "
                    products={products}
                />
            )
        },
        {
            id: 3,
            name: "Dress",
            element: (
                <CardProduct
                    className="w-full h-full "
                    variant="grid grid-cols-2 gap-3 w-full md:grid-cols-6 "
                    products={products}
                />
            )
        },
        {
            id: 4,
            name: "Furniture",
            element: (
                <CardProduct
                    className="w-full h-full "
                    variant="grid grid-cols-2 gap-3 w-full md:grid-cols-6 "
                    products={products}
                />
            )
        },
        {
            id: 5,
            name: "Mirip yang kamu cek",
            element: (
                <CardProduct
                    className="w-full h-full "
                    variant="grid grid-cols-2 gap-3 w-full md:grid-cols-6 "
                    products={products}
                />
            )
        }
    ];
    return (
        <>
            <div className="flex flex-col overflow-x-scroll">
                <Tabs color="success" variant="underlined">
                    {listTab.map(item => (
                        <Tab
                            key={item.name}
                            title={<h3 className="font-bold">{item.name}</h3>}
                        >
                            {item.element}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </>
    );
};

export const TabsTopUp = () => {
    const list = [
        {
            id: 1,
            name: "Pulsa",
            element: (
                <div className="flex items-end justify-between gap-x-4">
                    <Input
                        variant="bordered"
                        type="number"
                        label="Nomor Telepon"
                        labelPlacement="outside"
                        placeholder="Masukkan Nomor"
                        radius="sm"
                    />
                    <Input
                        variant="bordered"
                        type="number"
                        label="Nominal"
                        placeholder={<span className="sr-only hidden"></span>}
                        labelPlacement="outside"
                        radius="sm"
                    />
                    <Button
                        className="font-bold text-white"
                        radius="sm"
                        color="success"
                    >
                        Beli
                    </Button>
                </div>
            )
        },
        {
            id: 2,
            name: "Paket Data",
            element: (
                <div className="flex items-end justify-between gap-x-4">
                    <Input
                        variant="bordered"
                        type="number"
                        label="Nomor Telepon"
                        labelPlacement="outside"
                        placeholder="Masukkan Nomor"
                        radius="sm"
                    />
                    <Input
                        variant="bordered"
                        type="number"
                        label="Nominal"
                        placeholder={<span className="sr-only hidden"></span>}
                        labelPlacement="outside"
                        radius="sm"
                    />
                    <Button
                        className="font-bold text-white"
                        radius="sm"
                        color="success"
                    >
                        Beli
                    </Button>
                </div>
            )
        },
        {
            id: 3,
            name: "Flight",
            element: "gak ada :)"
        },
        {
            id: 4,
            name: "Listrik PLN",
            element: "gak ada :) kakean kode "
        }
    ];
    return (
        <Tabs color="success" variant="underlined">
            {list.map(item => (
                <Tab
                    key={item.name}
                    title={<h3 className="font-bold">{item.name}</h3>}
                    className="mx-3.5"
                >
                    <p>{item.element}</p>
                </Tab>
            ))}
        </Tabs>
    );
};

export const KategoriPilihan = () => {
    const list = [
        {
            id: 1,
            name: "Makanan Kering",
            image: "https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_e5b3e074-c897-4cf0-9ced-5572d0538e7c.jpg.webp"
        },
        {
            id: 2,
            name: "Figure",
            image: "https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_c6f70915-577f-4cd4-834c-daf892265ef0.jpg.webp"
        },
        {
            id: 3,
            name: "Tas Selempang Pria",
            image: "https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_d7c67b76-9ff4-46f9-93a3-ec4be4918439.jpg.webp"
        },
        {
            id: 4,
            name: "Flat Shoes Wanita",
            image: "https://images.tokopedia.net/img/cache/200/attachment/2018/8/9/3127195/3127195_76d08c44-8194-4454-9fb0-1e7a64b656aa.jpg.webp"
        }
    ];
    return (
        <>
            <div className="flex gap-x-5">
                {list.map(item => (
                    <figure>
                        <Image
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="w-28 object-cover"
                        />
                        <p className="text-xs text-center">{item.name}</p>
                    </figure>
                ))}
            </div>
        </>
    );
};
