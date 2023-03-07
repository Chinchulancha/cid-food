import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

import Error from "./Error";


const Form = ({clicked}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    

    //Validacion del Form
    if ([name, email, phone, message].includes("")) {
      setError(true);

    } else {

      setName('')
      setEmail('')
      setPhone('')
      setMessage('')

      setError(false);

      swal("Enviado con éxito!", "Le responderemos a la brevedad", "success");
      
      sendEmail();
    }
  };

  const asignarValueInputs = (e) => {
    if (e.target.id == "name") {
      setName(e.target.value);
    } else if (e.target.id == "email") {
      setEmail(e.target.value);
    } else if (e.target.id == "phone") {
      setPhone(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_v3my8kf",
        "template_3ht0y6c",
        form.current,
        "RgozR5sdSOUnnJVTL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

 
  return (
    <form data-aos={clicked ? null : "zoom-in"} className="lg:w-2/5" ref={form} onSubmit={handleSubmit}>
        <div className="w-full h-full bg-yellow text-yellow rounded p-12 pb-8">
    <h3 data-aos={clicked ? null : "fade-down"} data-aos-duration="800" id="contacto" className="bg-red transition-all duration-500 ease-in-out mb-14 rounded text-center text-2xl md:text-3xl py-5 uppercase">Formulario de Contacto</h3>
    {error && <Error mensaje={'Todos los campos son obligatorios'}/> }
            <div className="flex flex-col gap-y-4 mb-16">
                
            <input
            data-aos={clicked ? null : "fade-right"} data-aos-duration="600"
            type="text"
            value={name}
            placeholder="Nombre Completo"
            className="bg-red placeholder-yellow text-center p-3 rounded-lg md:text-xl"
            name="user_name"
            onChange={asignarValueInputs}
            id="name"
          />
          <input
          data-aos={clicked ? null : "fade-left"} data-aos-duration="800"
            type="email"
            value={email}
            placeholder="E-mail"
            className="bg-red placeholder-yellow text-center p-3 rounded-lg md:text-xl"
            name="user_email"
            onChange={asignarValueInputs}
            id="email"
          />
          <input
          data-aos={clicked ? null : "fade-right"} data-aos-duration="600"
            type="number"
            value={phone}
            placeholder="Teléfono"
            className="bg-red placeholder-yellow text-center p-2 rounded-lg md:text-xl"
            name="user_phone"
            onChange={asignarValueInputs}
            id="phone"
          />

          <textarea
          data-aos={clicked ? null : "fade-left"} data-aos-duration="800"
            cols="5"
            rows="5"
            value={message}
            placeholder="Mensaje"
            className="bg-red placeholder-yellow text-center p-2 rounded-lg md:text-xl resize-none"
            name="message"
            onChange={asignarValueInputs}
            id="message"
          ></textarea>
            </div>
            
            <div className="text-center w-full">
          <input
            type="submit"
            value="Enviar"
            className="uppercase cursor-pointer text-xl text-yellow tracking-wide duration-700 py-2 px-16 md:px-24 transition rounded  bg-red hover:scale-110"
          />
        </div>
        
        </div>
    </form>
  );
};

export default Form;
