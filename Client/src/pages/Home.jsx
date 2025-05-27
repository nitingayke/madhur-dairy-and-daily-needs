import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import DairyProductsCarousel from "../components/Home/DairyProductsCarousel";

export default function Home() {
    const [loginUser] = useState({ username: "Ujjwal Pravin Patil", image: "https://media.licdn.com/dms/image/v2/D4E03AQGF9z3cXF5G7A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709014545673?e=1753920000&v=beta&t=Z8i7F_OMzArDVlr4Pu1EU6fF7PQGST5tFTE0o97jZD8" })
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <section className="relative h-96 bg-[url('https://img.freepik.com/premium-photo/dairy-cows-grazing-pasture-169-wallpaper_987764-36291.jpg')] bg-cover bg-center flex items-center">
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Pure Dairy Delivered to Your Doorstep
                    </h1>
                    <p className="text-xl mb-8 text-white max-w-2xl mx-auto">
                        Farm-fresh milk and dairy products straight from our happy cows to your family
                    </p>
                    <Link to={'/products'} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
                        Order Now
                    </Link>
                </div>
            </section>


            <section className="px-3 py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    {loginUser ? (
                        <>
                            Hi,{" "}
                            <span className={theme === "dark" ? "text-yellow-400" : "text-blue-600"}>
                                {loginUser.username}
                            </span>
                            ! Welcome back to Madhur Dairy & Daily Needs!
                        </>
                    ) : (
                        "Welcome to Madhur Dairy & Daily Needs - explore our freshest products!"
                    )}
                </h2>
                <p className="text-lg mx-auto">
                    Since 2010, we've been providing the highest quality dairy products to families across the region.
                    Our commitment to purity, freshness, and customer satisfaction makes us the preferred choice.
                </p>
            </section>

            <section className="px-3">
                <Marquee speed={50} gradient={false}>
                    <DairyProductsCarousel />
                </Marquee>
                <Marquee speed={50} gradient={false} direction="right" className="mt-6">
                    <DairyProductsCarousel />
                </Marquee>
            </section>

            <section className="my-10 p-3">
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-lg p-8`}>
                    <h3 className="text-2xl font-semibold text-center mb-6">Why Choose Madhur Dairy?</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-4xl mb-3">🥛</div>
                            <h4 className="font-bold mb-2">Farm Fresh</h4>
                            <p>Direct from our farms to your home within 24 hours</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🧪</div>
                            <h4 className="font-bold mb-2">Quality Tested</h4>
                            <p>Rigorous quality checks at every stage</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl mb-3">🚚</div>
                            <h4 className="font-bold mb-2">Fast Delivery</h4>
                            <p>Morning delivery before breakfast time</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-10 p-3">
                <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-300'} rounded-lg p-8`}>
                    <h3 className="text-2xl font-semibold text-center mb-6">Our Achievements</h3>
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-2">5000+</div>
                            <div className="text-lg">Happy Families</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-2">100+</div>
                            <div className="text-lg">Farms</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-2">24</div>
                            <div className="text-lg">Hour Freshness</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-blue-600 dark:text-yellow-400 mb-2">10+</div>
                            <div className="text-lg">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-3 pb-16">
                <div className={`p-4 rounded-xl flex flex-col md:flex-row items-center ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1e1e1e]'}`}>
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <img src="https://media.istockphoto.com/id/1501815024/photo/black-and-white-spotted-cows-feed-on-hay-inside-dutch-farm-in-holland.jpg?s=612x612&w=0&k=20&c=P7Y_NdG-ax3ExaJIQRccH9b7r8B6ZyWwgdFHLT1vua8=" alt="Our Farm" className="rounded-lg shadow-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-semibold mb-6">Our Farm Story</h3>
                        <p className="mb-4">
                            Madhur Dairy began as a small family farm in 2010 with just 10 cows. Today, we work with
                            over 100 local farms that share our commitment to ethical dairy farming.
                        </p>
                        <p className="mb-6">
                            Our cows are pasture-raised and treated with care, resulting in the highest quality milk
                            that's rich in nutrients and flavor.
                        </p>
                        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                            Learn About Our Process
                        </button>
                    </div>
                </div>
            </section>

            <section className="px-3 pb-16">
                <h3 className="text-2xl font-semibold text-center mb-6">What Our Customers Say</h3>
                <div className="text-center">
                    <p>Testimonials section will go here</p> {/* here import TrustCard.jsx */}
                </div>
            </section>
        </>
    )
}