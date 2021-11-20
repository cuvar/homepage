const jwt = require('jsonwebtoken');
require('dotenv').config();

export function createToken(user: string) {
  const token: string = jwt.sign({ user: user }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
  return token;
}

// check, when it was issued at
// if the time is still valid, refreshToken,
// else, user needs to login again
interface ICheckToken {
  valid: boolean;
  user: string;
}
export function checkToken(token: string): ICheckToken {
  let valid: boolean = false;
  let user: string = '';

  try {
    user = jwt.verify(token, process.env.JWT_SECRET).user;
    valid = user.length > 0;
  } catch (e) {
    valid = false;

    if (e instanceof jwt.TokenExpiredError) {
      console.log('Token expired');
    }
  }

  return { valid, user };
}
