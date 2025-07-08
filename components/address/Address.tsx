import Image from "next/image";

const Address = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start px-10 py-20 gap-14 bg-[#f8f8f8]">
      
      {/* Left: Contact Info */}
      <div className="flex flex-col gap-6 max-w-xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Get touch with us</h1>
         <p className="text-gray-500 text-sm">
  Tell us about your vision, and we&apos;ll help bring it to life.
</p>

        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
          <p className="text-gray-600 text-sm font-medium">
            Diamond Stone Trading And Services SPC
          </p>
          <p className="text-gray-600 text-sm">
            Po box 1280, Pc 111, Central post office, Muscat, Oman
          </p>
          <p className="text-gray-600 text-sm">
            Office no 615, Tower 1, Tathmeer, Muscat hills, Oman
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Phone</h2>
          <p className="text-gray-600 text-sm">+968 920 99 729</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
          <p className="text-blue-600 text-sm underline cursor-pointer">dst@diamondstonex.com</p>
        </div>
      </div>

      {/* Right: Image Map */}
      <div className="relative w-full lg:w-[550px] h-[400px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/mapLocation.png"
          alt="Map or Building"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Address;
