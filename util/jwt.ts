const jwt = require('jsonwebtoken');
require('dotenv').config();

export function createToken(user: string) {
  const token: string = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
}

// check, when it was issued at
// if the time is still valid, refreshToken,
// else, user needs to login again
export function checkToken(token: string): boolean {
  let valid: boolean = false;

  try {
    valid = jwt.verify(token, process.env.SECRET).length > 0 ? true : false;
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      valid = false;
    }
  }

  return valid;
}

export function refreshToken(token: string): string {
  // Todo: implement refresh token

  return '';
}
