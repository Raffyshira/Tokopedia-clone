import React from "react";

import { Tabs, Tab, Link, Image, Button } from "@nextui-org/react";

import { MenuLogin, MenuItems, MenuPromo } from "../../Data/DataNavbar";

import { NavbarComponent } from "../../component/navbarComponent";
import { UserLocation } from "../../component/UserLocation";
import { IoLocationSharp } from "react-icons/io5";

import BeliLokal from "./BeliLokal";
import WIB from "./WIB";

const PromoHariIni = () => {
    return (
        <>
            <NavbarComponent
                DataPromo={MenuPromo}
                DataItems={MenuItems}
                DataLogin={MenuLogin}
                BackgroundColor="bg-green-600"
                Color="text-white"
            />
            <main className="mt-14">
                <section className="px-5 py-3">
                    <div className="flex items-center md:hidden">
                        <IoLocationSharp className="text-green-600 text-sm" />
                        <p className="text-xs ml-1">Dikirim Ke</p>
                        <div className="-ml-3">
                            <UserLocation />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative z-10">
                        <Tabs
                            color="success"
                            variant="underlined"
                            aria-label="Options"
                        >
                            <Tab key="BeliLokal" title="Beli Lokal">
                                <BeliLokal />
                            </Tab>
                            <Tab key="WIB" title="WIB">
                                <WIB />
                            </Tab>
                        </Tabs>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PromoHariIni;
