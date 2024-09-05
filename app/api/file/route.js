import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const patient_id = searchParams.get('patient_id');
		
		const query = await sql `SELECT * FROM medical_records WHERE patient_id=${patient_id};`;
	
		return NextResponse.json(query.rows);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}



export async function POST(request){
	try{
		const uinfo = await request.json();
		
		const query = await sql `INSERT INTO medical_records (patient_id, file_name, file_type, file_size, upload_date, description, category) 
		VALUES (${uinfo.patient_id}, ${uinfo.file_name}, ${uinfo.file_type}, ${uinfo.file_size}, ${uinfo.upload_date}, ${uinfo.description}, ${uinfo.category})`
		
		return NextResponse.json({message: "ok"}, {status: 200});
		
	}catch(error){
		return NextResponse.json({message: "error"}, {status: 500});
	}
}
