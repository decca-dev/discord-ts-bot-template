declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      PREFIX: string;
      OWNER_ID: string;
    }
  }
}

export {};
