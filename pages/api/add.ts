import { createPost } from '../../util/posts';
export default function handler(req, res) {
  // console.dir(req.body.content);

  createPost(req.body.content);
  res.status(200).json({ message: 'Blog was added successfully' });
}
