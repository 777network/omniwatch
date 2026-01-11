import { FastifyInstance } from 'fastify'
import { supabase } from '../db/supabaseClient'

export default async function legalItemsRoutes(app: FastifyInstance) {
  app.get('/legal-items', async (req, reply) => {
    const { data, error } = await supabase
      .from('legal_items')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) return reply.status(500).send(error)
    return reply.send(data)
  })
}
