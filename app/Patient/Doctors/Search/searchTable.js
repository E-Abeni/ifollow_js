export default async function SearchTable({searchParams}){
    const query = searchParams?.query || '';
    
    console.log(query)
    return <h1>{query}</h1>
}