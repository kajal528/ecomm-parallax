import { useState } from "react";
import { newarrivals } from "../data/data";
import { ArrowLeft, ArrowRight } from "../Icons/Icons";

const NewArrivals = () => {
  const sliderCount = 5;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderData, setSliderData] = useState(() =>
    newarrivals.slice(currentIndex, sliderCount)
  );

  const onPrevClick = (index: number) => {
    setCurrentIndex((prev) => prev - 1);
    setSliderData(() => {
      return newarrivals.slice(index - 1, sliderCount + index - 1);
    });
  };
  const onNextClick = (index: number) => {
    setCurrentIndex((prev) => prev + 1);
    setSliderData(() => {
      return newarrivals.slice(index + 1, sliderCount + index + 1);
    });
  };

  return (
    <section className=" my-10 relative">
      <div className=" flex justify-between m-5">
        <h1 className=" text-2xl font-semibold">New Arrivals</h1>
        <a href="#" className=" hover:underline text-sm">
          view all
        </a>
      </div>
      <div className=" flex gap-6 overflow-hidden mx-5 relative py-4">
        {sliderData.map((val) => (
          <div className=" h-60 w-52 shrink-0 cursor-pointer">
            <img
              src={val.image}
              alt=""
              height={200}
              width={192}
              className=" object-contain h-52 w-48"
            />
            <h4 className=" text-center text-[12px] mt-1 truncate">
              {val.title}
            </h4>
            <div className=" text-[12px] text-gray-600 text-center mb-1">
              <span>{val.discounted_price} EUR</span>&nbsp;
              <span>(-{val.discount_percentage}%)</span>&nbsp;
              <span className=" line-through">{val.original_price} EUR</span>
            </div>
          </div>
        ))}
        <button
          className=" absolute left-0 top-1/2 -translate-y-1/2 py-4 px-4 rounded-full shadow-2xl bg-white/50 disabled:cursor-default"
          disabled={currentIndex === 0}
          onClick={() => onPrevClick(currentIndex)}
        >
          <ArrowLeft
            size={6}
            color={`${currentIndex === 0 ? "gray" : "black"}`}
          />
        </button>
        <button
          className=" absolute right-0 top-1/2 -translate-y-1/2 py-4 px-4 rounded-full shadow-2xl bg-white/50 disabled:cursor-default"
          disabled={currentIndex === sliderCount}
          onClick={() => onNextClick(currentIndex)}
        >
          <ArrowRight
            size={6}
            color={`${currentIndex === sliderCount ? "gray" : "black"}`}
          />
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
