"use client"
import {registerPatient, registerDoctor} from "../actions/signupAction"
import {useFormState} from 'react-dom'

export function Psignup(){
	const initialState = {message: ""}

	const [fStatus, submitForm, pending] = useFormState(registerPatient, initialState)

	function handleSubmit(e){
		e.preventDefault()
		const f = new FormData(e.currentTarget)
		submitForm(f)
	}

	return (
		<form className="max-w-lg mx-auto space-y-4 w-1/2 border-2 border-black p-10 my-5" onSubmit={handleSubmit}>
            <h2 class="text-2xl font-bold text-center mb-4">Patient Signup</h2>
    <div className="grid grid-cols-1 gap-6">
        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">First Name:</span>
            <input type="text" id="first_name" name="first_name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Last Name:</span>
            <input type="text" id="last_name" name="last_name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Username:</span>
            <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Email:</span>
            <input type="email" id="email" name="email" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Phone Number:</span>
            <input type="tel" id="phone_number" name="phone_number" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Date of Birth:</span>
            <input type="date" id="date_of_birth" name="date_of_birth" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Sex:</span>
            <select id="sex" name="sex" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Address:</span>
            <textarea id="address" name="address" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Occupation:</span>
            <input type="text" id="occupation" name="occupation" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Religion:</span>
            <input type="text" id="religion" name="religion" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
        </label>

        <label className="block">
            <span class="block text-gray-700 font-bold mb-2">Password:</span>
            <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
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

export function Dsignup(){
	const initialState = {message: ""}

	const [fStatus, submitForm, pending] = useFormState(registerDoctor, initialState)

	function handleSubmit(e){
		e.preventDefault()
		const f = new FormData(e.currentTarget)
		submitForm(f)
	}

	return (
	
        <form className="max-w-lg mx-auto space-y-4 w-1/2 border-2 border-black p-10 my-5" onSubmit={handleSubmit}>
            <h2 class="text-2xl font-bold text-center mb-4">Doctor Signup</h2>

            <div class="mb-4">
                <label for="first_name" class="block text-gray-700 font-bold mb-2">First Name</label>
                <input type="text" id="first_name" name="first_name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="last_name" class="block text-gray-700 font-bold mb-2">Last Name</label>
                <input type="text" id="last_name" name="last_name" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="username" class="block text-gray-700 font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="speciality" class="block text-gray-700 font-bold mb-2">Speciality</label>
                <input type="text" id="speciality" name="speciality" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>

            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" required/>
            </div>

            <div class="mb-4">
                <label for="work_location" class="block text-gray-700 font-bold mb-2">Work Location</label>
                <input type="text" id="work_location" name="work_location" class="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"/>
            </div>

            <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" disable ={pending}>Sign Up</button>
            <div>
		        <p> {fStatus.message} </p>
	        </div>
        </form>

)}






