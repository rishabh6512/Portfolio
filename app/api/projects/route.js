import mysql from 'mysql2/promise';

export async function GET() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        const [rows] = await connection.execute('SELECT * FROM projects ORDER BY created_at DESC');

        await connection.end();

        return new Response(JSON.stringify(rows), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Database connection failed' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}