'use client'
import { auth } from "@/lib/firebase";
import React from "react";

const Dashboard = () =>{
    const user = auth.currentUser;

    return(
        <div className="bg-white py-15">
            <h1 className="text-beige-800 font-bold text-2xl flex mx-5 md:mx-20 mb-12">
                Pozdrav, {user?.displayName}
            </h1>

        <div className="bg-beige-50 p-5 md:p-20 md:mx-20">
            <div className="leading-8 flex justify-between flex-col md:flex-row gap-20">
                <span className="text-md">

                    <h2 className="text-2xl font-medium text-beige-900 pb-6">
                        Vaše fotografije na jednom mjestu
                    </h2>

                    Nakon što rezervirate i obavite fotografiranje, ovdje ćete pronaći 
                    sve svoje fotografije spremne za pregled i preuzimanje. <br />
                    U međuvremenu, možete provjeriti detalje svojih termina ili nas 
                    kontaktirati za sve dodatne informacije.
                    <br />
                    <a href="/kontakt" className="flex justify-center md:justify-start">
                        <button 
                        className="mt-6 bg-beige-800 text-beige-100 px-6 py-2 rounded-4xl font-medium hover:bg-beige-200 hover:text-beige-800 transition">
                            kontaktirajte nas
                        </button>
                    </a>
                </span>
            </div>
        </div>

    </div>
)}

export default Dashboard;