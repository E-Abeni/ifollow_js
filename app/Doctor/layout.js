import SideBar from './sidebar';

export default function RootDashboard({children}){
	
	return(
		<div className="flex flex-row">
			<SideBar />
			<div className="h-screen w-full" >{children}</div>
		</div>
)}