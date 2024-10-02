
import { Button } from "../components/Ui/Button";
import {useParams} from "react-router-dom"
import productsData from "../data/products.json";

function Product() {
    const {id} = useParams();
    
    const productId = parseInt(id, 10);
    const product = productsData.find(product => product.id === productId);
    
    
    // let product = {
    //     name: "SaaS",
    //     description: "This is a sample product",
    //     price: 100,
    //     image: "../../public/images/sample.jpeg",
    //     status: "Available",
    //     id: 1,
    //     reviews: [
    //         {
    //             id: 1,
    //             name: "John",
    //             comment: "Great product!",
    //             rating: 4,
    //         },
    //         {
    //             id: 2,
    //             name: "Jane",
    //             comment: "I love it!",
    //             rating: 5,
    //         },
    //     ],
    //     specifications: [
    //         ["Created By", "John Doe"],
    //         ["Creation Date", "March 2022"],
    //         ["Framework", "Next.js 13"],
    //         ["CSS Framework", "Tailwind CSS"],
    //         ["Responsive", "True"],
    //         ["Documentation", "Available"],
    //         ["File Format", "Figma, HTML, CSS"],
    //         ["File Size", "30MB"],
    //     ],
    //     components: ["Pricing Tables", "Testimonial Slider"],
    // }

    return (
        <div className="p-10 w-full text-white">
            <div className="p-10 bg-[#202938] rounded-2xl gap-20">
                <div className="main-details flex flex-row gap-10 justify-start flex-wrap">
                    <div> <img src={product.image} alt="ProductImage" className="w-[600px] h-[400px] rounded-md" /> </div>
                    <div className="flex flex-col w-[600px] gap-5">
                        <h1 className=" text-white font-bold text-6xl">{product.name}</h1>
                        <h2 className="text-[#79aaff] text-4xl font-semibold">${product.price}</h2>
                        <p>{product.description}</p>
                        <div className="flex flex-row gap-10">
                            <Button className="w-full bg-white text-black hover:bg-gray-100">Buy Now</Button>
                            <Button className="w-full bg-black text-white hover:bg-gray-900">Live Demo</Button>
                        </div>
                        <p className="text-green-500 font-bold underline">{product.status}</p>
                    </div>
                </div>

                <div className="specifications-and-components flex flex-row w-full mt-20 gap-14 justify-start flex-wrap">
                    <div>
                        <h1 className="text-3xl font-bold">Specifications</h1>
                        <div className="flex flex-col gap-2 mt-10">
                            {product.specifications.map(([key, value]) => (
                                <div className="flex flex-row justify-between gap-28 md:gap-96" key={key}>
                                    <h3>{key}</h3>
                                    <p className="text-right">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                    <div>
                        {/* This is product data {product.name} */}
                        <h1 className="text-3xl font-bold">Components</h1>
                        <div className="flex flex-row gap-2 mt-10">
                            {product.components.map((key,component) => (
                                <div className="flex flex-row justify-start gap-96" key={key}>
                                    <h3 className="text-white bg-black rounded-lg p-2">{component}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="customer-review rounded-md mt-20">
                    <h1 className="text-3xl font-bold">Customer Reviews</h1>
                    {product.reviews.map((review) => (
                        <div key={review.id} className="flex flex-row flex-wrap bg-[#384152] p-5 rounded-lg mt-5 justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold">{review.name}</h3>
                                <p>{review.comment}</p>
                            </div>
                            <div className="flex flex-row">
                                <p>{Array.from({ length: review.rating }).fill("⭐").join("")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
