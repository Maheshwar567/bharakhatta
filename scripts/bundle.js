import fs from 'fs';
import path from 'path';

const distHtml = fs.readFileSync('dist/index.html', 'utf8');
const files = fs.readdirSync('dist/assets');
const cssFile = files.find(f => f.endsWith('.css'));
const jsFile = files.find(f => f.endsWith('.js'));

const css = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
const js = fs.readFileSync(path.join('dist/assets', jsFile), 'utf8');

const output = distHtml
  .replace(/<link rel="stylesheet"[^>]+>/, '<style>' + css + '</style>')
  .replace(/<script type="module"[^>]+><\/script>/, '<script type="module">' + js + '</script>');

fs.writeFileSync('bharakhatta_offline.html', output, 'utf8');
fs.writeFileSync('C:/Users/Administrator/.gemini/antigravity/brain/6588d457-5e3e-4989-97d3-31dd8692c267/bharakhatta_game.html', output, 'utf8');

console.log('Singlefile generated successfully! Size:', output.length);
