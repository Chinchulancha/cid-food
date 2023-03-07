import Form from "./Form"

const Contacto = ({clicked}) => {
  return (
    <>
       <div data-aos={clicked ? null : "fade-down"} className="mb-16  flex flex-col gap-y-3 text-white text-center">
       <h3 className="text-6xl">Contáctanos</h3>
       <p>Tu Consulta es Bienvenida</p>
      </div>

      <div className='flex justify-center flex-col gap-y-10 items-center grid-cols-1 grid-rows-2  w-full place-items-center'>
        <Form clicked={clicked}/>
        <div className="bg-black w-full hidden md:flex justify-around"><a target="_blank" href="https://api.whatsapp.com/send?phone=1123208126">112 320 8126 - WHATSAPP</a><a target="_blank" href="https://www.instagram.com/cid_food/">cid_food - INSTAGRAM</a><a href="mailto:megustacid@gmail.com">megustacid@gmail.com</a></div>
      </div>
    </>
  )
}

export default Contacto