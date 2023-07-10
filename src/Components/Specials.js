import React from 'react';
import salad from "../Components/Assets/greek salad.jpg";
import bruchetta from "../Components/Assets/bruchetta.jpg";
import lemondessert from "../Components/Assets/lemon dessert.jpg";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

const specialItems = [
    {
        id: 1,
        foodItem: "Greek Salad",
        foodImage: salad,
        foodDescription: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pep" +
                "per, red onion, olives, and feta cheese.",
        price: "10.00"
    }, {
        id: 2,
        foodItem: "Bruchetta",
        foodImage: bruchetta,
        foodDescription: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pep" +
                "per, red onion, olives, and feta Cheese.",
        price: "15.00"
    }, {
        id: 3,
        foodItem: "Lemon Dessert",
        foodImage: lemondessert,
        foodDescription: "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pep" +
                "per, red onion, olives, and feta cheese.",
        price: "12.00"
    }
];

const Specials = () => {
  return (
    <section className="h-auto mx-[40px] py-[40px]">
        <div className="w-full py-5">
            <h2 className="lg:text-[40px] text-center font-bold text-slate-900 text-[30px] py-2">
                Today's <span className="text-lime-500">specials</span>
            </h2>
            <p className="text-center text-slate-950 text-[14px] py-4">
                Enjoy from a wide variety of the best quality food from the Little Lemon restuarant.
            </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-7">
            {specialItems.map((item) => (
                <div className="h-[450px] ring-1 ring-gray-200 overflow-hidden shadow-md rounded-md hover:scale-105">
                <div className="h-[60%] w-auto m-2 rounded-md ring-1 ring-gray-200 shadow-sm">
                    <img
                    src={item.foodImage}
                    alt="food"
                    className=" h-full w-full object-cover"
                    />
                </div>
                <div className="mx-2 my-4">
                    <div className="flex flex-row justify-between">
                        <h4 className="text-[20px] font-bold">
                            {item.foodItem}
                        </h4>
                        <h4 className="text-[20px] font-bold text-lime-700">
                            ${item.price}
                        </h4>
                    </div>
                    <p className="text-md mt-3 tracking-tight overflow-hidden">
                        {item.foodDescription}
                    </p>
                    <button className="inline-flex mt-5 justify-center items-center p-2 w-40 font-bold rounded-lg bg-yellow-400 text-center text-gray-800 hover:bg-yellow-500 hover:text-gray-950 hover:outline-double hover:outline-yellow-400">
                        Order now <ArrowRightCircleIcon className="ml-1 h-5 w-5"/>
                    </button>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Specials