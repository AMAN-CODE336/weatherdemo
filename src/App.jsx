import { useState } from "react";
import { IoPartlySunnyOutline } from "react-icons/io5";
import axios from "axios"

const app = () => {
  const [city, setCity] = useState("");
  const [wheatherData, setWheatherData] = useState(null);

  const fetchWeatherData = async () => {
    const Api_key = "0424fe175ce7121995a8c0ded95d3dcb"
    const Api_endpoint =
      `https://api.openweathermap.org/data/2.5/weather?appid=${Api_key}&q=${city}&units=metric`;
    
      try{
        const response = await axios.get(Api_endpoint)

        setWheatherData(response.data)
        console.log(response.data)
      }catch (error){
console.log("error fetching weather data" , error)
      }
  };

  function handlesubmit(e){
    e.preventDefault()
    fetchWeatherData()
  }

  return (
    <>
      <section className="bg-[url(https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-some-clouds-are-shown-in-a-blue-sky-image_2514945.jpg)] bg-no-repeat bg-cover h-screen w-screen"> 
      <div className="flex flex-col items-center ">
        <div className="flex justify-center gap-2 items-center pt-28">
          <span className="text-5xl font-semibold">
            <IoPartlySunnyOutline />
          </span>
          <h2 className="text-2xl font-semibold">
            𝚆𝚎𝚊𝚝𝚑𝚎𝚛 <br /> 𝚁𝚎𝚙𝚘𝚛𝚝
          </h2>
        </div>
        <div className=" flex flex-col  items-center lg: w-[45%] sm: w-[70%] mt-8">
          <form
            action=""
            onSubmit = {handlesubmit}
            className="  bg-blur p-8 rounded-lg   shadow-lg w-full max-w-md"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-xl">Enter your state or city :</h2>
              <input
                type="text"
                placeholder="Enter city name"
                className=" border-2 border-black w-full p-2 rounded-md placeholder : text-center text-black"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />

              <button 
              onClick={fetchWeatherData}
              className="border p-2 w-full rounded-md ">
                see wheather forecast
              </button>
            </div>
          </form>
        </div>
        {wheatherData && (
          <div className=" bg-blur   rounded-lg mt-16  shadow-lg w-full max-w-md">
            <div>
             <h2 className="text-black text-xl font-semibold">
             Weather in {wheatherData.name}, {wheatherData.sys.country}
              </h2> 
              <p>Humidity : {wheatherData.main.humidity}%</p>
              <p>Tempreature is : {wheatherData.main.temp}°C</p>
              <p>Wheather condition is <b>{wheatherData.weather[0].description}</b></p>
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
};
export default app;
