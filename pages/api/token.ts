import { checkToken, createToken } from '../../util/jwt';
import { ICheckToken } from '../../util/auth.types';

export default function handler(req, res) {
  const check: ICheckToken = checkToken(req.body.token);

  if (check.valid) {
    const newToken: string = createToken(check.user);

    res.status(200).json({
      message: 'Authentification was successful',
      loggedIn: true,
      token: newToken,
    });
  } else {
    res.status(403).json({
      message: 'Authentification failed',
      loggedIn: false,
      token: null,
    });
  }
}
