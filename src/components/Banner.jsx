export default function Banner() {
    return(
        <div className="px-4 py-2 hidden md:block">
        <article className="overflow-hidden rounded-lg shadow-lg bg-cardColor">
          <div className="p-4 h-80">
            <img
              className="object-cover h-full w-full rounded-lg"
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxZb2dhJTIwfGVufDF8fHx8MTcyMTc1MzMzNXww&ixlib=rb-4.0.3&q=30&w=1450"
              alt="card-image"
            />
          </div>
          <div className="p-4">
            <p className="block mb-3 font-sans text-xl antialiased font-normal leading-snug tracking-normal text-blue-gray-600">
              Discover Your Inner Peace
            </p>
            <p className="text-xs">
              Join us for a series of Wellness retreats designed to help you find tranquility and rejuvenation.
            </p>
          </div>
        </article>
      </div>
    )
}