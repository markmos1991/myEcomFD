import React from 'react'

const FeatureSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-blue-500 bg-blue-100 rounded-full sm:w-32 sm:h-32 sm:mr-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Experience</h2>
            <p className="text-base leading-relaxed">
              With over 12 years of invaluable experience in the accountancy and finance sector, we bring a wealth of expertise to the table. Our track record includes a successful 4-year partnership with Nadine Merabi Ltd, where we played a pivotal role in driving their remarkable growth from £2 million to over £30 million in turnover. Trust in our proven ability to navigate financial landscapes and propel your business towards unprecedented success.</p>
            <a className="inline-flex items-center mt-3 text-blue-500">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10 mx-auto mb-10 border-b border-gray-200 lg:w-3/5 sm:flex-row">
          <div className="flex-grow mt-6 text-center sm:text-left sm:mt-0">
            <h2 className="mb-2 text-lg font-medium text-gray-900 title-font">Why our clients choose us</h2>
            <p className="text-base leading-relaxed">We're not your typical accountant. With a down-to-earth and jargon-free approach, we make finance easy to understand. Our helpful and understanding team is dedicated to supporting your unique needs. We offer flexibility, tailoring our services to meet your specific requirements. Experience a simplified financial journey and unlock the full potential of your business with us.</p>
            <a className="inline-flex items-center mt-3 text-blue-500">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="inline-flex items-center justify-center flex-shrink-0 order-first w-20 h-20 text-blue-500 bg-blue-100 rounded-full sm:w-32 sm:order-none sm:h-32 sm:ml-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 sm:w-16 sm:h-16" viewBox="0 0 24 24">
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto lg:w-3/5 sm:flex-row">
        
        
        </div>
     
      </div>
    </section>
  )
}

export default FeatureSection