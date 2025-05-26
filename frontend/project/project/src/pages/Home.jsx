import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import hospital from '../images/hospital.jpg';

import { Link } from 'react-router-dom';




const Home = () => {
  const { ref, inView } = useInView({//ref: Yeh ek reference hai jo tum kisi element (jaise <div ref={ref}>) ko doge. Yeh batata hai browser ko "Is element ko observe karo jab yeh screen par aaye."
    triggerOnce: true,
    
  });

  return (
    <>
    

      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/cvjzdrw_RyE?autoplay=1&mute=1&loop=1&playlist=cvjzdrw_RyE&controls=0&rel=0&showinfo=0"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>


      <div className="pt-6 px-4 sm:px-6 lg:px-20">
  <div
    ref={ref}
    className="py-6 flex flex-wrap items-center justify-evenly text-white text-center font-bold"
    style={{ backgroundColor: "#A3272A" }}
  >
    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-2xl sm:text-3xl">
      <div><FontAwesomeIcon icon={faCircleUser} size="2x" className="mb-2" /></div>
      {inView ? <CountUp start={200} end={1588771} duration={3.9} /> : null}
      <p className="mt-2 text-base sm:text-lg">Visited Patients</p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-2xl sm:text-3xl">
      <div><FontAwesomeIcon icon={faUsers} size="2x" className="mb-2" /></div>
      {inView ? <CountUp start={10} end={1925} duration={3.9} /> : null}
      <p className="mt-2 text-base sm:text-lg">Ghurki Team</p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-2xl sm:text-3xl">
      <div><FontAwesomeIcon icon={faBed} size="2x" className="mb-2" /></div>
      {inView ? <CountUp start={10} end={650} duration={3.9} /> : null}
      <p className="mt-2 text-base sm:text-lg">Beds</p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 mb-6 text-2xl sm:text-3xl">
      <div><FontAwesomeIcon icon={faBuilding} size="2x" className="mb-2" /></div>
      {inView ? <CountUp start={10} end={311} duration={3.9} /> : null}
      <p className="mt-2 text-base sm:text-lg">Departments</p>
    </div>
  </div>
</div>

      
      
  <div className="max-w-3xl  px-4 py-12 ml-16">
  <h1 className="text-3xl md:text-4xl font-bold text-black">
    Welcome to <span className="text-[#A3272A]">Ghurki Trust Teaching Hospital</span>
  </h1>
  <p className="mt-4 text-gray-700 leading-relaxed text-justify">
    Millions of people in Pakistan suffer from health problems due to a lack of basic necessities.
    In this tough time, Ghurki Trust Teaching Hospital, a humble beginning in 1997 as a small dispensary,
    has grown into a beacon of hope over the past 26 years. From that day till date, it is not only a success story
    but an unprecedented blessing of Allah (SWT).
  </p>
</div>
<div className=" flex justify-center text-[#A3272A] items-center font-bold text-3xl">DEPARTMENTS</div>
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-8">
      {/* Card 1 */}
      <div className="w-full md:w-[48%] lg:w-[30%] border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500 mb-4"></div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">NEPHROLOGY</h3>
        <p className="text-gray-600 mb-4">
          The cutting-edge Nephrology Department at Ghurki Trust Teaching Hospital is spearheaded by the dynamic leadership...
        </p>
        <button className="mt-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          Read more
        </button>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-[48%] lg:w-[30%] border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500 mb-4"></div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">OPHTHALMOLOGY</h3>
        <p className="text-gray-600 mb-4">
          Led by Prof. Dr. Muhammad Shafique, our Ophthalmology Department, the hospital’s pioneer, has evolved into...
        </p>
        <button className="mt-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          Read more
        </button>
      </div>

      {/* Card 3 */}
      <div className="w-full md:w-[48%] lg:w-[30%] border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-500 mb-4"></div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">GASTROENTEROLOGY</h3>
        <p className="text-gray-600 mb-4">
          At GTTH’s Gastroenterology, Hepatology, and GI Endoscopy Division, excellence in digestive health is our mission...
        </p>
        <button className="mt-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
          Read more
        </button>
      </div>
    </div>
  </div>
 <div className="flex justify-center mt-6">
  <Link
    to="/department"
    className="flex justify-center items-center mt-2 px-4 py-2 border rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
  >
    See all Department
  </Link>
</div>
</section>
 


  <div className="flex flex-wrap">
    
  <div className="w-full sm:w-1/2 md:w-1/3 bg-[#A3272A]">
    <div className="text-white p-6">
      Our goal at Ghurki Trust Teaching Hospital is to be more than just a free medical facility; we also want to be a source of hope for people in need. We are pleased to present CyberKnife, the second robotic radiosurgery unit in Pakistan, which will provide our patients with cutting-edge treatment.

      We’ve become a leading Pakistan 1st Spine Center, offering specialized care that sets us apart. Additionally, our dedication extends to our renowned Dialysis Center, where we provide essential and advanced care to patients in need. Your donations have made the dream of Musafir Khana a reality, a comforting space for patient attendants during challenging times. It’s evidence of the caring atmosphere we work to establish.
    </div>
  </div>

<div className="w-full sm:w-1/2 md:w-1/3 bg-gray-200">
  <img
    src={hospital} // Replace with the actual path of your hospital image
    alt="Hospital"
    className="w-full h-full object-cover rounded-lg" // Ensures the image fills the entire container
  />
</div>



  
  <div className="w-full sm:w-1/2 md:w-1/3 bg-[#A3272A] ">
    
      <div className="group text-white text-xl  p-4 bg-[#A3272A] w-fit">
  <p className="group-hover:hidden font-bold"> 1) CyberKnife</p>
  <p className="hidden group-hover:block">Robotic Radio Surgery Unit
As the proud home of Pakistan's second robotic radio surgery unit, the CyberKnife, We Offer Read</p>
</div><br />
      <div className="group text-white text-xl font-bold p-4 bg-[#A3272A] w-fit">
  <p className="group-hover:hidden font-bold"> 2) Spine Center</p>
  <p className="hidden group-hover:block">Pakistan’s 1st Largest Spine Center
Recognized as a leading orthopedic center, our focus is on giving you comprehensive Read More</p>
</div><br />
      <div className="group text-white text-xl font-bold p-4 bg-[#A3272A] w-fit">
  <p className="group-hover:hidden font-bold">3) Dialysis Center</p>
  <p className="hidden group-hover:block">Our Dialysis Center, with 14 beds, is committed to providing free dialysis services to those in need, focusing on essential renal care. Read More</p>
</div><br />
      <div className="group text-white text-xl font-bold p-4 bg-[#A3272A] w-fit">
  <p className="group-hover:hidden font-bold">4) Musafir Khana</p>
  <p className="hidden group-hover:block">We understand the importance of support for patients' attendants. Our Musafir Khana provides a comforting space during challenging times,</p>
</div>
  </div>
  
  </div>



<div className="flex justify-center items-start font-bold text-4xl pt-10">PEOPLE SAY ABOUT US</div><hr className="w-40 border-t-4 border-red-600 mx-auto my-4" />

<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20"></div>
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
  
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <h1 className="font-bold text-4xl">Uzma Jilani</h1>
    
    <figure className="mt-10">
      <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
        <p>
          “The care I received was far more than what I expected. Although my stay at Ghurki Hospital was short, it was a pleasant experience in terms of accommodation, care and treatment. I found the staff caring, highly skilled & professional.”
        </p>
      </blockquote>
      
      <figcaption className="mt-10">
        <img
          className="mx-auto size-10 rounded-full"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">Uzma Jilani</div>
          <svg
            viewBox="0 0 2 2"
            width="3"
            height="3"
            aria-hidden="true"
            className="fill-gray-900"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>

        </div>
      </figcaption>
    </figure>
  </div>
</section>






    </>
  );
};

export default Home;
