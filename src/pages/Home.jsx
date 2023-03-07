import IgButton from "../components/IgButton";
import WspButton from "../components/WspButton"; 
import TextInfo from "../components/textInfo"
import PorqueCidFood from "../components/PorqueCidFood";
import Contacto from "../components/Contacto";


const Home = ({clicked}) => {
  return (
    <div className="flex justify-center flex-col">
      <div className="fixed hidden md:flex mr-8 mb-8 bg-yellow z-50 shadow-lg bottom-0 right-0 p-1 gap-x-3 rounded-xl">
        <IgButton />
        <WspButton />
      </div>

      <div className="w-full bg-yellow text-white flex justify-center items-center flex-col gap-y-12 py-24">
        <TextInfo clicked={clicked}/>
      </div>

      <div className="w-full text-white bg-red flex flex-col justify-center items-center py-24">
        <PorqueCidFood clicked={clicked}/>
      </div>

      <div className=" text-yellow bg-blue pt-20 flex justify-center items-center flex-col gap-y-16">
       <Contacto clicked={clicked}/>
      </div>
    </div>
  );
};

export default Home;
