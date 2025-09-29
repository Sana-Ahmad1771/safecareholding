import React from "react";

const ProductsServices = () => {
  const products = [
    {
      title: "Nursing Consumables",
      description:
        "Safecare Nursing Consumables are designed for the many needs of modern-day nursing. Our products are safe, effective, and economical to use.",
    },
    {
      title: "Respiratory Consumables",
      description:
        "Our Respiratory Consumables are produced to meet the specific needs of your respiratory care practice, such as hospital wards, long-term care facilities, and pharmacies.",
    },
    {
      title: "Emesis Supplies",
      description:
        "We offer a vast array of high-quality emergency care supplies and equipment including first aid kits, trauma bags, preventative medicine products, and more.",
    },
    {
      title: "Surgical Kits / Pack",
      description:
        "Safecare surgical kits are designed to safely store general surgical instruments and materials, as well as specialized instruments needed for major surgeries.",
    },
    {
      title: "CCSD",
      description:
        "We carry a full line of central sterile supplies, including lighting equipment, filters, scalpels, thermometers, suction equipment, and much more.",
    },
    {
      title: "PPE Consumables",
      description:
        "Safecare offers PPE consumables for demanding environments. Our disposable PPE products are designed to provide high-level protection against hazards.",
    },
  ];

  return (
    <section className="bg-gray-7/20 text-dark-2 py-12 lg:py-20 px-5 lg:px-20">
      <div className="container mx-auto space-y-12">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Products & Services
          </h2>
          <div className="flex justify-center">
            <div className="w-20 sm:w-32 md:w-44 :w-[244px] h-0.5 bg-gray-4"></div>
          </div>
          <p className="text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed">
            The medical field demands the highest quality medical supplies and
            equipment. Safecare’s line of medical products includes:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-10 items-center justify-center">
          {products.map((item, index) => {
            const isRespiratory = item.title === "Respiratory Consumables";
            return (
              <div
                key={index}
                className={`rounded-xl border max-h-[227px] max-w-[407px] border-gray-5 shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col ${
                  isRespiratory ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {/* Title + Divider */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <div
                    className={`w-16 sm:w-28 md:w-40 lg:w-[269px] h-0.5 ${
                      isRespiratory ? "bg-white/50" : "bg-gray-4 opacity-30"
                    }`}
                  ></div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isRespiratory ? "text-white/90" : "text-dark-2/80"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
