import React from "react";
import Image from "next/image";

const Portfolio = () =>{
    return(
        <div className="bg-white py-15">
            <h1 className="text-beige-800 text-3xl md:text-5xl flex justify-center mb-12">
               PORTFOLIO
            </h1>

            <div className="bg-beige-50 p-5 md:p-20 md:mx-20">
                <div className="leading-10 flex  justify-between flex-col md:flex-row gap-20">
                    <span className="text-md pt-20"> 
                        <h2 className="text-2xl font-medium text-beige-900 pb-10">Portfolio je trenutno u izradi.</h2>
                        Do tada, slobodno nas kontaktirajte za sve upite – uvijek smo dostupni! <br /> 
                        Također, naše radove možete pogledati i na našem  
                        <a href="https://www.instagram.com/helenas.photoart/?igsh=MTM4YXphYWZ6c2E4cg%3D%3D#" 
                        className="text-beige-800 font-bold hover:underline"> Instagram profilu :)</a>
                        <br />
                        <a href="/kontakt" className="flex justify-center md:justify-start">
                        <button className="mt-6 bg-beige-800 text-beige-100 px-6 py-2 rounded-4xl font-medium hover:bg-beige-200 hover:text-beige-800 transition">
                            kontaktirajte nas
                        </button>
                    </a>
                    </span>

                    <Image
                    src="/portfolio.jpg" 
                    alt="outdoor photoshoot" 
                    height={200}
                    width={300}
                    className="w-full md:w-1/2 h-auto"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;