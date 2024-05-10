import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

/**
 * 對應 config.env 的設定
 */
class Config {
  public PORT: string | undefined;
  public NODE_ENV: string | undefined;
  public APP_URL: string | undefined;
  public DATABASE_URL: string | undefined;
  public DATABASE_PASSWORD: string | undefined;
  public JWT_TOKEN: string | undefined;
  public JWT_SECRET: string | undefined;
  public JWT_EXPIRES_DAY: any | undefined;

  constructor() {
    this.PORT = process.env.PORT || '3000';
    this.NODE_ENV = process.env.NODE_ENV || 'production';
    this.APP_URL = process.env.APP_URL || 'http://localhost:3006';
    this.DATABASE_URL = process.env.DATABASE_URL || '';
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || '';
    this.JWT_TOKEN = process.env.JWT_TOKEN || 'xxxxxx';
    this.JWT_SECRET = process.env.JWT_SECRET || 'xxxxxx';
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    this.JWT_EXPIRES_DAY = process.env.JWT_EXPIRES_DAY || 'xxxxxx';
  }

  /**
   * 驗證設定
   */
  public validateConfig(): void {
    console.info(this);
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
}

export const config: Config = new Config();
