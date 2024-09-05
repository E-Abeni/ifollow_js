import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const patient_id = searchParams.get('patient_id');
		
		const query = await sql `SELECT first_name, last_name, username, email, phone_number, date_of_birth, sex, address, occupation, religion FROM patients WHERE patient_id=${patient_id};`;
	
		return NextResponse.json(query.rows[0]);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}


export async function POST(request){
	try{
		const uinfo = await request.json();
		const query = await sql `INSERT INTO patients (first_name, last_name, username, email, phone_number, date_of_birth, sex, address, occupation, religion, password) 
		VALUES (${uinfo.first_name}, ${uinfo.last_name}, ${uinfo.username}, ${uinfo.email}, ${uinfo.phone_number}, ${uinfo.date_of_birth}, ${uinfo.sex}, ${uinfo.address}, ${uinfo.occupation}, ${uinfo.religion}, ${uinfo.password})`
		
		return NextResponse.json({message: "ok"}, {status: 200});
		
	}catch(error){
		return NextResponse.json({message: "error"}, {status: 500});
	}
}
	