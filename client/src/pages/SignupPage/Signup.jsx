import React, { useState, useMemo } from "react";

import { NavLoginPage } from "../../component/navbarComponent";
import { InputTemplate } from "../../component/inputComponent";
import { LocationModal } from "../../component/ModalComponent";

import {
    Button,
    Input,
    Divider,
    Link,
    Image,
    Card,
    CardHeader,
    CardBody
} from "@nextui-org/react";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineQrCodeScanner } from "react-icons/md";

const Signup = () => {
    const [value, setValue] = useState("");
    const validateEmail = value =>
        value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const validatePhoneNumber = value =>
        value.match(/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/);

    const isInvalid = useMemo(() => {
        if (value === "") return false;

        return validateEmail(value) || validatePhoneNumber(value)
            ? false
            : true;
    }, [value]);
    return (
        <>
            <NavLoginPage
                header="Daftar"
                page="Login"
                link="/login"
                previousPage="/"
            />
            <main className="p-5">
                <section className="md:hidden">
                    <form>
                        <Input
                            value={value}
                            type="email"
                            label="Nomor HP atau Email"
                            variant="underlined"
                            isInvalid={isInvalid}
                            errorMessage={
                                isInvalid &&
                                "Masukan email atau nomor HP yang valid"
                            }
                            onValueChange={setValue}
                            className="max-w-full"
                        />
                    </form>
                    <div>
                        <Button
                            color={isInvalid ? "default" : "success"}
                            radius="sm"
                            className={
                                isInvalid
                                    ? "w-full font-bold mt-3"
                                    : "w-full font-bold text-white mt-3"
                            }
                        >
                            Daftar
                        </Button>
                        <div className="mt-4 flex justify-between items-center">
                            <Divider className="w-24" />
                            <p className="text-center text-gray-400 text-sm">
                                atau masuk dengan
                            </p>
                            <Divider className="w-24" />
                        </div>
                        <div className="mt-4">
                            <LocationModal
                                options="Metode Lain"
                                width="full"
                                ukuran="md"
                                IsiHeader={<h1>Pilih Akun Untuk Daftar</h1>}
                                IsiBody={
                                    <>
                                        <Button
                                            startContent={
                                                <FcGoogle className="text-xl" />
                                            }
                                            variant="bordered"
                                            radius="sm"
                                            className="border border-gray-400 font-semibold"
                                        >
                                            Google
                                        </Button>
                                    </>
                                }
                            />
                        </div>
                        <div className="mt-4">
                            <p className="text-center mx-auto text-xs w-64 text-gray-400">
                                Dengan mendaftar, saya menyetujui{" "}
                                <span>
                                    <Link
                                        className="text-xs"
                                        color="success"
                                        href="/"
                                    >
                                        Syarat dan Ketentuan
                                    </Link>
                                </span>{" "}
                                dan{" "}
                                <span>
                                    <Link
                                        className="text-xs"
                                        color="success"
                                        href="/"
                                    >
                                        Kebijakan Privasi
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="hidden md:block p-5">
                    <div className="flex justify-center">
                        <Link href="/">
                            <Image
                                src="/assets/Tokopedia.svg"
                                alt="logo tokopedia"
                                radius="none"
                            />
                        </Link>
                    </div>
                    <div className="mt-10 flex justify-around items-center">
                        <div className="">
                            <Image
                                src="/assets/register_new.png"
                                alt="Tokopedia Register"
                                className="w-96"
                            />
                            <div className="text-center mt-5">
                                <h1 className="text-xl font-bold">
                                    Jual Beli Mudah Hanya di Tokopedia
                                </h1>
                                <p className="text-base">
                                    Gabung dan rasakan kemudahan bertransaksi di
                                    Tokopedia
                                </p>
                            </div>
                        </div>
                        <div>
                            <Card className="w-96 p-5" radius="sm" shadow="sm">
                                <CardHeader>
                                    <div className="flex flex-col items-center mx-auto">
                                        <h1 className="text-2xl font-bold">
                                            Daftar Sekarang
                                        </h1>
                                        <p className="text-sm font-light">
                                            Sudah punya akun Tokopedia?{" "}
                                            <span>
                                                <Link
                                                    href="/login"
                                                    color="success"
                                                >
                                                    Masuk
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <Button
                                        startContent={
                                            <FcGoogle className="text-2xl" />
                                        }
                                        as={Link}
                                        href="/"
                                        variant="bordered"
                                        radius="sm"
                                        className="border-gray-200"
                                    >
                                        Google
                                    </Button>
                                    <div className="mt-4 flex justify-between items-center">
                                        <Divider className="w-20" />
                                        <p className="text-center text-gray-400 text-sm">
                                            atau masuk dengan
                                        </p>
                                        <Divider className="w-20" />
                                    </div>
                                    <form className="mt-1.5">
                                        <Input
                                            type="text"
                                            label="Phone Number or Email"
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius="sm"
                                            color="default"
                                            description="Example: email@tokopedia.com"
                                        />
                                    </form>
                                    <Button className="mt-1.5 bg-gray-200 font-semibold">
                                        Daftar
                                    </Button>
                                    <div className="text-center text-sm mt-3">
                                        <p>
                                            Dengan mendaftar, saya menyetujui
                                            <span>
                                                <Link
                                                    href="/"
                                                    className="text-sm"
                                                    color="success"
                                                >
                                                    Syarat dan Ketentuan
                                                </Link>
                                            </span>{" "}
                                            serta{" "}
                                            <span>
                                                <Link
                                                    href="/"
                                                    className="text-sm"
                                                    color="success"
                                                >
                                                    {" "}
                                                    Kebijakan Privasi
                                                </Link>
                                            </span>
                                        </p>
                                    </div>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className="z-20 mt-24">
                        <p className="text-center text-gray-400 text-sm">
                            © 2009-2024, PT Tokopedia |{" "}
                            <span>
                                <Link
                                    className="text-sm"
                                    color="success"
                                    href="#!"
                                >
                                    Tokopedia Care
                                </Link>
                            </span>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Signup;
