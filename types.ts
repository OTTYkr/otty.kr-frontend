declare namespace NodeJS {
  interface ProcessEnv {
    MYSQL_HOST: string;
    MYSQL_PORT: number;
    MYSQL_ID: string;
    MYSQL_PASSWORD: string;
    MYSQL_DATABASE: string;
  }
}
