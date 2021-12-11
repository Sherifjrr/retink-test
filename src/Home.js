import Logo from "./images/Icon.png";
import Character from "./images/character.png";

const Home = () => {
  return (
    <section className=" bg-Hero bg-cover xl:bg-100% bg-no-repeat font-sans flex flex-wrap lg:flex-nowrap h-full">
      <div className=" w-full lg:w-1/2 p-12 md:p-16 pt-8 lg:pt-20 lg:pl-24 xl:pt-24 lg:pr-1">
        <h1 className="text-white text-5xl font-bold my-8">
          What are you looking for?
        </h1>
        <div className="bg-white flex w-full xl:w-11/12 rounded-xl shadow-lg p-6">
          <img src={Logo} alt="Logo" className="h-12 w-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold mb-4">
              help me create a Marketing Plan!
            </h2>
            <p className="text-gray-400">
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that
            </p>
          </div>
        </div>
        <div className="bg-white flex w-full xl:w-11/12 rounded-xl shadow-lg p-6 mt-8">
          <img src={Logo} alt="Logo" className="h-12 w-12 mr-4" />
          <div>
            <h2 className="text-xl font-bold mb-4">
              I know what i am looking for.
            </h2>
            <p className="text-gray-400">
              The Arctic Ocean freezes every winter and much of the sea-ice then
              thaws every summer, and that
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 lg:mr-4 lg:mt-40">
        <img
          src={Character}
          alt="Retink Character"
          className="character md:w-full"
        />
      </div>
    </section>
  );
};

export default Home;
