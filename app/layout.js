import './globals.css'
import Link from 'next/link'
import {cookies} from 'next/headers'

export const metadata = {
	title: "I-Follow"
}


export default function RootLayout({children}){

	const myCookies = cookies()
	let u_data = myCookies.get("user_data")?.value
	if(u_data){
		u_data = JSON.parse(u_data)
	}
	console.log(u_data)


	

	let menus = [{name: 'Home', href:"/"}, 
				 {name: 'Login', href:"/"}, 
				 {name: 'About-Us', href:"/About"}];
	
	return(
		<html>
			<body className="flex flex-col h-full"> 
				<div className="h-10 boarder-solid boarder-2 bg-black w-full flex flex-row justify-between">
					<ul className="flex flex-row">
						{menus.map((menu) => <li className="text-white p-2 mx-4" key={menu.name}><Link key = {menu.name} href={menu.href}> {menu.name}</Link> </li>)}
					</ul>
					<div className="h-full items-center mx-4 flex flex-col">
						<button className="text-white h-full content-center self-end"> {u_data?.username} </button>
						<div className={`hidden border-2 border-black border-solid p-2 bg-green-300`} id="profile">
							<p>Username: {u_data?.username}</p>
							<p>Full Name: {u_data?.first_name} {u_data?.last_name}</p>
							<p>Email: {u_data?.email}</p>
							<p>Phone Number: {u_data?.phone_number}</p>
							<p>Occupation: {u_data?.occupation}</p>
						</div>
					</div>
				</div>
				{children}
			</body>
		</html>
		) 
}