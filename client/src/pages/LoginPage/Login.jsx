import React, { useState, useMemo } from "react";

import { NavLoginPage } from "../../component/navbarComponent";
import { LocationModal } from "../../component/ModalComponent";
import { IoIosArrowRoundBack } from "react-icons/io";
import {
    Card,
    CardBody,
    CardHeader,
    Button,
    Link,
    Input,
    Divider,
    Image
} from "@nextui-org/react";

import { FcGoogle } from "react-icons/fc";
import { MdOutlineQrCodeScanner } from "react-icons/md";

const Login = () => {
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
                header="Masuk"
                page="Signup"
                link="/signup"
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
                    <div className="text-end mt-2">
                        <LocationModal
                            options="Butuh Bantuan ?"
                            color="success"
                            variant="light"
                            IsiHeader={<h1>Butuh Bantuan Apa ?</h1>}
                            IsiBody={
                                <>
                                    <Button
                                        as={Link}
                                        href="/reset-password"
                                        radius="sm"
                                        className="text-gray-500 font-bold"
                                        variant="bordered"
                                    >
                                        Lupa Kata Sandi
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="#!"
                                        radius="sm"
                                        className="text-gray-500 font-bold"
                                        variant="bordered"
                                    >
                                        Nomor HP Tidak Aktif
                                    </Button>
                                    <div className="flex items-center justify-center ">
                                        <p className="text-sm">
                                            Butuh bantuan lain?
                                        </p>
                                        <Link
                                            size="sm"
                                            color="success"
                                            href="#!"
                                        >
                                            Hubungi Tokopedia Care
                                        </Link>
                                    </div>
                                </>
                            }
                        />
                    </div>
                    <section>
                        <Button
                            color={isInvalid ? "default" : "success"}
                            radius="sm"
                            className={
                                isInvalid
                                    ? "w-full font-bold"
                                    : "w-full font-bold text-white"
                            }
                        >
                            Selanjutnya
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
                                IsiHeader={<h1>Pilih Akun Untuk Masuk</h1>}
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
                            <div className="flex items-center justify-center mt-3">
                                <p className="text-sm font-light">
                                    Belum punya akun ?
                                </p>
                                <Link
                                    color="success"
                                    className="text-sm font-light ml-2"
                                    href="/signup"
                                >
                                    Daftar
                                </Link>
                            </div>
                        </div>
                    </section>
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
                    <div className="flex justify-center  mt-10 relative">
                        <div className="absolute z-10">
                            <Image
                                src="/assets/backgroundlogin.png"
                                alt="..."
                                className="w-[48rem]"
                            />
                        </div>
                        <Card
                            radius="sm"
                            shadow="sm"
                            className="mt-5 w-96 p-5 z-20"
                        >
                            <CardHeader className="flex justify-between">
                                <h1 className="text-3xl font-bold">Masuk</h1>
                                <Link color="success" href="/signup">
                                    Sign up
                                </Link>
                            </CardHeader>
                            <CardBody>
                                <form>
                                    <Input
                                        value={value}
                                        type="email"
                                        radius="sm"
                                        label="Nomor HP atau Email"
                                        variant="underlined"
                                        labelPlacement="outside"
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid &&
                                            "Masukan email atau nomor HP yang valid"
                                        }
                                        onValueChange={setValue}
                                        className="max-w-full"
                                    />
                                </form>
                                <div className="text-end mt-2">
                                    <LocationModal
                                        options="Butuh Bantuan ?"
                                        color="success"
                                        variant="light"
                                        IsiHeader={<h1>Butuh Bantuan Apa ?</h1>}
                                        IsiBody={
                                            <>
                                                <Button
                                                    as={Link}
                                                    href="/reset-password"
                                                    radius="sm"
                                                    className="text-gray-500 font-bold"
                                                    variant="bordered"
                                                >
                                                    Lupa Kata Sandi
                                                </Button>
                                                <Button
                                                    as={Link}
                                                    href="#!"
                                                    radius="sm"
                                                    className="text-gray-500 font-bold"
                                                    variant="bordered"
                                                >
                                                    Nomor HP Tidak Aktif
                                                </Button>
                                                <div className="flex items-center justify-center ">
                                                    <p className="text-sm">
                                                        Butuh bantuan lain?
                                                    </p>
                                                    <Link
                                                        size="sm"
                                                        color="success"
                                                        href="#!"
                                                    >
                                                        Hubungi Tokopedia Care
                                                    </Link>
                                                </div>
                                            </>
                                        }
                                    />
                                </div>
                                <Button
                                    color={isInvalid ? "default" : "success"}
                                    radius="sm"
                                    className={
                                        isInvalid
                                            ? "w-full font-bold"
                                            : "w-full font-bold text-white"
                                    }
                                >
                                    Selanjutnya
                                </Button>
                                <div className="mt-4 flex justify-between items-center">
                                    <Divider className="w-20" />
                                    <p className="text-center text-gray-400 text-sm">
                                        atau masuk dengan
                                    </p>
                                    <Divider className="w-20" />
                                </div>
                                <div className="mt-4">
                                    <Button
                                        startContent={
                                            <FcGoogle className="text-xl" />
                                        }
                                        variant="bordered"
                                        radius="sm"
                                        className="border border-gray-400 font-semibold w-full"
                                    >
                                        Google
                                    </Button>
                                    <div className="mt-2">
                                        <LocationModal
                                            options={
                                                <>
                                                    <MdOutlineQrCodeScanner />
                                                    <h1>Scan Qrcode</h1>{" "}
                                                </>
                                            }
                                            width="full"
                                            size="2xl"
                                        />
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="z-20 mt-24">
                        <p className="text-center text-gray-400 text-sm">
                            © 2009-2024, PT Tokopedia |{" "}
                            <span>
                                <Link className="text-sm" color="success" href="#!">
                                    Bantuan
                                </Link>
                            </span>
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
