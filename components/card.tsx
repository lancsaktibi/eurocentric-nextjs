import Link from 'next/link';
import Date from '../components/date';

export default function Card({ link, date, longText }: { 
    link: string, 
    date: string, 
    longText: string }) {
  return (
    <>
        <div className="flex justify-center">
            <div className="block p-6 m-6 rounded-lg shadow-lg bg-gray-100 max-w-sm">
                <div>
                    <div>
                        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                            {longText}
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                            <Date dateString={date} />
                        </p>
                        <Link href={`/posts/${link}`} passHref>
                            <button type="button" className=" inline-block px-6 py-2.5 bg-gray-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                Read more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};