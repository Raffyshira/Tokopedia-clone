import React from "react";

import { NavLoginPage } from "../../component/navbarComponent";
import { InputTemplate } from "../../component/inputComponent";

import { Button } from "@nextui-org/react";
const ResetPassword = () => {
    return (
        <>
            <NavLoginPage previousPage="/login" />
            <main>
                <section className="p-5">
                    <div>
                        <h1 className="text-2xl font-bold">
                            Atur ulang kata sandi{" "}
                        </h1>
                        <p className="mt-3 text-sm text-gray-400">
                            Masukkan e-mail atau nomor HP yang terdaftar. Kami
                            akan mengirimkan kode verifikasi untuk atur ulang
                            kata sandi
                        </p>
                    </div>
                    <form className="mt-3">
                        <InputTemplate
                            type="text"
                            label="Nomor HP atau Email"
                            variant="underlined"
                        />
                    </form>
                    <Button
                        radius="sm"
                        color="success"
                        className="w-full mt-4 text-white font-bold"
                    >
                        Lanjut
                    </Button>
                </section>
            </main>
        </>
    );
};

export default ResetPassword;
