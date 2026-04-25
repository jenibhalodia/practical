import {
  Collapse,
  initTWE,
} from "tw-elements";

initTWE({ Collapse });

function Accordian() {

  return (
<div id="accordionExample" className='h-screen flex flex-col  justify-center gap-1'>
    <div className='font-bold text-xl'>ESim FAQ</div>
  <div
    className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingOne">
      <button
        className="group relative flex w-full items-center rounded-t-lg border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne">
      <div className='text-black flex justify-between w-full'> What is an eSIM?
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </div>
        
      </button>
    </h2>
    <div
      id="collapseOne"
      className="!visible"
      data-twe-collapse-item
      data-twe-collapse-show
      aria-labelledby="headingOne"
      data-twe-parent="#accordionExample">
      <div className=" text-gray-900">
        An eSIM (embedded SIM) is a digital SIM card built directly into your device. It allows you to activate cellular plans digitally without needing a physical SIM card.
      </div>
    </div>
  </div>
  <div
    className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="mb-0" id="headingTwo">
      <button
        className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10 "
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo">
        <div className = "text-black flex justify-between  w-full">Which devices support eSIM?
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        </div> 
      </button>
    </h2>
    <div
      id="collapseTwo"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingTwo"
      data-twe-parent="#accordionExample">
      <div className=" text-gray-900 px-2">
     Many modern smartphones support eSIM, including recent iPhone models (iPhone XS and newer), Google Pixel phones, Samsung Galaxy devices, and select iPads
      </div>
    </div>
  </div>
  <div
    className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseThree"
        aria-expanded="false"
        aria-controls="collapseThree">
       <div className='text-black flex justify-between  w-full'> Can I use both eSIM and physical SIM simultaneously?
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        </div>
      </button>
    </h2>
    <div
      id="collapseThree"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingThree"
      data-twe-parent="#accordionExample">
      <div className=" text-gray-900 px-2">
       Yes, most eSIM-compatible devices support Dual SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time.
      </div>
    </div>
  </div>
   <div
    className="rounded-lg border  border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseFour"
        aria-expanded="false"
        aria-controls="collapseFour">
       <div className='text-black flex justify-between  w-full'>How do I activate an eSIM?
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        </div>
      </button>
    </h2>
    <div
      id="collapseFour"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingFour"
      data-twe-parent="#accordionExample">
      <div className=" text-gray-900 px-2">
To activate an eSIM, you typically scan a QR code provided by your carrier or enter the activation details manually in your device settings      </div>
    </div>
  </div>
   <div
    className="rounded-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-body-dark">
    <h2 className="accordion-header mb-0" id="headingThree">
      <button
        className="data-[twe-collapse-collapsed] group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none data-[twe-collapse-collapsed]:rounded-b-lg dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary  dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
        type="button"
        data-twe-collapse-init
        data-twe-collapse-collapsed
        data-twe-target="#collapseFive"
        aria-expanded="false"
        aria-controls="collapseFive">
       <div className='text-black flex justify-between  w-full'>What are the advantages of using an eSIM?
        <span
          className="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
        </div>
      </button>
    </h2>
    <div
      id="collapseFive"
      className="!visible hidden"
      data-twe-collapse-item
      aria-labelledby="headingFive"
      data-twe-parent="#accordionExample">
      <div className=" text-gray-900">       
        eSIMs offer several benefits: easy switching between carriers, no physical SIM card needed, ability to store multiple profiles, and environmentally friendly.      </div>
    </div>
  </div>
</div>
  )
}

export default Accordian
