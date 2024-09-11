"use client"
import Cookies from 'js-cookie';
import { revalidatePath } from 'next/cache';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import reval from "./../actions/revalidate"

export default function LogoutButton(){
	const router = useRouter()

	const buttonRef = useRef(null);
	useEffect(() => {
		if (buttonRef.current) {
		  buttonRef.current.addEventListener('click', handleLogout);
		}
	
		return () => {
		  if (buttonRef.current) {
			buttonRef.current.removeEventListener('click', handleLogout);   
	
		  }
		};
	  }, []);
	
	function handleLogout(){
		console.log("logout clicked")
        Cookies.remove("user_data")
        reval("/")
        router.push("/")
        
	}

	return <button className="px-4 py-2 m-1 bg-red-500 hover:bg-red-600 text-white rounded-md" ref={buttonRef}>Logout</button>
}