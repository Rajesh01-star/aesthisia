import styles from "../styles/Form.module.css"

import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SideShow() {  
  return (
      <div className='h-full w-full p-6 flex justify-center items-center'>
          <div className={`${styles.sideImg} h-full w-full mt-20 text-white flex flex-col p-10`}>
            <div className="h-[50%]">
              <img src="/icons.png" className="md:w-[2rem] sm:w-[1rem]" />
            </div>
            <div className="h-[30%]">
              <h1 className="text-5xl font-bold leading-[5rem]">100% Uptime 😎</h1>
              <p className="text-4xl capitalize w-[40%] mb-4">zero infrastructure management</p>
              <img src="#" alt="dots" />
            </div>
            <div className="flex justify-between mt-10">
            <p><span>
                <img src="/world.svg" className="inline mr-1" />
              </span><span>aesthisia.com</span></p>
              <ul className="w-[5rem] flex justify-between">
                <li><FaLinkedinIn /></li>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
