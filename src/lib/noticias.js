// src/lib/noticias.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const noticiasPath = path.join(process.cwd(), 'src/content/noticias');

export function getNoticias() {
const files = fs.readdirSync(noticiasPath);
return files.map(fileName => {
    const filePath = path.join(noticiasPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { ...data, body: content, slug: fileName.replace('.md', '') };
  }).sort((a, b) => new Date(b.fecha) - new Date(a.fecha)); // ordenar por fecha
}