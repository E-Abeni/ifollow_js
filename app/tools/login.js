import {Cinzel} from 'next/font/google'
import Link from 'next/link'

const cinzel = Cinzel({
		subsets: ['latin']
	}) 
	

export default function Login(){
	async function handleSubmit(e){
		e.preventDefault();
		const f = new FormData(e.currentTarget)
		
		const uname = f.get("uname");
		const pswd = f.get("password");
		
		const response = await fetch(
			'../api/login',
			{
				method: 'POST',
				header: {'Content-Type': 'application/json'},
				body: JSON.stringify({uname, pswd})
			}
		);
		
		const data = await response.json()
		
		console.log(data)
		
	}
	
	return(
		<div className="w-9/12 flex flex-col items-center justify-center bg-gray-200">
			
			<form className = {`${cinzel.className} flex flex-col bg-gray-300 p-10 rounded-3xl w-1/2 h-4/6 border-solid border-2 border-black`} onSubmit={handleSubmit}>
				<label className="p-1 mx-4 my-1"> User Name </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " placeholder="example@example.com" name="uname"></input>
				
				<label className="p-1 mx-4 my-1 space-y-40"> Password </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "password" placeholder="***********" name="password"></input>
				
				<button className = "my-4 self-center bg-blue-900 rounded-md m-4 w-3/12 text-white p-2 text-md text-center" type="submit">Log in</button>
				
			</form>
			
			<div className="my-1 flex flex-row w-9/12 justify-around self-center text-blue-600">
				<a href="">Forget password?</a> 
				<Link href="signup">Sign Up</Link>
			</div>
		</div>
	);
	
}