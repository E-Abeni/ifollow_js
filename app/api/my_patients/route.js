import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const doctor_id = searchParams.get('doctor_id');

		const query = await sql `SELECT patient_id FROM allowed_doctors WHERE doctor_id=${doctor_id};`;
	
		return NextResponse.json(query.rows);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}


/*
export async function POST(req){
	try{
		
		const uinfo = await req.json();
		let replay = {"auth": "False"};
		
		const query = await sql `SELECT COUNT(*) FROM patients WHERE name=${uinfo.uname};`
		
		if(34){
			
			replay = {"auth" : "True"}
		}
		
		else {
			
		}
		
		return new Response(JSON.stringify(query.rows[0].count));
		
	}catch(error){
		return NextResponse.json({error}, {status: 500});
	}
}
*/