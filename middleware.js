import {redirect} from 'next/navigation'
import {NextResponse} from 'next/server'

const public_routes = []

export async function middleware(request){
   const run = request.nextUrl.pathname.startsWith('/Patient') || request.nextUrl.pathname.startsWith('/Dashbord')

   if(run){
      const user_data = request.cookies.get("user_data")
      if(!user_data){
         return NextResponse.redirect(new URL('/', request.url))
      }
      console.log("User id: ", JSON.parse(user_data.value).id)
   }
   
   return NextResponse.next()
}

