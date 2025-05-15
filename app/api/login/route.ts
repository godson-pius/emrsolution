import bcrypt from "bcryptjs";
import {NextResponse} from "next/server";
import connect from "@/lib/db";
import Entity from "@/lib/models/entity";
import jwt from "jsonwebtoken";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        await connect();

        const entity = await Entity.findOne({contactEmail: body.email});
        if (!entity) {
            return new NextResponse(JSON.stringify({message: "Invalid Authentication"}), {status: 401})
        }

        const checkPassword = await bcrypt.compare(body.password as string, entity!.password);
        if (!checkPassword) {
            return new NextResponse(JSON.stringify({message: "Invalid Authentication"}), {status: 401})
        }

        // Generating token
        const token = jwt.sign({id: entity._id}, process.env.JWT_SECRET as string, {expiresIn: '7d'})
        return new NextResponse(JSON.stringify({
            success: true,
            token,
            entity
        }), { status: 200 });
    } catch (e) {
        return new NextResponse('Error logging in ' + e);
    }
}