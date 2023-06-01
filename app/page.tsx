import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import FormSection from "./components/FormSection"
import SideShow from "./components/SideShow";

export default function Form() {  
  return (
    <section className='h-[70rem] md:h-screen w-screen flex flex-col-reverse md:flex md:flex-row justify-center items-center' >
        {/* image section */}
      <SideShow />
      {/* form section */}
        <FormSection />
    </section>
  )
}
