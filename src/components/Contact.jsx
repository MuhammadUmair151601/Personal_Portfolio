import {
  MapPin,
  Mail,
  Phone,
  BadgeCheck,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-170 bg-gray-900 flex flex-wrap text-gray-300"
    >
      <div className="p-20 h-10 w-full">
        <h1 className="text-3xl font-bold text-center">
          Get in <span className="text-orange-400">Touch</span>
        </h1>
        <p className="text-center">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
      </div>
      <div className="flex w-full h-110">
        <div className="w-1/2 h-120">
        <form className="flex flex-col gap-4 items-center justify-between" action="">
          <input className="py-4 rounded-[5px] p-2 w-105 outline-none bg-gray-700" type="text" placeholder="Your name" />
          <input className="py-4 rounded-[5px] p-2 w-105 outline-none bg-gray-700" type="text" placeholder="Email/Phone" />
          <textarea  className="py-4 rounded-[5px] p-2 w-105 outline-none bg-gray-700" name="" id="" placeholder="Your message detail"></textarea>
          <button className=" w-105 border-none bg-orange-400 text-xl font-bold rounded-[5px] py-4 hover:scale-105 hover:shadow-[0_0_25px_#f97316] cursor-pointer duration-300 text-black hover:text-white" type="submit ">Send Message</button>
        </form>
        </div>
        <div className=" w-1/2 ">
          <div className="w-full h-1/6 p-10">
            <div className="flex gap-5 text-2xl font-bold justify-start items-center">
              <MapPin size={30} /> <h1>Location</h1>
            </div>
            <h1 className="text-lg  ml-12">Peshawar,Pakistan.</h1>
          </div>
          <div className="w-full h-1/6 p-10">
            <div className="flex gap-5 text-2xl font-bold justify-start items-center">
              <Mail size={30} /> <h1>Email</h1>
            </div>
            <h1 className="text-lg  ml-12">muhammadumair4105@gmail.com</h1>
          </div>
          <div className="w-full h-1/6 p-10">
            <div className="flex gap-5 text-2xl font-bold justify-start items-center">
              <Phone size={30} /> <h1>Phone</h1>
            </div>
            <h1 className="text-lg  ml-12">03038951047</h1>
          </div>
          <div className="w-full  h-1/6 p-8">
            <div className="flex gap-5 text-2xl font-bold justify-start items-center ml-2 ">
              <BadgeCheck size={30} /> <h1>Follow me on</h1>
            </div>
            <div className="flex gap-4 text-white mt-2 ml-10 pt-3">
              <a
                href="https://github.com/MuhammadUmair151601"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:bg-orange-400 rounded-[50%] h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316] duration-300"
              >
                <Github size={30} />
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-umair-a7b10a2b2/"
                target="_blank"
                rel="noopener noreferrer"
               className="transition hover:text-black hover:bg-orange-400 rounded-[50%] h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316] duration-300"
              >
                <Linkedin size={30} />
              </a>

              <a
                href="https://www.facebook.com/mumair.umair.9022"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-black hover:bg-orange-400 duration-300 rounded-[50%] h-10 w-10 flex items-center justify-center shadow-[0_0_25px_#f97316]"
              >
                <Facebook size={30} />
              </a>
            </div>
          </div>
        </div>
        
      </div>
      <div className="w-full bg-gray-800  py-5">
        <h1 className="ml-110">© 2025 Created By MuhammadUmairCodes. All rights reserved.</h1>
        </div>
    </section>
  );
};

export default Contact;
