import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import FormSection from "./components/FormSection"
import SideShow from "./components/SideShow";

export default function Form() {  
  return (
    <section className='h-screen w-screen flex sm:flex sm:flex-col-reverse justify-center items-center' >
        {/* image section */}
      <SideShow />
      {/* form section */}
        <FormSection />
    </section>
  )
}
