import {pushFile} from './fetch'

export default function UploadButton(props){
	
	function addItem(){
	let f = {
		name: " ",
		ftype: " ",
		description: " ",
		location: "/file_icon.png"
	}
	
	f.name = prompt("Name of the file: ");
	f.ftype = prompt("File type: ");
	f.description = prompt("Description: ");
	
	pushFile(f);
	props.onUpdate();
	}
	
	return <button onClick= {addItem} className = "bg-green-600 rounded-3xl py-2 px-5 w-auto mx-10 my-2 text-white border-solid border-2 border-gray-600"> Upload File </button>
	
}
