import {pushDoctor} from './fetch'

export default function AddButton({onUpdate}){
	function addItem(){
	let d = {
		img: "/prof.jpg",
		name: " ",
		speciality: " ",
		bio: "Work hard"
	}
	
	d.name = prompt("Name of the doctor: ");
	d.speciality = prompt("Speciality: ");
	
	pushDoctor(d);
	onUpdate();
	}
	
	return <button onClick= {addItem} className = "bg-green-600 rounded-3xl py-2 px-5 w-auto mx-10 my-2 text-white border-solid border-2 border-gray-600"> Add doctor </button>
	
}
