"use client"
import {Cinzel} from 'next/font/google'
import Link from 'next/link'
import {authD, authP} from '../actions/loginAction'
import {useFormState} from 'react-dom'
import {useEffect, useState} from 'react'

const cinzel = Cinzel({
		subsets: ['latin']
	}) 
	

export function Plogin(){

	const initialState = {message: "", tries: 0}
	const [loginState, loginAction] = useFormState(authP, initialState)

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
		
		const status = await loginAction({uname, passwd})
		
	} 
	
	return(
		<div className="w-9/12 flex flex-col items-center justify-center">
			
			<form className = {` flex flex-col justify-center bg-red-300 p-10 rounded-3xl w-1/2 border-solid border-2 border-black`} onSubmit={handleSubmit}>
			<h2 class="text-2xl font-bold text-center mb-4">Patient's Login</h2>
				<label className="p-1 mx-4 my-1"> User Name </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " placeholder="example@example.com" name="uname" required></input>
				
				<label className="p-1 mx-4 my-1 space-y-40"> Password </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "password" placeholder="***********" name="password" required></input>
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


export function Dlogin(){

	const initialState = {message: "", tries: 0}
	const [loginState, loginAction] = useFormState(authD, initialState)

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
		
		const status = await loginAction({uname, passwd})	
		
	} 
	
	return(
		<div className="w-9/12 flex flex-col items-center justify-center">
			<form className = {` flex flex-col justify-center bg-blue-300 p-10 rounded-3xl w-1/2 border-solid border-2 border-black`} onSubmit={handleSubmit}>
				<h2 class="text-2xl font-bold text-center mb-4">Doctor's Login</h2>
				<label className="p-1 mx-4 my-1"> User Name </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " placeholder="example@example.com" name="uname" required></input>
				
				<label className="p-1 mx-4 my-1 space-y-40"> Password </label>
				<input className="p-1 my-1 border-solid border-black border-2 rounded-md mx-4 " type = "password" placeholder="***********" name="password" required></input>
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