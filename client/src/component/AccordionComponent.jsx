import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export const TemplateAccordion = ({ children, title, label, key }) => {
    return (
        <>
            <Accordion
                defaultExpandedKeys={["2"]}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1
                                }
                            }
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3
                                }
                            }
                        }
                    }
                }}
                className="-ml-2"
            >
                <AccordionItem key={key} title={title} label={label}>
                    {children}
                </AccordionItem>
            </Accordion>
        </>
    );
};
export const AccordionBalasan = ({ children, title, label }) => {
    return (
        <>
            <Accordion
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            height: "auto",
                            transition: {
                                height: {
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 30,
                                    duration: 1
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 1
                                }
                            }
                        },
                        exit: {
                            y: -10,
                            opacity: 0,
                            height: 0,
                            transition: {
                                height: {
                                    easings: "ease",
                                    duration: 0.25
                                },
                                opacity: {
                                    easings: "ease",
                                    duration: 0.3
                                }
                            }
                        }
                    }
                }}
                isCompact
                className="-ml-2"
            >
                <AccordionItem
                    title={<div className="text-base">{title}</div>}
                    label={label}
                >
                    {children}
                </AccordionItem>
            </Accordion>
        </>
    );
};
