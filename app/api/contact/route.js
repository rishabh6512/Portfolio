import mysql from 'mysql2/promise';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
        }

        const connection = await mysql.createConnection(dbConfig);

        await connection.execute(
            'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );

        await connection.end();

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Contact API error:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
    }
}