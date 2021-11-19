const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');
import { createToken } from './jwt';
require('dotenv').config();

interface IAuth {
  isAuthorized: boolean;
  token: string;
}

export function isAuthorized(user: string, pwd: string): IAuth {
  return checkAuth(user, pwd);
}

function checkAuth(user, pwd): IAuth {
  // proceess.env.user gives device's user --> therefore bloguser
  const envUser: string = process.env.BLOGUSER;
  const envPassword: string = process.env.BLOGPASSWORD;

  const userValid: boolean = checkValue(user, envUser);
  const pwdValid: boolean = checkValue(pwd, envPassword);
  const isAuthorized = userValid && pwdValid;
  let token: string | null = null;
  if (isAuthorized) {
    token = createToken(user);
  }

  return { isAuthorized, token };
}

export function encryptWithHash(clearText: string): string {
  const salt: string = randomBytes(16).toString('hex');
  const hash: string = scryptSync(clearText, salt, 64).toString('hex');
  const encrypted: string = `${salt}:${hash}`;

  return encrypted;
}

function checkValue(clearText: string, env: string) {
  const [actualSalt, actualKey]: string[] = env.split(':');

  const hashed: string = scryptSync(clearText, actualSalt, 64);
  const keyBuffer: any = Buffer.from(actualKey, 'hex');
  const match: boolean = timingSafeEqual(hashed, keyBuffer);
  return match;
}
