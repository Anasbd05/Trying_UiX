import {NextRequest,NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    if(req.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(new URL('/login',req.url))
    }
}


// export const config = {
//     matcher: "/dashboard"
// }