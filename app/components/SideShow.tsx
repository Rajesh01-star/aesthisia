import styles from "../styles/Form.module.css"

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import {HiOutlineDotsHorizontal} from "react-icons/hi"

export default function SideShow() {  
  return (
      <div className='h-full w-full p-6 flex justify-center items-center'>
          <div className={`${styles.sideImg} h-full w-full mt-20 text-white flex flex-col p-10`}>
            <div className="h-[10%] md:h-[50%]">
              <img src="/icons.png" className="w-[3rem] md:w-[5rem]" alt="icons"/>
            </div>
            <div className="h-[40%] md:h-[30%]">
              <h1 className="text-3xl md:text-5xl font-bold leading-[5rem] md:leading-[6rem]">100% Uptime 😎</h1>
              <p className="text-lg md:text-3xl capitalize w-[60%] md:w-[45%] mb-4">zero infrastructure management</p>
              <HiOutlineDotsHorizontal />
            </div>
            <div className="flex justify-between mt-4 md:mt-4">
            <p><span>
                <img src="/world.svg" className="inline mr-1" />
              </span><span>aesthisia.com</span></p>
              <ul className="w-[5rem] flex justify-between">
                <li><FaLinkedinIn className="hover:scale-125 hover:cursor-pointer transition-all ease-in-out" /></li>
                <li><FaFacebookF className="hover:scale-125 hover:cursor-pointer transition-all ease-in-out" /></li>
                <li><FaInstagram className="hover:scale-125 hover:cursor-pointer transition-all ease-in-out" /></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
