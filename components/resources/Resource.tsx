import Image from "next/image";
import { Button } from "../ui/button";

const resources = [
  {
    title: "Marble Product Catalog",
    description:
      "Browse our full marble collection with specs, finishes, and application examples.",
    image: "/images/marble_product.png",
    downloadLink: "#",
  },
  {
    title: "Installation Guide",
    description:
      "Browse our full marble collection with specs, finishes, and application examples.",
    image: "/images/instalation_guide.png",
    downloadLink: "#",
  },
];

export default function Resource() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-0 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
        Resources
      </h1>

      <div className="flex flex-col gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white shadow-md rounded-xl px-6 py-6 border border-gray-100"
          >
            {/* Left content */}
            <div className="flex-1 pr-4">
              <h4 className="text-lg font-semibold text-black mb-2">
                {resource.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
              <Button>Download</Button>
            </div>

            {/* Right image */}
            <div className="w-[100px] h-[120px] relative">
              <Image
                src={resource.image}
                alt={resource.title}
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
