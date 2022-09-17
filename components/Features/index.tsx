import React from "react";

function Features({
  features,
  includedItems,
}: {
  features: string;
  includedItems: { item: string; quantity: string }[];
}) {
  return (
    <div>
      <div className="md:flex">
        <div className="mt-[5.5rem] md:w-[60%]">
          <h2 className="text-2xl sm:text-[2rem] uppercase leading-[1.33] mb-6 font-bold tracking-wide">
            Features
          </h2>
          <p className="whitespace-pre-line text-text text-[0.9375rem] leading-[1.66]">
            {features}
          </p>
        </div>
        <div className="mt-[5.5rem] sm:flex md:block md:mx-auto">
          <h2 className="text-2xl uppercase leading-[1.33] mb-6 font-bold tracking-wide">
            In the Box
          </h2>
          <ul className="sm:mx-auto md:mx-0">
            {includedItems.map((item) => (
              <li key={item.item} className="mb-[8px] text-[0.938rem] text-text">
                <span className="font-semibold text-[#d87d4a] mr-4">{item.quantity}x</span>
                <span className="capitalize">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
