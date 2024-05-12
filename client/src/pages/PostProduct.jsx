import React, { useState } from "react";

import { Input, Button, Link, Image, Card, CardBody } from "@nextui-org/react";

import { NavLoginPage } from "../component/navbarComponent";
import {
    IoCubeOutline,
    IoImageOutline,
    IoReaderOutline,
    IoPricetagOutline,
    IoBusinessOutline,
    IoOptionsOutline,
    IoBagAddOutline,
    IoStarOutline
} from "react-icons/io5";
const PostProduct = () => {
    const [data, setData] = useState({
        name_product: "",
        image_product: "",
        description: "",
        price_product: "",
        brand: "",
        category: "",
        stock: "",
        rating: "",
        discount: "",
        sale: "",
        lokasi: ""
        
    });

    const handleChange = e => {
        const { name, value } = e.target;
        const numericValue =
            name === "price_product"
                ? parseFloat(value.replace(",", ""))
                : value;
        setData(prevState => ({
            ...prevState,
            [name]: numericValue
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:4173/v1/api/product",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );
            const list = await response.json();
            console.log(list);
        } catch (error) {}
        alert("error", error);
    };
    return (
        <>
            <nav>
                <NavLoginPage previousPage="/" header="Product" />
            </nav>
            <main>
                <section className="p-5 md:hidden">
                    <div className="mb-5">
                        <h1 className="text-2xl font-bold">Post Product</h1>
                        <p className="text-tiny">For Backend</p>
                    </div>
                    <div className="max-w-full flex flex-col">
                        <form
                            onSubmit={handleSubmit}
                            method="POST"
                            className="flex flex-wrap gap-y-2"
                        >
                            <Input
                                type="text"
                                value={data.name_product}
                                onChange={handleChange}
                                label="Name Product"
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoCubeOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="name_product"
                            />
                            <Input
                                type="text"
                                value={data.image_product}
                                onChange={handleChange}
                                label="Product Image"
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoImageOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="image_product"
                            />
                            <Input
                                type="text"
                                value={data.description}
                                onChange={handleChange}
                                label="Description"
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoReaderOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="description"
                            />
                            <Input
                                type="text"
                                label="Price"
                                value={data.price_product}
                                onChange={handleChange}
                                variant="bordered"
                                startContent={
                                    <IoPricetagOutline className="text-gray-500" />
                                }
                                radius="sm"
                                labelPlacement="outside"
                                name="price_product"
                            />
                            <Input
                                type="text"
                                label="Brand"
                                value={data.brand}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoBusinessOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="brand"
                            />
                            <Input
                                type="text"
                                label="Category"
                                value={data.category}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoOptionsOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="category"
                            />
                            <Input
                                type="text"
                                label="Stock"
                                variant="bordered"
                                value={data.stock}
                                onChange={handleChange}
                                radius="sm"
                                startContent={
                                    <IoBagAddOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="stock"
                            />
                            <Input
                                type="text"
                                label="Rating"
                                value={data.rating}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoStarOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="rating"
                            />
                            <Input
                                type="text"
                                label="Discount"
                                value={data.discount}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoStarOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="discount"
                            />
                            <Input
                                type="text"
                                label="Sale"
                                value={data.sale}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoStarOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="sale"
                            />
                            <Input
                                type="text"
                                label="Lokasi"
                                value={data.lokasi}
                                onChange={handleChange}
                                variant="bordered"
                                radius="sm"
                                startContent={
                                    <IoStarOutline className="text-gray-500" />
                                }
                                labelPlacement="outside"
                                name="lokasi"
                            />
                            <Button
                                radius="sm"
                                color="success"
                                className="text-white font-bold w-full mt-3"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </section>

                <section className="p-10 hidden md:block">
                    <div className="w-full flex justify-center items-center mb-10">
                        <Image
                            radius="none"
                            src="/assets/Tokopedia.svg"
                            alt="logo Tokopedia"
                        />
                    </div>
                    <div className="max-w-full flex flex-col justify-center items-center mx-auto">
                        <Card radius="sm" className="w-96 p-5">
                            <div className="mb-5">
                                <h1 className="text-2xl font-bold">
                                    Post Product
                                </h1>
                                <p className="text-tiny">For Backend</p>
                            </div>
                            <form
                                method="POST"
                                className="flex flex-wrap gap-y-2"
                            >
                                <Input
                                    type="text"
                                    label="Name Product"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoCubeOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="text"
                                    label="Product Image"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoImageOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="text"
                                    label="Description"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoReaderOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="number"
                                    label="Price"
                                    variant="bordered"
                                    startContent={
                                        <IoPricetagOutline className="text-gray-500" />
                                    }
                                    radius="sm"
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="text"
                                    label="Brand"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoBusinessOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="text"
                                    label="Category"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoOptionsOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="number"
                                    label="Stock"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoBagAddOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Input
                                    type="number"
                                    label="Rating"
                                    variant="bordered"
                                    radius="sm"
                                    startContent={
                                        <IoStarOutline className="text-gray-500" />
                                    }
                                    labelPlacement="outside"
                                />
                                <Button
                                    radius="sm"
                                    color="success"
                                    className="text-white font-bold w-full mt-3"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </form>
                        </Card>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PostProduct;
