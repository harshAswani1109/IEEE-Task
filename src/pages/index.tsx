import Head from "next/head";
import Image from "next/image";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { CgCalendarToday } from "react-icons/cg";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdOutlineNotificationImportant } from "react-icons/md";
import { RiSettings3Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crypto Task</title>
      </Head>
      <main>
        <div className="bg-gradient-to-r from-[#F6D1FC] to-[#B9D5FF] h-screen flex justify-between items-center">
          <div className="flex items-center justify-center gap-2 text-[#404040] text-6xl font-bold w-1/2">
            TaskMate <span className="text-[#9333EA]">UI</span>
          </div>
          <div className="flex-col justify-center items-center w-1/2 mr-20">
            <nav className="flex justify-evenly items-center bg-white h-12 text-xl rounded-lg gap-20">
              <button className="text-[#9333EA] font-bold">TaskMate</button>
              <ul className="flex justify-center items-center gap-8">
                <button className="text-[#9333EA]">Todo</button>
                <button>Project</button>
                <button>Team</button>
              </ul>
              <ul className="flex justify-center items-center gap-4">
                <button>
                  <BsFillMoonStarsFill />
                </button>
                <button className="text-[#9333EA] h-6 w-6">
                  <RiAccountCircleLine className="h-full w-full" />
                </button>
              </ul>
            </nav>
            <div className="flex mt-6">
              <div className="flex-col text-xl text-gray-500 w-3/12 h-96 ml-4">
                <div className="flex-col h-80 mt-4 ">
                  <div className="text-[#9333EA] gap-2 flex justify-start items-center">
                    <CgCalendarToday />
                    Today
                  </div>
                  <div className="gap-2 flex justify-start items-center my-4">
                    <TiWeatherPartlySunny />
                    My Day
                  </div>
                  <div className="gap-2 flex justify-start items-center">
                    <MdOutlineNotificationImportant />
                    Important
                  </div>
                </div>
                <div className="gap-2 flex justify-start items-center h-12">
                  <RiSettings3Fill />
                  Settings
                </div>
              </div>
              <div className="bg-white h-96 w-9/12 rounded-lg"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
