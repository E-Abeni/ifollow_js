import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const doctor_id = searchParams.get('text');
		
		const query = await sql `SELECT * FROM doctors WHERE doctor_id=${doctor_id};`;
	
		return NextResponse.json(query.rows[0]);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}
