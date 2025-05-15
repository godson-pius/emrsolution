import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error('Missing DB_URI');
}

const connect = async () => {
    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        // console.log("Already connected ✅");
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            bufferCommands: true,
        });
        console.log("MongoDB Connected Successfully ✅");

    } catch (err: unknown) {
        console.log("MongoDB connection failed ❌", err);
        throw new Error(err instanceof Error ? err.message : String(err));
    }
}

export default connect;
