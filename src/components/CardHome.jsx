import frutas from "../assets/card_images/frutas.png";

const CardHome = () => {
  return (
    <div className=" bg-yellow rounded flex flex-col md:flex-row lg:flex-col">
      <div>
        <img className="w-full" src={frutas} alt="Frutas CidFood" />
      </div>

      <div className="p-5 flex flex-col justify-between gap-y-10">
        
        <button className="bg-red text-white rounded py-4 cursor-pointer transition">
          <span>Ver Frutas</span>
        </button>
      </div>
    </div>
  );
};

export default CardHome;
