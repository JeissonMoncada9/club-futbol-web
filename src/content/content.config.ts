import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const partidos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/partidos" }),
  schema: z.object({
    rival: z.string(),
    fecha: z.date(),
    local: z.boolean(),
    resultado: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

const noticias = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/noticias" }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.date(),
    imagen: z.string().optional(),
  }),
});

const jugadores = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jugadores" }),
  schema: z.object({
    nombre: z.string(),
    numero: z.number(),
    posicion: z.string(),
    edad: z.number(),
    nacionalidad: z.string(),
    foto: z.string(),
  }),
});

const cuerpoTecnico = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cuerpo-tecnico" }),
  schema: z.object({
    nombre: z.string(),
    rol: z.string(),
    foto: z.string(),
  }),
});

export const collections = {
  partidos,
  noticias,
  jugadores,
  'cuerpo-tecnico': cuerpoTecnico,
};