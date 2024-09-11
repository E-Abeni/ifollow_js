import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

export async function GET(request){
	try {
		const searchParams = request.nextUrl.searchParams
  		const username = searchParams.get('username');
		
		const query = await sql `SELECT username, password, doctor_id FROM doctors WHERE username=${username};`;
	
		return NextResponse.json(query.rows[0]);

	}catch(error){
	
		return NextResponse.json({error}, {status: 500});
	
	}
}

