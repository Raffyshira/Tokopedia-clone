import {  CiStar } from "react-icons/ci";
import { RiCustomerService2Line, RiUserForbidLine } from "react-icons/ri";
import {
    IoReceiptOutline,
    IoBagHandleOutline,
    IoAirplaneOutline,
    IoCashOutline,
    IoEllipsisHorizontalCircle,
    IoReaderOutline,
    IoHeartOutline,
    IoStorefrontOutline,
    IoQrCodeOutline
} from "react-icons/io5";

export const MenuLogin = [
    { id: 1, name: "Masuk", link: "/login" },
    { id: 2, name: "Daftar", link: "/signup" }
];

export const MenuPromo = [
    {
        id: 1,
        name: "Kategori",
        link: "/",
        icon: <IoBagHandleOutline className="text-xl" />
    },
    {
        id: 2,
        name: "Top-up & Tagihan",
        link: "/",
        icon: <IoReceiptOutline className="text-xl" />
    },
    {
        id: 3,
        name: "Travel & Entertainment",
        link: "/",
        icon: <IoAirplaneOutline className="text-xl" />
    },
    {
        id: 4,
        name: "Keuangan",
        link: "/",
        icon: <IoCashOutline className="text-xl" />
    },
    {
        id: 5,
        name: "Layanan Lainnya",
        link: "/",
        icon: <IoEllipsisHorizontalCircle className="text-xl" />
    }
];
export const MenuItems = [
    {
        id: 1,
        name: "Daftar Transaksi",
        link: "/",
        icon: <IoReaderOutline className="text-xl" />
    },
    {
        id: 2,
        name: "Wishlist",
        link: "/",
        icon: <IoHeartOutline className="text-xl" />
    },
    {
        id: 3,
        name: "Ulasan",
        link: "/",
        icon: <CiStar className="text-xl" />
    },
    {
        id: 4,
        name: "Toko yang di-follow",
        link: "/",
        icon: <IoStorefrontOutline className="text-xl" />
    },
    {
        id: 5,
        name: "Pesanan Dikomplain",
        link: "/",
        icon: <RiUserForbidLine className="text-xl" />
    },
    {
        id: 6,
        name: "Bantuan Tokopedia Care",
        link: "/",
        icon: <RiCustomerService2Line className="text-xl" />
    },
    {
        id: 7,
        name: "Scan Kode QR",
        link: "/",
        icon: <IoQrCodeOutline className="text-xl" />
    }
];
