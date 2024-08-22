"use client"

import Link from 'next/link'
import clsx from 'clsx'
import {usePathname} from 'next/navigation'

const options = [
	{name: 'Dashboard', href: "/Patient"},
	{name: 'My Doctors', href: "/Patient/Doctors"},
	{name: 'My File', href: "/Patient/Files"},
	{name: 'Notifications', href: "/Patient/Notifications"},
	{name: 'Read', href: "/Patient/Read"},
	{name: 'Tools', href: "/Patient/Tools"}
]


export default function SideBar(){
	
	const pathname = usePathname();
	
	return(
		<div className="h-auto w-64 bg-blue-900" >
			{options.map((option) => {
				return(
					<Link href={option.href} key={option.name}> 
						<p className = {clsx(
						"border-solid border-2 p-2 m-2 text-center rounded-xl bg-black",
						{
							"bg-black text-white": pathname !== option.href,
							"bg-white text-blue-800 border-solid border-2 border-green-400": pathname === option.href
						}
						)}> {option.name} </p>  
					</Link>
				)})}
			</div>

	)

}