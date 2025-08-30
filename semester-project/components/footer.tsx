"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {PhoneIcon, PinIcon, MailIcon} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

const Footer = () => {
    
    const links = [
    
        { name:"O MENI", href:"/" },
        { name:"PORTFOLIO", href:"/portfolio"},
        { name:"USLUGE", href:"/usluge" },
        { name:"KONTAKT", href:"/kontakt" },
        { name:"PRIJAVA", href:"/prijava"}
    ];

    return(
        <footer className="w-full bg-beige-50 py-8 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between 
            items-center md:items-start text-center md:text-left gap-8 md:gap-0">
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <div className="flex items-center gap-2 ">
                        <Image src="/logo.png" alt="Logo" width={100} height={100}/>
                        <span className="font-normal md:text-3xl text-xl -ml-3 pt-3">HELENA ART</span> 
                    </div>
                   <span className="md:ml-5 max-w-xs">Zabilježimo najljepše trenutke Vašega života.</span>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-3">Navigacija</h1>
                    <ul className="space-y-2 text-sm">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-beige-900 hover:font-bold transition">
                                    {link.name}
                                </Link>
                            </li>
                         ))}
                    </ul>
                </div>

                <div>
                    <h1 className="text-xl font-semibold mb-3">Kontakt</h1>
                    <ul className="space-y-2 text-sm mb-5 flex flex-col items-center md:items-start md:text-left">
                        <li className="flex items-center gap-2">
                            <PinIcon size={16}/>
                            <span>Brnaze 168D</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <PhoneIcon size={16}/>
                            <span>+385 97 726 1492</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <MailIcon size={16}/>
                            <span>helenas.photoart@gmail.com</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl -ml-1"/>
                            <span className="-ml-1">helenas.photoart</span>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="mt-10 text-center text-xs font-semibold">
                © {new Date().getFullYear()} Helena Art. Sva prava pridržana.
            </div> 
        </footer>

    );


};

export default Footer;