import { NextRequest, NextResponse } from "next/server";

export function GET(req : NextRequest){
    return NextResponse.json({"message"  : "Hello From Fusion flow"}, {status : 200});
}