import {sql} from '@vercel/postgres'
import {NextResponse, NextRequest} from 'next/server'

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
		//return new Response(JSON.stringify(replay));
		
	}catch(error){
		return NextResponse.json({error}, {status: 500});
	}
}