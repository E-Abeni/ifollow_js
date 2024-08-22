import Card from './card';

export default function page(){
	return(
	<div className="flex flex-row flex-wrap h-fit">
		
		<Card title="My Doctors"/>
		<Card title="TO-DO" />
		<Card title="New Messages"/>
		<Card title="What to Read" />
		<div className="h-screen"></div>
	
	</div>
	)
}