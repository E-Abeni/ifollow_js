import './globals.css'
import Link from 'next/link'

export const metadata = {
	title: "I-Follow"
}

export default function RootLayout({children}){
	let menus = [{name: 'Home', href:"/"}, 
				 {name: 'Login', href:"/"}, 
				 {name: 'About-Us', href:"/About"}];
	
	return(
		<html>
			<body className="flex flex-col h-full"> 
				<div className="h-10 boarder-solid boarder-2 bg-black w-full">
					<ul className="flex flex-row">
						{menus.map((menu) => <li className="text-white p-2 mx-4"><Link key = {menu.name} href={menu.href}> {menu.name}</Link> </li>)}
					</ul>
				</div>
				{children}
			</body>
		</html>
		) 
}