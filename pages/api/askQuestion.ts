import query from '../../lib/queryApi';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {prompt, chatId, model, session} = req.body;

  if(!prompt){
    res.status(400).json({ answer: 'Please provide a valid a prompt' });
    return;
  }
  if(!chatId){
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  // chatGPT Query
  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "ChatGPT cannot fid the answer!",
    
  }
  res.status(200).json({ name: 'John Doe' })
}
