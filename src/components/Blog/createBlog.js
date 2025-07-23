import generateSlug from "./slug-generator";

let blogIdCounter = 1;

export function createBlog({ title, content, tags = [], image = null, snippet = "" }) {
  const id = String(blogIdCounter).padStart(3, "0");
  const slug = generateSlug(title);
  const today = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = `${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  blogIdCounter++;

  return {
    id,
    slug,
    title,
    image,
    date,
    tags,
    views: 0,
    content,
    snippet, // ✅ snippet added
  };
}
