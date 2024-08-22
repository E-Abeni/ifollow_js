
export default function page(props){

	return(
	<div className="flex justify-center items-center w-screen h-screen">
		<form 	className="flex flex-col border-black border-solid border-2 p-4 w-fit h-fit">
			<label className="w-fit"> Name </label>
				<input type="text" className="border-black border-solid border-2 w-80" name="name"/>
			<label className="w-fit"> Age </label>
				<input className="border-black border-solid border-2 w-80" type="number" name="age"/>
			<label className="w-fit"> Sex </label>
				<input className="border-black border-solid border-2 w-80" type="text" name="sex"/>
			<label className="w-fit"> Address </label>
				<input className="border-black border-solid border-2 w-80" type="text" name="address"/>
			<label className="w-fit"> Password </label>
				<input className="border-black border-solid border-2 w-80" type="password" name="password"/>
			<button className="border-black border-solid border-2 w-fit my-4 self-center px-2 py-1" type="submit"> Sign up </button>
		
		</form>
	</div>
		
	)
}