global {
  declare namespace NodeJS {
    interface ProcessEnv {
      BOT_TOKEN: string;
      MY_ID: string;
    }
  }
}

export {}