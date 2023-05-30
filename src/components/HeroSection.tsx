import React from 'react'

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container flex flex-col items-center justify-center px-5 py-24 mx-auto">
    <img className="object-cover object-center w-5/6 mb-10 rounded lg:w-2/6 md:w-3/6" alt="hero" src="https://dummyimage.com/720x600"/>
    <div className="w-full text-center lg:w-2/3">
      <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">My ecommerce FD</h1>
      <p className="mb-8 leading-relaxed">We understand the unique challenges faced by e-commerce businesses. That's why we offer tailored solutions to meet all your financial needs. Whether you're a startup or a well-established business, we can work with you to develop a tailored financial plan that meets your specific needs and helps you achieve success.</p>
   
    </div>
  </div>
</section>
  )
}

export default HeroSection