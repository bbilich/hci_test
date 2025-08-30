import React from "react";

type Props = {
  title?: string;
  placeholder?: string;
  name?: string;

};

const ContactInfo = ({ title, placeholder, name }: Props) => (
  <div className="flex flex-col">
    <label className="mb-1 font-medium text-beige-900">{title}</label>
        <input
            type="text"
            className="bg-white p-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-beige-800"
            name={name}
            placeholder={placeholder}
            required
            />
        </div>
);

export default ContactInfo;