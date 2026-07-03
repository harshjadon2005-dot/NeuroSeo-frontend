const fs = require('fs');
const path = require('path');

const files = [
  'src/app/resources/learn/[slug]/page.tsx',
  'src/app/resources/tools/[slug]/page.tsx',
  'src/app/resources/documentation/[slug]/page.tsx',
  'src/app/resources/compare/[slug]/page.tsx',
  'src/app/resources/case-studies/[slug]/page.tsx',
  'src/app/resources/alternatives/[slug]/page.tsx',
];

for (const file of files) {
  const absolutePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(absolutePath, 'utf8');

  // Move ArticleHero inside ArticleLayout
  content = content.replace(
    /(<ArticleHero [^\/]+\/>)\s*(<ArticleLayout [^>]+>)/g,
    '$2\n        $1'
  );

  fs.writeFileSync(absolutePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
