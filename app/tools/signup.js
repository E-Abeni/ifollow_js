"use client"
import {registerUser} from "../actions/signupAction"
import {useFormState} from 'react-dom'

export function SignupForm(){
	const initialState = {message: ""}

	const [fStatus, submitForm, pending] = useFormState(registerUser, initialState)

	function handleSubmit(e){
		e.preventDefault()
		const f = new FormData(e.currentTarget)
		submitForm(f)
	}

	return (
		<form className="max-w-lg mx-auto space-y-4 w-1/2 border-2 border-black p-10 my-5" onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 gap-6">
        <label className="block">
            <span className="text-gray-700">First Name:</span>
            <input type="text" id="first_name" name="first_name" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" required/>
        </label>

        <label className="block">
            <span className="text-gray-700">Last Name:</span>
            <input type="text" id="last_name" name="last_name" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" required/>
        </label>

        <label className="block">
            <span className="text-gray-700">Username:</span>
            <input type="text" id="username" name="username" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" required/>
        </label>

        <label className="block">
            <span className="text-gray-700">Email:</span>
            <input type="email" id="email" name="email" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" required/>
        </label>

        <label className="block">
            <span className="text-gray-700">Phone Number:</span>
            <input type="tel" id="phone_number" name="phone_number" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"/>
        </label>

        <label className="block">
            <span className="text-gray-700">Date of Birth:</span>
            <input type="date" id="date_of_birth" name="date_of_birth" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"/>
        </label>

        <label className="block">
            <span className="text-gray-700">Sex:</span>
            <select id="sex" name="sex" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </label>

        <label className="block">
            <span className="text-gray-700">Address:</span>
            <textarea id="address" name="address" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"/>
        </label>

        <label className="block">
            <span className="text-gray-700">Occupation:</span>
            <input type="text" id="occupation" name="occupation" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"/>
        </label>

        <label className="block">
            <span className="text-gray-700">Religion:</span>
            <input type="text" id="religion" name="religion" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm"/>
        </label>

        <label className="block">
            <span className="text-gray-700">Password:</span>
            <input type="password" id="password" name="password" className="mt-1 w-full rounded-md border-gray-300 shadow-lg focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" required/>
        </label>

        <div className="flex justify-center">
            <button type="submit" className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-500" disable ={pending}>Register</button>
        </div>
    </div>
	<div>
		<p> {fStatus.message} </p>
	</div>
</form>

)} 