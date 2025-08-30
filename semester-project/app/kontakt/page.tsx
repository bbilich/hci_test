'use client';
import React from "react";
import ContactInfo  from "../_components/contactInfo";

const Contact = () => {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "2401e255-cddc-4b4f-bce8-eb18e83008d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Vaš upit je uspiješno poslan!");
    }
  };

  return (
    <section className="bg-white py-16">
      <h1 className="text-beige-800 text-3xl md:text-5xl flex justify-center mb-12">
        KONTAKTIRAJTE NAS
      </h1>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 items-center px-6">
        
        <div className="flex justify-center">
          <img
            src="/contact2.jpg"
            alt="Obitelj"
            className="rounded-t-full shadow-lg w-full object-cover"
          />
        </div>

        <div>
          <form onSubmit={onSubmit} className="bg-beige-200 rounded-2xl shadow-lg p-8 space-y-8">
            
            <ContactInfo title="Ime" placeholder="Unesite ime" name="ime" />
            <ContactInfo title="Prezime" placeholder="Unesite prezime" name="prezime" />
            <ContactInfo title="E-mail" placeholder="Unesite svoj e-mail" name="email" />


            <div className="flex flex-col">
              <label className="mb-1 font-medium text-beige-900">Upit</label>
              <textarea
                className="bg-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-beige-800"
                name="message"
                rows={4}
                placeholder="Ovdje unesite upit"
                required>
                </textarea>
            </div>

            <button
              type="submit"
              className="bg-white hover:bg-beige-100 text-beige-800 font-medium 
              px-6 py-3 rounded-full shadow-md transition duration-200">
              Pošaljite upit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
 };

export default Contact;

