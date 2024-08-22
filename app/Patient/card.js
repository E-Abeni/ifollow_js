
export default function Card({title}){
	return (
		<div className="flex flex-col h-fit m-4 mx-10 w-4/12 border-solid border-2 rounded-2xl border-black p-2 bg-gray-200">
			<h1 className="bg-gray-200"> {title} </h1>
			<div className="bg-white p-2 rounded-3xl h-40 w-full"> Nothing to show! </div>
		</div>
	);
}