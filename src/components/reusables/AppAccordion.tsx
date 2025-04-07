"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
// import Icon from "./AppIcon";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
  

interface AppAccordionProps {
    children: React.ReactNode;
    title: string;
}

const AppAccordion = ({ children, title }: AppAccordionProps) => {
    const [value, setValue] = useState<string | undefined>("item-1");

    useEffect(() => {
        const handleResize = () => {
            setValue(window.innerWidth >= 640 ? "item-1" : undefined);
        };

        // Set initial state
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Accordion 
            type="single" 
            collapsible={true} 
            className="sm:collapsible-false"
            value={value}
            onValueChange={setValue}
        >
            <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger className="data-[state=open]:mb-4 sm:data-[state=open]:mb-0 [&[data-state=open]>svg]:rotate-180 border border-neutral-200 sm:border-0 rounded-sm p-4 flex items-center justify-between">
                    <span className="font-medium text-neutral-950">{title}</span>
                    <ChevronDown className="transition-transform duration-200 sm:hidden" />
                    {/* <Icon icon="chevron-down" width={20} height={20} className="transition-transform duration-200" /> */}
                </AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default AppAccordion;