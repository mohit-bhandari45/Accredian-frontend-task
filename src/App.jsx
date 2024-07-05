import React, { useEffect, useState } from 'react';
import Modal from './components/Modal';
import ReferForm from './components/ReferForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useBooleanContext } from './context/context';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toastBool } = useBooleanContext()

  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    closeOnClick: true,
  }
  useEffect(() => {
    if (toastBool) {
      toast.success("Referred Successfully", toastOptions)
    }
  }, [toast])


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-[Helvetica]">
      <div className='py-3 bg-[#1a73e83a] flex justify-center items-center'>
        <span className='text-center md:text-left text-sm'>
          Navigate your ideal career path with tailored expert advice
          <span className='px-4 text-base text-[#1A73E8]'>Content Expert</span>
        </span>
      </div>

      <div className="navbar flex flex-col sm:flex-row justify-between items-center px-5 sm:px-10 py-4 sm:py-8">
        <div className="first flex justify-center items-center gap-3 sm:gap-5">
          <div className="logo text-center sm:text-left">
            <div className="name text-xl font-bold text-[#1A73E8] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">accredian</div>
            <div className="name text-xs sm:text-[9px]">credentials that matter</div>
          </div>
          <button className='px-3 sm:px-5 py-2 bg-[#1A73E8] text-white text-sm sm:text-base rounded-md transition-all duration-500 ease-in-out hover:bg-blue-700'>Courses</button>
        </div>

        <div className="second flex justify-center items-center gap-3 sm:gap-6 mt-3 sm:mt-0">
          <div className="refer transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">Refer & Earn</div>
          <div className="refer transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">Resources</div>
          <div className="refer transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer">About us</div>
          <div className="refer cursor-pointer px-3 sm:px-5 py-2 bg-[#94A3B833] rounded-md text-sm sm:text-base transition-all ease-in-out duration-300 hover:bg-[#3c434b51]">Login</div>
          <div className="refer cursor-pointer px-3 sm:px-5 py-2 bg-[#1A73E8] rounded-md text-white text-sm sm:text-base transition-all duration-500 ease-in-out hover:bg-blue-700">Try for free</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Refer & Earn Program</h1>
          <p className="text-lg mb-8">Start referring now and earn rewards!</p>
          <button
            onClick={openModal}
            className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-400 hover:text-white transition duration-300"
          >
            Refer Now
          </button>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How it Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md transition-all duration-500 hover:scale-105 cursor-pointer ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Step 1: Sign Up</h3>
              <p className="text-gray-700">
                Register for our Refer & Earn program with your email.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md transition-all duration-500 hover:scale-105 cursor-pointer ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Step 2: Refer Friends</h3>
              <p className="text-gray-700">
                Invite your friends using your unique referral link.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md transition-all duration-500 hover:scale-105 cursor-pointer ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Step 3: Earn Rewards</h3>
              <p className="text-gray-700">
                Get rewarded when your friends join and make purchases.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md transition-all duration-500 hover:scale-105 cursor-pointer ease-in-out">
              <h3 className="text-xl font-semibold mb-4">Step 4: Enjoy Benefits</h3>
              <p className="text-gray-700">
                Enjoy exclusive benefits and discounts as a referrer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-200 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Benefits of Referring</h2>
          <p className="text-lg text-gray-800">
            Join our program and reap the rewards of sharing our products!
          </p>
        </div>
      </section>

      {/* Modal for Referral Form */}
      {isModalOpen && <Modal onClose={closeModal}>
        <ReferForm />
      </Modal>}
      <ToastContainer />
    </div>
  );
}

export default App;
