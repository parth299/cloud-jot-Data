import React from 'react';
import padlock from './Image/padlock.png';
import cloud from './Image/cloud.png';
import Notes from './Notes';
import AddNote from './AddNote';

export const Home = () => {

  return (
    <>
      <div className="mainHome min-h-screen bg-[#262626]">
        <div className="main h-2/6 md:h-4/6 flex md:flex-row justify-center items-center">
          <div className="md:w-10/12 bg-[#444445] text-white text-4xl lg:text-9xl p-8 md:p-10 rounded-md font-sans mt-8 md:mt-20 mb-8 md:mb-0 cursor-default">
            <span className="text-[#0E8DE2]">CloudJot</span>
            <br /> <span className="hover:text-[#0E8DE2] duration transition-all duration-300">E</span><span className="hover:text-[#0E8DE2] transition-all duration-300">l</span><span className="hover:text-[#0E8DE2] transition-all duration-300">e</span><span className="hover:text-[#0E8DE2] transition-all duration-300">v</span><span className="hover:text-[#0E8DE2] transition-all duration-300">a</span><span className="hover:text-[#0E8DE2] transition-all duration-300">t</span><span className="hover:text-[#0E8DE2] transition-all duration-300">e</span> <span className="hover:text-[#0E8DE2] duration transition-all duration-300">Y</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">o</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">u</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">r</span> <span className="hover:text-[#0E8DE2] duration transition-all duration-300">I</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">d</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">e</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">a</span><span className="hover:text-[#0E8DE2] duration transition-all duration-300">s</span>, Anytime, Anywhere
          </div>
          <div className="text-[#0E8DE2] mt-8 md:mt-0">
            {/* <button className="font-bold ml-4 md:ml-16 p-3 rounded-lg text-sm md:text-md">
              SET UP YOUR FREE ACCOUNT NOW
            </button> */}
          </div>
        </div>
        <div className="text-xl lg:text-2xl xl:text-4xl text-center lg:text-right pr-5 md:pr-20 font-bold mt-8 font-cursive text-white">
          STORE YOUR NOTES ON THE CLOUD <br /> USING CLOUDJOT
        </div>
        <div className="text-xl lg:text-2xl xl:text-4xl lg:pl-24 text-left lg:text-left font-bold mt-8 font-pixel text-white">
          Sign up to cloudJot <br />Now
        </div>
      </div>
      <div className="info min-h-screen mt-10">
        <div className="heading pl-4 md:pl-20 text-xl lg:text-4xl xl:text-8xl font-extrabold">WHY CLOUDJOT </div>
        <div className="section flex flex-col md:flex-row h-auto md:h-4/5 justify-evenly items-center mt-8 md:mt-12">
          <div className="left w-full md:w-5/12 border h-auto md:h-11/12 rounded-md bg-[#87878c] p-8 md:p-11 shadow-2xl hover:scale-105 transition-all duration-700 mb-8 md:mb-0">
            <img className="w-16 h-16 md:w-36 md:h-36 invert m-auto mt-4 md:mt-9" src={padlock} alt="" />
            <p className="text-white text-center text-lg lg:text-4xl xl:text-5xl mt-4 md:mt-10 font-bold">
              SECURED <span className="text-[#0E8DE2]">DATA</span> ON THE CLOUD
            </p>
            <p className="text-left text-sm md:text-lg mt-4 md:mt-10 font-bold mx-2 md:mx-5 pb-2 md:pb-10">
              We ensure that your data remains secured maintaining your privacy. Your privacy matters the most, so we
              provide you the secured connections to ensure your privacy
            </p>
          </div>
          <div className="right w-full md:w-5/12 border h-auto md:h-11/12 rounded-md bg-[#87878c] shadow-2xl hover:scale-105 transition-all duration-700 p-8 md:p-11">
            <img className="w-16 h-16 md:w-36 md:h-36 invert m-auto mt-4 md:mt-9" src={cloud} alt="" />
            <p className="text-white text-center text-lg lg:text-4xl xl:text-5xl mt-4 md:mt-10 font-bold">
              CLOUD <span className="text-[#0E8DE2]">STORAGE</span> UPTO 1 GB FREE
            </p>
            <p className="text-left text-sm md:text-lg mt-4 md:mt-10 font-bold mx-2 md:mx-5 pb-2 md:pb-10">
              Now you can store as many notes as you want to, directly on your own free cloud storage. Store as many
              notes as possible anywhere and anytime. So make as many notes as you want.
            </p>
          </div>
        </div>
      </div>

      <AddNote />

      <Notes />

      <div className="about bg-[#262626] mt-8 md:mt-16 flex items-center justify-evenly p-8">
        <ul className="text-white flex flex-col md:flex-row gap-4 md:gap-8">
          <li>Contact Us</li>
          <li>Help</li>
          <li>Terms & Conditions</li>
          <li>Privacy</li>
          <li>&copy; CloudJot</li>
        </ul>
      </div>

    </>
  );
};
