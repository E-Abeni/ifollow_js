function getCookie(cname) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(';');
	for(let i = 0; i <ca.length; i++) {
	  let c = ca[i];
	  while (c.charAt(0) == ' ') {
		c = c.substring(1);
	  }
	  if (c.indexOf(name) == 0) {
		return c.substring(name.length, c.length);
	  }
	}
	return "";
  }

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
			description: "Brain MRI ordered by Dr. x on --- ",
			location: "/file_icon.png"
		},
		{
			name: "4-11-2022",
			ftype: "CT",
			description: "Brain CT ordered by Dr. x on --- ",
			location: "/file_icon.png"
		}
	];

export function fetchFiles(){
	let patient_id = JSON.parse(getCookie("user_data")).id

	const data = fetch(`/api/files?patient_id=${patient_id}`)


	return files
}

export function pushFile (f){
	
	console.log("called");
	files.push(f);
	
}