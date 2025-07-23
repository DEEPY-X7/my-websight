/**
 * Converts blog titles to SEO-friendly slugs.
 * Example: "MERN Stack & Mindfulness" → "mern-stack-and-mindfulness"
 */
export default function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")              // & → and
    .replace(/[^\w\s-]/g, '')          // Remove special characters
    .replace(/\s+/g, '-')              // Spaces → dashes
    .replace(/-+/g, '-');              // Remove duplicate dashes
}


