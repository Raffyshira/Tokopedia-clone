import React, { useState, useEffect } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    Link,
    Image,
    Chip,
    Progress,
    Button,
    Divider,
    Input,
    Checkbox
} from "@nextui-org/react";

import { FaStar } from "react-icons/fa";
import {
    IoRemoveOutline,
    IoAddOutline,
    IoChatboxEllipsesOutline,
    IoHeartOutline,
    IoShareSocialOutline
} from "react-icons/io5";

import { TemplateAccordion } from "./AccordionComponent";
import { TabsTopUp } from "./RandomComponent";

export const CardDiskon = ({ products }) => {
    return (
        <div className="flex gap-x-2">
            {products.map(item => {
                const { price_product, discount } = item;
                const discountedPrice =
                    price_product - price_product * (discount / 100);
                return (
                    <Card key={item.id} radius="sm" className="w-36 h-56 ">
                        <div className="relative z-10">
                            <Link href={`/product/${item.name_product}`}>
                                <Image
                                    src={item.image_product}
                                    alt="..."
                                    className="rounded-none"
                                />
                            </Link>
                            <Chip
                                className="absolute bottom-0 right-0 z-20"
                                radius="sm"
                                size="sm"
                                color="danger"
                            >
                                {item.discount}%
                            </Chip>
                        </div>
                        <div className="bg-gray-200 py-1 px-2 rounded-bl-lg rounded-br-lg flex items-center">
                            <p className="font-bold text-tiny">Segera Habis</p>
                            <Progress
                                color="danger"
                                aria-label="sale"
                                value={item.discount}
                            />
                        </div>
                        <CardBody className="p-1.5">
                            <p className="font-bold text-sm truncate">
                                Rp. {discountedPrice.toLocaleString()}
                                <span className="font-light text-gray-400 line-through text-tiny ">
                                    Rp. {price_product.toLocaleString()}
                                </span>
                            </p>
                        </CardBody>
                    </Card>
                );
            })}
        </div>
    );
};

export const CardProduct = ({ products, className, variant }) => {
    return (
        <>
            <div className={variant}>
                {products.map(item => {
                    const { price_product, discount } = item;
                    const discountedPrice =
                        price_product - price_product * (discount / 100);
                    return (
                        <Card shadow="none" radius="sm" className={className}>
                            <Link href={`/product/${item.name_product}`}>
                                <Image
                                    src={item.image_product}
                                    alt={item.name_product}
                                    radius="none"
                                    className="aspect-square object-cover w-full"
                                />
                            </Link>
                            <CardBody className="w-full -ml-2.5">
                                <div className="">
                                    <p className="text-sm truncate">
                                        {item.name_product}
                                    </p>
                                    <div>
                                        <p className="font-bold text-sm truncate">
                                            Rp.{" "}
                                            {discountedPrice.toLocaleString()}
                                            <span className="font-light text-gray-400 line-through text-[10px] ">
                                                Rp.{" "}
                                                {price_product.toLocaleString()}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <p className="inline-flex text-xs items-center text-gray-500">
                                            <FaStar className="text-yellow-500 mr-1 text-xs" />{" "}
                                            {item.rating}
                                        </p>
                                        <p className="text-xs ml-2 text-gray-500">
                                            {item.sale}+ terjual
                                        </p>
                                    </div>
                                    <p className="inline-flex items-center text-xs text-gray-500 mt-1">
                                        <span>
                                            <Image
                                                src="https://images.tokopedia.net/ta/icon/badge/OS-Badge-80.png"
                                                alt="shop badge"
                                                className="w-4 h-4"
                                            />
                                        </span>
                                        {item.lokasi}
                                    </p>
                                </div>
                            </CardBody>
                        </Card>
                    );
                })}
            </div>
        </>
    );
};

export const CardKeranjang = ({ product }) => {
    const { price_product, discount } = product;
    const [count, setCount] = useState(1);

    const discountedPrice = price_product - price_product * (discount / 100);

    const [totalHarga, setHargaTotal] = useState(0);

    useEffect(() => {
        setHargaTotal(discountedPrice * count);
    }, [count, discountedPrice]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    const decrement = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <>
            <Card className="w-full" shadow="sm" radius="sm">
                <CardHeader>
                    <h1 className="font-bold ">Atur jumlah dan catatan</h1>
                </CardHeader>
                <CardBody>
                    <div className="flex gap-x-3">
                        <Image
                            src={product.image_product}
                            alt={product.name_product}
                            className="w-20 object-cover"
                            radius="none"
                        />
                        <p className="text-xs line-clamp-2 w-52">
                            {product.name_product}
                        </p>
                    </div>
                    <Divider className="my-3 bg-gray-200" />
                    <div className="flex items-center gap-x-3">
                        <Button
                            variant="bordered"
                            radius="md"
                            className="w-24 border-gray-300 border"
                            disableAnimation
                            size="sm"
                        >
                            <Button
                                onClick={decrement}
                                radius="none"
                                color="foreground"
                                isIconOnly
                            >
                                <IoRemoveOutline />
                            </Button>
                            <p>{count}</p>
                            <Button
                                onClick={increment}
                                radius="none"
                                isIconOnly
                                color="foreground"
                            >
                                <IoAddOutline className="text-green-500" />
                            </Button>
                        </Button>
                        <p className="text-sm">
                            Stock:{" "}
                            <span className="font-bold">{product.stock}</span>
                        </p>
                    </div>
                    <div className="mt-4">
                        <Input
                            type="text"
                            placeholder="Contoh:Warna Putih, Size M"
                            variant="solid"
                            description="Kirim catatan ke penjual"
                            radius="sm"
                        />
                    </div>
                    <div className="mt-7">
                        <p className="line-through text-gray-400 text-sm text-end">
                            Rp.{product.price_product.toLocaleString()}
                        </p>
                        <div className="flex justify-between items-center">
                            <h4>Subtotal</h4>
                            <p className="font-bold text-lg">
                                Rp.{totalHarga.toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between gap-x-1 mt-2">
                        <Button
                            radius="sm"
                            variant="bordered"
                            color="success"
                            className="w-full border font-bold"
                        >
                            Beli
                        </Button>
                        <Button
                            radius="sm"
                            variant="solid"
                            color="success"
                            className="w-full border font-bold text-white"
                        >
                            +Keranjang
                        </Button>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                        <Link
                            color="foreground"
                            className="inline-flex items-center"
                            href="#!"
                        >
                            <IoChatboxEllipsesOutline className="text-lg mr-1" />
                            Chat
                        </Link>
                        <Divider className="mx-1" orientation="vertical" />
                        <Link
                            color="foreground"
                            className="inline-flex items-center"
                            href="#!"
                        >
                            <IoHeartOutline className="text-lg mr-1" />
                            Wishlist
                        </Link>
                        <Divider className="mx-1" orientation="vertical" />
                        <Link
                            color="foreground"
                            className="inline-flex items-center"
                            href="#!"
                        >
                            <IoShareSocialOutline className="text-lg mr-1" />
                            Share
                        </Link>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export const CardBalasan = ({ product }) => {
    return (
        <>
            <Card shadow="none" radius="sm" className="bg-slate-100">
                <CardHeader>
                    <div className="flex items-center gap-x-2">
                        <Image
                            radius="full"
                            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                            className="w-9 h-9"
                            alt={product.brand}
                        />
                        <div className="flex flex-col items-start">
                            <p className="text-sm font-bold">
                                {product.brand} Official Store
                                <span className="bg-green-500 text-white p-0.5 text-xs ml-1 rounded">
                                    Penjual
                                </span>
                            </p>
                            <p className="text-xs font-normal ">3 Bulan Lalu</p>
                        </div>
                    </div>
                </CardHeader>
                <CardBody>
                    <div>
                        <p className="text-sm">
                            Terima kasih telah berbelanja di{" "}
                            <span className="text-green-500 font-semibold underline underline-offset-2">
                                {product.brand} Official
                            </span>{" "}
                            Bagikan toko kami kepada teman-teman Anda dan
                            favoritkan Toko kami untuk terus update mengenai
                            stok dan produk terbaru
                        </p>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

export const CardFilterUlasan = () => {
    const listStar = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const listTopikUlasan = [
        { id: 1, name: "Kualitas Barang" },
        { id: 2, name: "Kemasan Barang" },
        { id: 3, name: "Sesuai Deskripsi" },
        { id: 4, name: "Pelayanan Penjual" },
        { id: 5, name: "Pengiriman" }
    ];

    return (
        <>
            <Card radius="none" shadow="sm">
                <CardHeader>
                    <h1 className="font-bold uppercase">Filter Ulasan</h1>
                </CardHeader>
                <Divider />
                <CardBody>
                    <TemplateAccordion
                        key="1"
                        title={<h3 className=" font-bold">Media</h3>}
                    >
                        <Checkbox radius="sm">
                            <p className="text-sm text-gray-500">
                                Dengan Foto & Video
                            </p>
                        </Checkbox>
                    </TemplateAccordion>
                    <Divider />
                    <TemplateAccordion
                        key="2"
                        title={<h3 className="font-bold">Rating</h3>}
                    >
                        <div className="flex flex-col gap-y-4 ">
                            {listStar.map(item => (
                                <Checkbox>
                                    <div className="flex items-center">
                                        <FaStar className="text-base text-yellow-400" />
                                        <p className="text-base text-gray-400">
                                            {item.id}
                                        </p>
                                    </div>
                                </Checkbox>
                            ))}
                        </div>
                    </TemplateAccordion>
                    <Divider />
                    <TemplateAccordion
                        key="3"
                        title={<h3 className="font-bold">Topik Ulasan</h3>}
                    >
                        <div>
                            {listTopikUlasan.map(item => (
                                <Checkbox className="mt-2" key={item.id}>
                                    <p className="text-gray-500">{item.name}</p>
                                </Checkbox>
                            ))}
                        </div>
                    </TemplateAccordion>
                </CardBody>
            </Card>
        </>
    );
};

export const CardTopUp = () => {
    return (
        <>
            <Card className="border" radius="sm" shadow="none">
                <TabsTopUp />
            </Card>
        </>
    );
};
