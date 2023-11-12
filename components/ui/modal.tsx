"use-client"

import React from "react";

import 
{ Dialog,
DialogContent,
DialogHeader,
DialogTitle,
DialogDescription
} from "@/components/ui/dialog";


interface ModalProps {
    title: string;
    desc: string;
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

export const Modal : React.FC<ModalProps> = ({
    title,
    desc,
    isOpen,
    onClose,
    children
}) =>{
 const Onchange = (open:boolean) =>{
    if(!open){
        onClose();
    };
 }

 return (
    <Dialog open={isOpen} onOpenChange={Onchange}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{desc}</DialogDescription>
            </DialogHeader>
            <div>
                {children}
            </div>
        </DialogContent>
    </Dialog>
 )
}