import {NextResponse} from 'next/server'

const public_routes = []

export async function middleware(request){
   const runP = request.nextUrl.pathname.startsWith('/Patient') 
   const runD = request.nextUrl.pathname.startsWith('/Doctor')
   const runH = request.nextUrl.pathname === "/"

   if(runP || runD){
      const user_data = request.cookies.get("user_data")
      if(!user_data){
         return NextResponse.redirect(new URL('/', request.url))
      }
      
   }

   if(runP){
      const user_data = request.cookies.get("user_data")
      const is_doctor = JSON.parse(user_data.value).hasOwnProperty("doctor_id")

      if(is_doctor){
         return NextResponse.redirect(new URL('/Doctor', request.url))
      }
   }

   if(runD){
      const user_data = request.cookies.get("user_data")
      const is_doctor = JSON.parse(user_data.value).hasOwnProperty("doctor_id")

      if(!is_doctor){
         return NextResponse.redirect(new URL('/Patient', request.url))
      }
   }
   
   if(runH){
      const user_data = request.cookies.get("user_data")
      if(user_data){
         return NextResponse.redirect(new URL('/Patient', request.url))
      }
      
   }
   
   
   return NextResponse.next()
}

