import {NextResponse} from "next/server";
// import jwt from "jsonwebtoken";
import connect from "@/lib/db";
import Tariff from "@/lib/models/tariff";

export const GET = async () => {
    try {
        await connect();
        const tariffs = await Tariff.find({}).sort({createdAt: -1});
        return new NextResponse(JSON.stringify(tariffs), {status: 200})

    } catch (e) {
        return new NextResponse('Error fetching entity ' + e)
    }
}

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        // const token = req.headers.get('Authorization')?.split(' ')[1];
        //
        // if (!token) {
        //     return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        // }
        //
        // const verifyToken = jwt.verify(token, process.env.JWT_SECRET as string) as {id: string, iat: number, exp: number};
        // if (!verifyToken) {
        //     return new NextResponse(JSON.stringify({message: "Unauthorized action!"}), {status: 401});
        // }

        await connect()
        // const entityId = verifyToken.id;
        // const findEntity = await Entity.findOne({_id: entityId});
        //
        // if (!findEntity) {
        //     return new NextResponse(JSON.stringify({message: 'Unauthorized action!'}), {status: 401})
        // }

        const tariff = await Tariff.create(body);
        return new NextResponse(JSON.stringify(tariff), {status: 201});

    } catch (e) {
        if (e instanceof Error) {
            if(e.message.includes('duplicate')) {
                return new NextResponse(JSON.stringify({
                    message: 'TariffComponent exists!'
                }), {status: 409})
            }
        }
        return new NextResponse('Error creating entity ' + e, {status: 500})
    }
}