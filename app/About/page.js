function ParentDiv(){
	let content = [
		'We are a Meditech company founded by @Abenezer Tamirat aiming to improve doctor patient interaction through using technologies.',
		'Medical care is not a one time process but rather a continous interaction and followup between a doctor and a patient',
		'Through our technology we plan to provide the platform in which patinets update their doctor and doctors follow up the progress and compliance of patients to the treatment'
	]
	

	return(
		<div className="w-full h-fit flex flex-col p-7 bg-blue-900 content-center justify-center"> 
			<h1 className="border-solid border-2 rounded-full p-10 bg-black text-5xl w-auto self-center justify-self-start italic font-mono text-white text-center"> I-Follow </h1>
			<ul className = "flex flex-grow flex-col justify-center h-1/2">
				{content.map((element) => <li className="font-mono text-justify text-2xl m-5 w-3/4 self-center list-disc text-white"> {element} </li>)}
			</ul>
			<div className="h-screen"></div>
		</div>
)}

export default function page(){
	return <ParentDiv />
}