import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body
    try {
      const response = await axios.post('https://api.replicate.ai/image', { prompt })
      const image = response.data
      res.status(200).json({ image })
    } catch (error) {
      res.status(500).json({ error: 'Error generating image' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}