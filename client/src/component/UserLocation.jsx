import React, { useState, useEffect } from "react";
import {
    Select,
    SelectSection,
    SelectItem,
    Button,
    Divider,
    Input,
    useDisclosure
} from "@nextui-org/react";

import { LocationModal } from "./ModalComponent";
import { InputTemplate } from "./inputComponent";

import { MdOutlineLogin } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoChevronForward, IoLocationOutline } from "react-icons/io5";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserLocation = ({ placement, size }) => {
    const [provinsi, setProvinsi] = useState([]);
    const [searchLokasi, setSearchLokasi] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    // Saat memilih provinsi, simpan ID provinsi yang dipilih dalam state
    const handleProvinceSelect = provinceId => {
        setSelectedProvinceId(provinceId);
    };

    useEffect(() => {
        const fetchProvinsi = async () => {
            try {
                const response = await fetch(
                    "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
                );
                const provinces = await response.json();
                setProvinsi(provinces);
            } catch (error) {
                console.error("Error fetching provinces data:", error);
            }
        };

        fetchProvinsi();
    }, []);

    // handle menangkap value
    const handleLocationSelect = location => {
        setSelectedLocation(location);
        localStorage.setItem("selectedLocation", location);
    };

    // handle pencarian Loksi
    const handleSearchChange = e => {
        setSearchLokasi(e.target.value);
    };

    const filteredProvinsi = provinsi.filter(item =>
        item.name.toLowerCase().includes(searchLokasi.toLowerCase())
    );

    const listProvinsi = filteredProvinsi.map(subItem => (
        <>
            <Button
                size="sm"
                className="border border-black"
                variant="bordered"
                key={subItem.id}
                onClick={() => {
                    handleLocationSelect(subItem.name);
                }}
            >
                {subItem.name}
            </Button>
        </>
    ));

    const renderLokasi = () => {
        if (listProvinsi.length === 0) {
            return <p>Tidak ada Lokasi yang sesuai dengan pencarian Anda.</p>;
        } else {
            return (
                <>
                    <div className="flex flex-wrap overflow-y-scroll  gap-2 h-[300px] md:w-[600px] md:h-[400px]">
                        {listProvinsi}
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <LocationModal
                IsiBody={
                    <>
                        <p className="text-xs text-gray-500">
                            Biar pengalaman belanjamu lebih baik, pilih alamat
                            dulu.
                        </p>
                        <div>
                            <div className="flex mt-2 justify-between items-center md:justify-evenly">
                                <MdOutlineLogin className="text-2xl" />
                                <div className="">
                                    <h3 className="font-bold">Masuk</h3>
                                    <p className="text-tiny">
                                        Masuk dulu biar bisa memilih alamat
                                        pengirimanmu
                                    </p>
                                </div>
                                <IoChevronForward />
                            </div>
                            <Divider className="my-6" />
                            <h3 className="font-bold">
                                Mau pakai cara lain?
                            </h3>
                            <div className="flex justify-evenly items-center">
                                <IoLocationOutline className="text-2xl" />
                                <div className="-ml-2">
                                    <h3 className="font-bold">
                                        Pilih Kota & Kecamatan
                                    </h3>
                                    <p className="text-tiny">
                                        Pilih dulu biar bisa kita tahu alamat
                                        pengirimanmu
                                    </p>
                                    <LocationModal
                                        placement="bottom"
                                        size="full"
                                        options="pilih alamat mu"
                                        variant="light"
                                        IsiHeader={
                                            <h1 className="font-bold">
                                                Kota Dan Kecamatan
                                            </h1>
                                        }
                                        IsiBody={
                                            <>
                                                <form className="sticky bg-base-100">
                                                    <Input
                                                        type="text"
                                                        placeholder="Tulis Minimal 3 Karakter"
                                                        startContent={
                                                            <FaMagnifyingGlass className="text-gray-400" />
                                                        }
                                                        onChange={
                                                            handleSearchChange
                                                        }
                                                        value={searchLokasi}
                                                    />
                                                </form>
                                                {renderLokasi()}
                                            </>
                                        }
                                    />
                                </div>
                                <IoChevronForward />
                            </div>
                        </div>
                    </>
                }
                IsiHeader={
                    <h1 className="font-bold">Mau kirim belanjaan kemana?</h1>
                }
                placement={placement}
                size={size}
                variant="light"
                color="foreground"
                options={selectedLocation || "Muncar, Banyuwangi"}
            />
        </>
    );
};
