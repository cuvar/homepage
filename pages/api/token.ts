import { checkToken, refreshToken } from '../../util/jwt';

export default function handler(req, res) {
  const valid: boolean = checkToken(req.body.token);

  if (valid) {
    const newToken: string = refreshToken(req.body.token);

    res
      .status(200)
      .json({ message: 'Authentification was successful', token: newToken });
  } else {
    res.status(403).json({ message: 'Authentification failed', token: null });
  }
}
