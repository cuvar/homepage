import { isAuthorized } from '../../util/auth';

interface IAuth {
  isAuthorized: boolean;
  token: string;
}

export default function handler(req, res) {
  const auth: IAuth = isAuthorized(req.body.username, req.body.password);

  if (auth.isAuthorized) {
    res
      .status(200)
      .json({ message: 'Authentification was successful', token: auth.token });
  } else {
    res.status(403).json({ message: 'Authentification failed', token: null });
  }
}
