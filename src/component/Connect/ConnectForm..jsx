// import React from 'react'

// export default function ConnectForm.() {
//   return (
    
//         <Modal onCloseHandler={handleCloseModal}>
//           <div className="p-6 font-sans">
//             <div className="gap-8  bg-yellow-400 md:p-10 rounded-xl 0 p-10 w-full md:w-[400px]">
//               <h3 className="text-black text-4xl font-bold mb-10 text-center">
//                 CONNECT YOUR  WALLET
//               </h3>

//               <p className='text-black text-center mb-7'>Selected Wallet: {activeWallet}</p>

//               <div className="flex flex-col  gap-7">
//                 <button
//                   onClick={handleAutoConnect}
//                   className="bg-yellow-300   rounded-md px-5 py-2 "
//                 >
//                   {!isLoading ? "Connect" : "Syncronizing..."}
//                 </button>
//                 <div className="text-center">
//                   {isError && (
//                     <p className="text-red-500 text-[14px] italic">
//                       Error Connecting to {activeWallet}!
//                     </p>
//                   )}
//                 </div>
//                 {isError === true && (
//                   <div>
//                     <Link to="/submit">
//                       <button className="bg-yellow-300 w-full rounded-md px-5 py-2 ">
//                         Connect manually
//                       </button>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </Modal>
      
//   )
// }
