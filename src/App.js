import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Card from './components/Card';
import Loader from './components/Loader';
import { fetchRetreats } from './services/retreatService';

export default function App() {
  const [retreats, setRetreats] = useState([])
  // in response there is no specification about total pages as of now user can only next and previos page data there in no check for last page and end page
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // in case server send total page count
  const [searchQuery, setSearchQuery] = useState('');
  const [type, setType] = useState('');
  const [loading, setLoading] = useState(false);

  const loadRetreats = async (page, query = '') => {
    setLoading(true)
    try {
      const data = await fetchRetreats(page, query, type);
      setRetreats(data);
    } catch (error) {
      console.error('Error fetching retreats:', error);
    }
    finally {
      setLoading(false)
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); 
  };

  useEffect(() => {
    loadRetreats(page, searchQuery);
  }, [page, type, searchQuery])

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-yogaBlue">
        <h1 className="text-center text-xl font-semibold text-slate-200 px-4 py-4 sm:text-left">
          Wellness Retreats
        </h1>
      </header>
      <div >
        {retreats.length > 0 && (
          <Banner />
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-between px-4 py-2">
        <div className="w-full md:w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
          <select defaultValue="" id="date-filter" className="md:bg-yogaBlue bg-slate-100 text-sm font-medium border border-gray-300 md:text-white text-black rounded-md p-2 w-full md:w-auto">
            <option value="" disabled hidden>Filter by Date</option>
            <option value="2023-2024">2023-2024</option>
            <option value="2024-2025">2024-2025</option>
          </select>
          <select defaultValue="" id="type-filter" placeholder='Filter by Type' className="md:bg-yogaBlue bg-slate-100 text-sm font-medium border border-gray-300 md:text-white text-black rounded-md p-2 w-full md:w-auto" onChange={(e) => setType(e.target.value)}>
            <option value="" disabled hidden>
              Filter by Type
            </option>
            <option value="Yoga">Yoga</option>
            <option value="Meditation">Meditation</option>
            <option value="Detox">Detox</option>
          </select>
        </div>
        <input
          value={searchQuery}
          onChange={handleSearchChange}
          className="md:bg-yogaBlue bg-slate-100 border border-gray-300 md:text-white text-black rounded-md p-2 placeholder:bold placeholder:text-black md:placeholder:text-white mt-2 md:mt-0 w-full md:w-1/2"
          placeholder="Search retreats by title"
        />
      </div>
      {loading && <Loader />}

      {!loading && <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {retreats.map((item) => (
            <div key={item.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <Card title={item.title} image={item.image} description={item.description} date={item.date} location={item.location} price={item.price} />
            </div>
          ))}
        </div>
      </div>
      }

      <div className="flex justify-center mt-2 mb-4">
        <button
          onClick={() => setPage(page - 1)}
          className="bg-yogaBlue text-white px-4 py-2 rounded-full md:rounded mr-2 disabled:opacity-50"
        // disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="bg-yogaBlue text-white px-4 py-2 rounded-full md:rounded ml-2 disabled:opacity-50"
        // disabled={page === totalPages} in case if we have total number of pages so that we can avoid ui break;
        >
          Next
        </button>
      </div>
      <footer className="text-red text-center py-2 mt-auto">
        © {new Date().getFullYear()} Wellness Retreats. All rights reserved.
      </footer>
    </div>
  )
}