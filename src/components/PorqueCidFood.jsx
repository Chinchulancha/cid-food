import { isMobile } from "react-device-detect";

const PorqueCidFood = ({clicked}) => {
  return (
    <>
      <h3 data-aos={clicked ? null : "fade-down"} className="mb-16 text-2xl text-center">
        <span>Porque elegir</span> {''}
        <span className="uppercase text-yellow text-5xl">cidfood</span>
      </h3>

      <div className="flex flex-col md:flex-row gap-y-10 md:gap-y-0 md:gap-x-10">
        <div data-aos={(!clicked && isMobile) ? "fade-left" : null} data-aos-offset="300"
     data-aos-easing="ease-in-sine" className=" border-blue border-4 p-20 w-52 rounded-full text-xl flex justify-center items-center hover:scale-110 transition-all">
          Variedad
        </div>
        <div data-aos={(!clicked && isMobile) ? "zoom-out-in" : null} data-aos-easing="ease-in-back"
     data-aos-delay="100" data-aos-offset="0" className="border-blue border-4 p-20 w-52 rounded-full text-3xl scale-110 flex justify-center items-center hover:scale-125 transition-all">
          Calidad
        </div>
        <div data-aos={(!clicked && isMobile) ? "fade-right" : null} data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="border-blue border-4 p-20 w-52  rounded-full text-xl flex justify-center items-center hover:scale-110 transition-all">
          Responsabilidad
        </div>
      </div>
    </>
  );
};

export default PorqueCidFood;
