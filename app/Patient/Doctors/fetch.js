function getCookie(cname) {
	console.log("called successfully")
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

export async function fetchDoctors(){
	let patient_id = JSON.parse(getCookie("user_data")).id
	
	return (
		fetch(`../api/allowed_doctors?patient_id=${patient_id}`, {method: 'GET'})
		.then((res) => res.json())
		.then((allowed_doctors) =>{
			let doctors = [];

			for(const doctor of allowed_doctors){
				doctors.push(fetch(`../api/doctor?doctor_id=${doctor.doctor_id}`, {method: 'GET'}).then(doctor => doctor.json()))
				
			}

			return (doctors)

		})
		.then(doctors => Promise.all(doctors))
	)

}

export async function pushDoctor (d){
	
	console.log("called");
	doctors.push(d);
	
}