import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";
import { motion } from "framer-motion";
import ProductCard from "../components/Landing/ProductCard.jsx";
import QuestionAnswer from "../components/Landing/QuestionAnswer.jsx";
import { faqs, products } from "../data/products.js";

export default function LandingPage() {
  const { theme } = useContext(ThemeContext);


  return (
    <>
      <section className="py-12 p-3 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text"
        >
          Madhur Dairy & Dairy Needs
        </motion.h1>

        <p className={`mt-4 text-lg ${theme === 'light' ? "text-gray-600" : "text-gray-300"}`}>
          Pure, Natural, and Nutritious Dairy Products Straight From Our Farms
        </p>
      </section>

      <section className="p-3 md:px-15 lg:px-25">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
            Our Premium Products
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
            Carefully crafted using traditional methods to preserve natural goodness and flavor.
          </p>
        </div>

        <div className="space-y-10">
          {
            products.map((product, index) => (
              <motion.div
                key={index * 0.6}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1e1e1e]'
                  } p-6 rounded-xl`}
              >
                <ProductCard title={product.title} description={product.description} image={product.image} features={product?.features} />
              </motion.div>
            ))
          }
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => <QuestionAnswer key={index * 0.5} question={faq.question} answer={faq.answer} />)}
        </div>
      </section>
    </>
  )
}
