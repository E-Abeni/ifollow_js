"use client"
import SearchTable from "./searchTable"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function page(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
            
          } else {
            params.delete('query');
          }
        replace(`${pathname}?${params.toString()}`);
           
      }


    return (
        <>
            <div className="flex flex-row m-10">
                <input type="text" onChange={(e) => {handleSearch(e.target.value)}} defaultValue={searchParams.get('query')?.toString()} className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Search..."/>
                <button className="w-auto px-4 bg-gray-200 rounded-lg mx-4">
                    Search
                </button>
            </div>
            <SearchTable doctor={doctor}/>
        </>
        )
}