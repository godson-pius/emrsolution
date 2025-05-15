import bcrypt from "bcryptjs";
import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Entity from "@/lib/models/entity";
import jwt from "jsonwebtoken";

export const GET = async (req: Request) => {
    try {
        const token = req.headers.get('Authorization')?.split(' ')[1];
        if (!token) {
            return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        }

        const verifyToken = jwt.verify(token, process.env.SECRET as string) as {id: string, iat: number, exp: number};
        if (!verifyToken) {
            return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        }

        await connect();
        const entities = await Entity.find({});
        return new NextResponse(JSON.stringify(entities), {status: 200})

    } catch (e) {
        return new NextResponse('Error fetching entity ' + e)
    }
}

export const POST = async(req: Request) => {
    try {
        const body = await req.json();
        body.password = await bcrypt.hash(body.password, 10);

        await connect()
        await Entity.create(body);

        return new NextResponse(JSON.stringify({
            message: 'Entity created.',
        }), {status: 201})

    } catch (e: unknown) {
        if (e instanceof Error) {
            if(e.message.includes('duplicate')) {
                return new NextResponse(JSON.stringify({
                    message: 'Some fields already exists. Possible fields are: (Entity name, Entity Contact Info or Entity Contact Email)'
                }), {status: 409})
            }
        }
        return new NextResponse('Error creating entity ' + e, {status: 500})
    }
}