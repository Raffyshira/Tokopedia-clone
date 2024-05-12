import React from "react";

import {
    Link,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Divider,
    Button,
    Image
} from "@nextui-org/react";

export const LocationModal = ({
    IsiHeader,
    IsiBody,
    placement,
    size,
    options,
    color,
    variant,
    width,
    ukuran
}) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button
                className={`text-tiny font-semibold w-${width}`}
                size={ukuran}
                color={color}
                onPress={onOpen}
                variant={variant}
            >
                {options}
            </Button>
            <Modal
                isOpen={isOpen}
                placement={placement}
                onOpenChange={onOpenChange}
                size={size}
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {IsiHeader}
                            </ModalHeader>
                            <ModalBody>{IsiBody}</ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export const ModalDeskripsi = ({ children }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Link className="text-sm" color="success" onPress={onOpen}>
                Baca Selengkapnya
            </Link>
            <Modal
                isOpen={isOpen}
                placement="bottom"
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size="full"
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Detail Produk
                            </ModalHeader>
                            <ModalBody>{children}</ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
export const ModalOngkir = ({ children, options, placement, size, header }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Link className="text-base" className="text-black" onPress={onOpen}>
                {options}
            </Link>
            <Modal
                isOpen={isOpen}
                placement={placement}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                size={size}
            >
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {header}
                            </ModalHeader>
                            <ModalBody>{children}</ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};
