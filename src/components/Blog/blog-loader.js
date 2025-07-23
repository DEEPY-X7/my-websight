// src/components/Blog/c

/**
 * Auto-import all blog files in blog-content folder
 * and return an object mapping slug => content
 */

const blogContext = import.meta.glob('./blog-content/*.{js,jsx,mdx}', {
  eager: true,
});

const blogMap = {};

for (const path in blogContext) {
  const fileName = path
    .split('/')
    .pop()
    .replace(/\.(js|jsx|mdx)$/, '');

  blogMap[fileName] = blogContext[path].default;
}

export default blogMap;
