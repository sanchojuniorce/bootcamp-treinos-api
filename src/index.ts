import "dotenv/config";
import Fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";
import { z } from "zod";

const app = Fastify({ logger: true });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// rota única com type provider + schema (recomendado)
app.withTypeProvider<ZodTypeProvider>().get(
  "/",
  {
    schema: {
      description: "Hello world",
      tags: ["Hello World"],
      response: {
        200: z.object({
          message: z.string(),
        }),
      },
    },
  },
  async (request, reply) => {
    return { message: "Hello World" };
  },
);

await app.listen({ port: Number(process.env.PORT) || 8081 });
