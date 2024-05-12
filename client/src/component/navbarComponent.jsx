import React, { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Button,
    Image,
    Input,
    Divider,
    Badge
} from "@nextui-org/react";

import {
    IoCartOutline,
    IoMailOutline,
    IoNotificationsOutline,
    IoChatboxEllipsesOutline
} from "react-icons/io5";
import { PiList } from "react-icons/pi";
import { InputTemplate } from "./inputComponent";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";

export const NavbarComponent = ({
    DataLogin,
    DataPromo,
    DataItems,
    BackgroundColor,
    Color
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            className={`fixed ${BackgroundColor} ${Color} top-0  z-50`}
            isBlurred={false}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className="md:hidden z-20">
                {DataPromo && (
                    <Link href="/">
                        <IoIosArrowRoundBack className={`text-xl ${Color}`} />
                    </Link>
                )}
                <NavbarItem>
                    <Input
                        type="text"
                        placeholder="Cari Di Tokopedia"
                        startContent={
                            <FaMagnifyingGlass className="text-gray-400 " />
                        }
                        variant="solid"
                        className="w-44"
                    />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent>
                <NavbarBrand>
                    <Image
                        className="hidden md:block md:w-36"
                        radius="none"
                        src="/assets/Tokopedia.svg"
                        alt="Logo Tokopedia"
                    />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Kategori
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <InputTemplate
                        type="text"
                        placeholder="Cari Di Tokopedia"
                        icon={<FaMagnifyingGlass className="text-gray-400" />}
                        variant="bordered"
                    />
                </NavbarItem>
            </NavbarContent>

            <Divider
                className="h-5 ml-5 hidden md:flex"
                orientation="vertical"
            />
            <NavbarContent justify="end">
                <NavbarItem className="hidden md:flex">
                    <Link color="success" href="/login">
                        Login
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        as={Link}
                        color="default"
                        href="/signup"
                        variant="flat"
                    >
                        Sign Up
                    </Button>
                </NavbarItem>
                <NavbarItem className="flex lg:flex z-50 gap-x-3 -ml-3">
                    <Badge
                        content="99+"
                        size="sm"
                        color="danger"
                        disableOutline
                    >
                        <Link href="/">
                            <IoCartOutline className={`text-2xl ${Color}`} />
                        </Link>
                    </Badge>
                    <Badge content="5" size="sm" color="success" disableOutline>
                        <Link href="/">
                            <IoNotificationsOutline
                                className={`text-2xl ${Color}`}
                            />
                        </Link>
                    </Badge>
                    <Badge content="0" size="sm" disableOutline>
                        <Link href="/">
                            <IoMailOutline className={`text-2xl ${Color}`} />
                        </Link>
                    </Badge>
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarMenu className="z-50 max-h-screen">
                <div className="flex justify-between sticky">
                    {DataLogin.map(item => (
                        <NavbarMenuItem className="">
                            <Button
                                className={
                                    item.id === 1
                                        ? "font-bold text-white w-44"
                                        : item.id === 2
                                        ? "font-bold text-green-500 w-44 border-green-500"
                                        : null
                                }
                                size="sm"
                                color={
                                    item.id === 1
                                        ? "success"
                                        : item.id === 2
                                        ? "default"
                                        : "foreground"
                                }
                                variant={
                                    item.id === 1
                                        ? "solid"
                                        : item.id === 2
                                        ? "bordered"
                                        : null
                                }
                                fullWidth={true}
                                radius="sm"
                                as={Link}
                                href={item.link}
                            >
                                {item.name}
                            </Button>
                        </NavbarMenuItem>
                    ))}
                </div>
                <div className="flex flex-col overflow-y-scroll gap-y-4 scrollbar">
                    <div className="shadow-gray-300 shadow p-5 rounded-2xl border">
                        <h1 className="mb-5 font-bold">Profile Anda</h1>
                        {DataItems.slice(0, 4).map(item => (
                            <NavbarMenuItem
                                key={item.id}
                                className="-ml-5 -mt-1 "
                            >
                                <Button
                                    as={Link}
                                    color="foreground"
                                    className="text-black"
                                    href="#"
                                    size="md"
                                    disableAnimation
                                    startContent={item.icon}
                                >
                                    {item.name}
                                </Button>
                            </NavbarMenuItem>
                        ))}
                    </div>
                    {DataPromo && (
                        <div className="shadow-gray-300 shadow p-5 rounded-2xl border">
                            <h1 className="mb-5 font-bold">Aktifitas Anda</h1>
                            {DataPromo.map(item => (
                                <NavbarMenuItem
                                    key={item.id}
                                    className="-ml-5 -mt-1"
                                >
                                    <Button
                                        as={Link}
                                        color="foreground"
                                        className="text-black"
                                        href="#"
                                        size="md"
                                        disableAnimation
                                        startContent={item.icon}
                                    >
                                        {item.name}
                                    </Button>
                                </NavbarMenuItem>
                            ))}
                        </div>
                    )}

                    <div className="shadow-gray-300 shadow p-5 rounded-2xl border">
                        <h1 className="mb-5 font-bold">Customer Service</h1>
                        {DataItems.slice(4, 7).map(item => (
                            <NavbarMenuItem
                                key={item.id}
                                className="-ml-5 -mt-1 "
                            >
                                <Button
                                    as={Link}
                                    color="foreground"
                                    className="text-black"
                                    href="#"
                                    size="md"
                                    disableAnimation
                                    startContent={item.icon}
                                >
                                    {item.name}
                                </Button>
                            </NavbarMenuItem>
                        ))}
                    </div>
                </div>
            </NavbarMenu>
        </Navbar>
    );
};

export const NavLoginPage = ({ header, page, link, previousPage }) => {
    return (
        <>
            <Navbar className="h-16 md:hidden">
                <NavbarContent justify="start" className="flex -ml-3">
                    <NavbarItem>
                        <Button
                            isIconOnly
                            color="foreground"
                            as={Link}
                            disableAnimation
                            href={previousPage}
                        >
                            <IoIosArrowRoundBack className="text-3xl text-gray-400" />
                        </Button>
                    </NavbarItem>
                    <NavbarItem className="-ml-3">
                        <h1 className="text-lg font-semibold">{header}</h1>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <Link color="success" href={link}>
                        {page}
                    </Link>
                </NavbarContent>
            </Navbar>
        </>
    );
};

export const NavUntukMobile = () => {
    return (
        <>
            <Navbar className="sticky bottom-0 right-0 left-0 bg-white h-fit shadow-lg w-full">
                <NavbarContent>
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="/"
                            isIconOnly
                            variant="bordered"
                            color="foreground"
                            className="text-black border-black"
                        >
                            <IoChatboxEllipsesOutline className="text-xl" />
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="#!"
                            variant="bordered"
                            color="success"
                            className="w-40 font-bold"
                            radius="sm"
                        >
                            Beli
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            as={Link}
                            href="#!"
                            variant="solid"
                            color="success"
                            radius="sm"
                            className="w-40 font-bold text-white"
                        >
                            Keranjang
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
};
