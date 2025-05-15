import {NextResponse} from "next/server";
import jwt from "jsonwebtoken";
import connect from "@/lib/db";
import Claim from "@/lib/models/claim";
import {Types} from "mongoose";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        const token = req.headers.get('Authorization')?.split(' ')[1];

        if (!token) {
            return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        }

        const verifyToken = jwt.verify(token, process.env.SECRET as string) as {id: string, iat: number, exp: number};
        if (!verifyToken) {
            return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        }

        body['entity'] = new Types.ObjectId(verifyToken.id);

        await connect()
        const claim = await Claim.create(body);

        return new NextResponse(JSON.stringify(claim), {status: 201});

    } catch (e) {
        return new NextResponse("Error processing claims: " + e);
    }
}