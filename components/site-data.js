export const navLinks = [
  { href: '/start-here', label: 'Start Here' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/lessons/foundations', label: 'Lessons' },
  { href: '/projects', label: 'Projects' },
  { href: '/notes', label: 'Notes' },
  { href: '/about', label: 'About' },
];

export const roadmapStages = [
  { id: 'python', title: 'Stage 1 – Python for Machine Learning', summary: 'Syntax, NumPy, Pandas, and data workflows.' },
  { id: 'math', title: 'Stage 2 – Mathematics for Machine Learning', summary: 'Vectors, matrices, probability, and optimization intuition.' },
  { id: 'ml', title: 'Stage 3 – Machine Learning Algorithms', summary: 'Regression, classification, trees, and evaluation metrics.' },
  { id: 'dl', title: 'Stage 4 – Deep Learning', summary: 'Neural networks, backpropagation, and CNN/RNN fundamentals.' },
  { id: 'systems', title: 'Stage 5 – AI Systems', summary: 'Model serving, monitoring, and retrieval workflows.' },
];

export const projectList = [
  {
    slug: 'house-price-prediction',
    title: 'House Price Prediction',
    problem: 'Predict home prices from tabular features.',
    dataset: 'Kaggle housing dataset',
    model: 'Random Forest Regressor',
    results: 'R²: 0.89, MAE improved over baseline linear regression.',
  },
  {
    slug: 'spam-classifier',
    title: 'Spam Classifier',
    problem: 'Classify messages into spam or ham.',
    dataset: 'SMS Spam Collection',
    model: 'TF-IDF + Linear SVM',
    results: 'F1 score: 0.93 with balanced precision/recall.',
  },
  {
    slug: 'customer-segmentation',
    title: 'Customer Segmentation',
    problem: 'Group users based on behavior and spend patterns.',
    dataset: 'Mall Customers dataset',
    model: 'K-Means clustering',
    results: 'Silhouette score guided cluster count selection.',
  },
  {
    slug: 'image-classification',
    title: 'Image Classification',
    problem: 'Classify images into known classes.',
    dataset: 'CIFAR-10',
    model: 'CNN (PyTorch)',
    results: 'Validation accuracy crossed 80% after regularization tuning.',
  },
];
