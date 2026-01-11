import Fastify from 'fastify'
import legalItemsRoutes from './legalItems'

const app = Fastify({ logger: true })

app.register(legalItemsRoutes)

app.listen({ port: 3000, host: '0.0.0.0' })
  .then(() => console.log('API running on port 3000'))
