import React from "react";
import { Button } from "../components/Ui/Button";

function Product() {
    let product = {
        name: "SaaS",
        description: "This is a sample product",
        price: 100,
        image: "../../public/images/sample.jpeg",
        status: "Available",
        id: 1,
        reviews: [
            {
                id: 1,
                name: "John",
                comment: "Great product!",
                rating: 4,
            },
            {
                id: 2,
                name: "Jane",
                comment: "I love it!",
                rating: 5,
            },
        ],
    }

    return (
        <div className="p-10 w-full text-white">
            <div className="p-10 bg-[#202938] rounded-2xl gap-20">
                <div className="main-details flex flex-row gap-10 justify-between">
                    <div> <img src={product.image} alt="ProductImage" className="w-[600px] h-[400px] rounded-md" /> </div>
                    <div className="flex flex-col w-[600px] gap-5">
                        <h1 className=" text-white font-bold text-6xl">{product.name}</h1>
                        <h2 className="text-[#79aaff] text-4xl font-semibold">${product.price}</h2>
                        <p>{product.description}</p>
                        <div className="flex flex-row gap-10">
                            <Button className="w-full bg-white text-black hover:bg-gray-100">Buy Now</Button>
                            <Button className="w-full bg-black text-white hover:bg-gray-900">Live Demo</Button>
                        </div>
                        <p className="text-green-500 font-bold">{product.status}</p>
                    </div>
                </div>

                <div className="specifications-and-components flex flex-row w-full justify-between px-40">
                    <div>
                        <h1>Specifications</h1>
                    </div>
                    <div>
                        <h1>Components</h1>
                    </div>
                </div>

                <div className="customer-review p-5 rounded-md">
                    <h1>Customer Reviews</h1>
                        {product.reviews.map((review) => (
                            <div key={review.id} className="flex flex-row bg-[#384152] p-5 rounded-lg mt-5 justify-between">
                                <div className="flex flex-col">
                                    <h3>{review.name}</h3>
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
