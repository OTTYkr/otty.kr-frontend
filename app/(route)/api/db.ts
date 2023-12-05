import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_ID,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// NOTE: 공용으로 쓸 SQL로 SELECT하는 함수
export const selectBySQL = async <T>(
  sql: string
): Promise<{ data: T[]; error: string | null }> => {
  try {
    const [rows] = await pool.query(sql);
    return { data: rows as T[], error: null };
  } catch (error: any) {
    return { data: [], error: error.message };
  }
};
