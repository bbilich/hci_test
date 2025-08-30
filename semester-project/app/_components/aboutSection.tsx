import React from "react";

type DescProps = {
  children: string;
};

const Description = ({ children }: DescProps) => (
  <p className="bg-beige-50 flex items-center justify-center px-10 md:py-0 py-4 leading-7">
    {children}
  </p>
);

const About = () => {
    return(
        <section className="bg-white md:px-20 py-4">
            <h1 className="text-3xl md:text-5xl px-10 text-beige-900">DOBRO DOŠLI!</h1>

            <div className="md:py-20 py-10">
                <div className="flex justify-between flex-col md:flex-row gap-8">
                    <Description>
                        Helena Art je studio smješten u Brnazama, nedaleko od Sinja, 
                        specijaliziran za obiteljsko fotografiranje. Naša misija je zabilježiti najvažnije i 
                        najemotivnije trenutke u vašem životu – od prvih osmijeha vaših mališana, 
                        preko krštenja i vjenčanja, pa sve do nezaboravnih obiteljskih i božićnih slikanja. 
                        Fotografiranje se odvija prema vašim željama – bilo na lokaciji po izboru, 
                        u našem studiju ili u toplini vašeg doma, 
                        prilagođavamo se vama kako biste se osjećali prirodno i opušteno pred objektivom.
                    </Description>
                    <img src="/about1.jpg" alt="pregnancy photoshoot" className="w-full md:w-1/2 h-auto"/>
                </div>

                <div className="flex justify-between flex-col md:flex-row gap-8 py-10">

                    <Description>
                        Iako nam je primarni fokus obiteljska fotografija, s jednakom strašću pristupamo i poslovnim projektima. 
                        Iza nas su suradnje s raznim klijentima – od kozmetičkih salona, poliklinika, 
                        pa do yoga studija i drugih događaja gdje je 
                        važno profesionalno predstaviti brend kroz fotografiju.
                    </Description>

                    <img src="/about2.jpg" alt="pregnancy photoshoot" className="w-full md:w-1/2 h-auto"/>
                </div>

                <div className="flex justify-between flex-col md:flex-row gap-8 pb-20">

                    <Description>
                        S posebnim naglaskom na prirodne emocije, nježne detalje i toplinu obiteljskih odnosa, 
                        svaka fotografija iz našeg studija priča priču punu ljubavi. Vjerujemo da pravi trenuci dolaze spontano, 
                        a naša uloga je da ih uhvatimo upravo takvima kakvi jesu – iskreni, stvarni i nezaboravni.
                    </Description>

                    <img src="/about3.jpg" alt="pregnancy photoshoot" className="w-full md:w-1/2 h-auto"/>
                </div>

                <div className="bg-beige-50 flex flex-col items-center text-center px-10 py-10 gap-6">
                    <Description>
                        Zato nam dopustite da zajedno s vama stvorimo uspomene koje ćete s ponosom čuvati – 
                        jer najljepši trenuci zaslužuju ostati zauvijek.
                    </Description>

                    <a href="/kontakt">
                        <button className="mt-6 bg-beige-200 text-beige-800 px-6 py-4 rounded-4xl 
                        font-medium hover:bg-beige-800 hover:text-beige-100 transition">
                            kontaktirajte nas
                        </button>
                    </a>
                </div>
            </div>

        </section>
    );

};

export default About;