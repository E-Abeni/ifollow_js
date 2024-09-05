"use client"
import {Cinzel} from 'next/font/google'
import Link from 'next/link'
import {auth} from '../actions/loginAction'
import {useFormState} from 'react-dom'
import {useEffect, useState} from 'react'

const cinzel = Cinzel({
		subsets: ['latin']
	}) 
	

export default function Login(){

	const initialState = {message: "", tries: 0}
	const [loginState, loginAction] = useFormState(auth, initialState)

	const [disabled, setDisabled] = useState(false);

	useEffect(() => {
		setDisabled(false)
	}, [loginState?.tries])

	async function handleSubmit(e){
		setDisabled(true)
		e.preventDefault();
		const f = new FormData(e.currentTarget)
		
		const uname = f.get("uname");
		const passwd = f.get("password");
		
		const status = loginAction({uname, passwd})
		
	} 
	
	return(
		<div className="w-9/12 flex flex-col items-center justify-center bg-gray-200">
			
			<form className = {` flex flex-col justify-center bg-gray-300 p-10 rounded-3xl w-1/2 border-solid border-2 border-black`} onSubmit={handleSubmit}>
				<label className="p-1 mx-4 my-1"> User Name </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " placeholder="example@example.com" name="uname"></input>
				
				<label className="p-1 mx-4 my-1 space-y-40"> Password </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "password" placeholder="***********" name="password"></input>
				<label className="text-red-600">{loginState?.message}</label>
				
				<button className = {`${ disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'} my-4 self-center bg-blue-900 rounded-md m-4 w-4/12 text-white p-2 text-md text-center`} type="submit">{disabled? "Please wait!" : "Log in"}</button>
				
				<div className="my-1 flex flex-row w-9/12 justify-around self-center text-blue-600">
				<a href="">Forget password?</a> 
				<Link href="signup">Sign Up</Link>
			</div>
			</form>
			
			
		</div>
	);
	
}