import { formatDateRange } from "../utility/dateFormat";

export default function Card({ description, image, title, date, location, price }) {
    return (
        <article className="overflow-hidden rounded-lg shadow-lg bg-cardColor">
            <div className="w-65 h-35 p-4">
                <img className="object-fill h-40 w-100 rounded-lg" src={image} alt={`product-${title}`} />
            </div>
            <div className='px-4 py-2 leading-7'>
                <p className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {title}
                </p>
                <p className="text-xs leading-6">{description}</p>
                <p className="text-xs leading-6">Date: {formatDateRange(date)}</p>
                <p className="text-xs leading-6">Location: {location}</p>
                <p className="text-xs leading-6">Price: ${price}</p>
            </div>
        </article>
    )
}