import mysql from 'mysql2/promise';

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

export async function GET() {
    try {
        const connection = await mysql.createConnection(dbConfig);

        const [rows] = await connection.execute(
            'SELECT id, title, slug, excerpt, published_at FROM blogs ORDER BY published_at DESC'
        );

        await connection.end();

        return new Response(JSON.stringify(rows), {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Blog API error:", error);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}