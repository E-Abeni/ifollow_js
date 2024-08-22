//import {sql, db} from '@vercel/postgres';

const files = [
		{
			name: "12-10-2023",
			ftype: "Labratory Result",
			description: "Urine Analysis ordered on --- by Dr. X",
			location: "/file_icon.png"
		},
		{
			name: "3-6-2022",
			ftype: "MRI",
			description: "Brain MRI ordered by Dr. x on ---- ",
			location: "/file_icon.png"
		},
		{
			name: "4-11-2022",
			ftype: "CT",
			description: "Brain CT ordered by Dr. x on ---- ",
			location: "/file_icon.png"
		}
	];

export function fetchFiles(){
		
	return files
}

export function pushFile (f){
	
	console.log("called");
	files.push(f);
	
}