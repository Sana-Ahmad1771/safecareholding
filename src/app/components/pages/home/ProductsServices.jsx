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
    <section className="bg-body text-dark-2 py-12 lg:py-20 px-5 lg:px-20">
      <div className="container mx-auto space-y-12 lg:py-20 py-12 px-5 lg:px-20">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Products & Services
          </h2>
          <div className="flex justify-center items-center ">
            <div className="w-[244px] h-0.5 bg-gray-4 "></div>
          </div>
          <p className="text-base sm:text-lg leading-relaxed">
            The medical field demands the highest quality medical supplies and
            equipment. Safecare’s line of medical products includes:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-5 shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="mb-4">
                <div className="flex flex-col gap-[30px] mb-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <div className="w-[269px] h-0.5 bg-gray-4 opacity-[0.3]  "></div>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-dark-2/80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;
