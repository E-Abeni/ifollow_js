import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const doctor_id = searchParams.get('doctor_id');
		
		const query = await sql `SELECT * FROM doctors WHERE doctor_id=${doctor_id};`;
	
		return NextResponse.json(query.rows[0]);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}


export async function POST(request){
	try{
		const uinfo = await request.json();
	
		const query = await sql `INSERT INTO doctors (first_name, last_name, username, speciality, password, work_location) 
		VALUES (${uinfo.first_name}, ${uinfo.last_name}, ${uinfo.username}, ${uinfo.speciality}, ${uinfo.password}, ${uinfo.work_location})`
		
		return NextResponse.json({message: "ok"}, {status: 200});
		
	}catch(error){
		return NextResponse.json({message: "error"}, {status: 500});
	}
}
