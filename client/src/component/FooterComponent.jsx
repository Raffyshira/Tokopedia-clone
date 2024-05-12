import React from "react";

import { Link, Image, Divider } from "@nextui-org/react";

export const FooterForMobile = () => {
    return (
        <>
            <section className="px-4 mt-2 py-3 bg-white">
                <div>
                    <h4 className="font-bold">Jelajah Tokopedia</h4>
                    <div className="flex items-center gap-x-1">
                        <Link className="text-gray-500 text-sm" href="#!">
                            Official Store
                        </Link>
                        <Link className="text-gray-500 text-sm" href="#!">
                            | Tokopedia Salam |
                        </Link>
                        <Link className="text-gray-500 text-sm" href="#!">
                            Kategori
                        </Link>
                    </div>
                    <Divider className="bg-gray-100 my-5" />
                    <div className="flex items-center gap-x-1">
                        <Link className="text-gray-500 text-sm" href="#!">
                            Tokopedia Care
                        </Link>
                        <Link className="text-gray-500 text-sm" href="#!">
                            | Syarat & Ketentuan |
                        </Link>
                        <Link className="text-gray-500 text-sm" href="#!">
                            Kebijakan Privasi
                        </Link>
                    </div>
                    <div className="mt-4">
                        <h5 className="font-bold text-sm">
                            Gunakan Aplikasi Tokopedia
                        </h5>
                        <div className="mt-2 flex gap-x-2 ">
                            <Link href="https://play.google.com/store/apps/details?id=com.tokopedia.tkpd">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIimhMdG6Rs7n_5l4FzlbOtzn7s73JUoc6g&s"
                                    alt="Tokopedia Play store"
                                    radius="sm"
                                    className="w-28"
                                />
                            </Link>
                            <Link href="https://apps.apple.com/us/app/tokopedia/id1001394201">
                                <Image
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk7OywFCuNaXPnmdgEAmthr_XrNbzxmt6oUQ&s"
                                    alt="Tokopedia App store"
                                    radius="sm"
                                    className="w-28"
                                />
                            </Link>
                        </div>
                        <Link href="https://consumer.huawei.com/id/community/details/topicId_62157/">
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IKt1X_hyYbyORRHBQNi5DC4-dmhc4NcxHQ&usqp=CAU"
                                alt="Tokopedia App Gallery"
                                radius="sm"
                                className="flex-1 w-28 mt-3"
                            />
                        </Link>
                        <p className="text-sm mt-5 text-gray-500">
                            © 2009 - 2024, PT Tokopedia
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};
