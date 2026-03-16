export const roadmapStages = [
  {
    id: 'python',
    title: 'Stage 1 – Python for Machine Learning',
    summary: 'Build fluency in Python syntax, data structures, NumPy basics, and data handling with Pandas.',
    href: '/lessons/python-foundations',
  },
  {
    id: 'math',
    title: 'Stage 2 – Mathematics for Machine Learning',
    summary: 'Understand vectors, matrices, dot products, gradients, and probability with practical intuition.',
    href: '/lessons/math-for-ml',
  },
  {
    id: 'ml',
    title: 'Stage 3 – Machine Learning Algorithms',
    summary: 'Train and evaluate regression, classification, and clustering models with proper validation.',
    href: '/lessons/ml-algorithms',
  },
  {
    id: 'dl',
    title: 'Stage 4 – Deep Learning',
    summary: 'Move from hand-crafted features to neural networks, backpropagation, and training workflows.',
    href: '/lessons/deep-learning-basics',
  },
  {
    id: 'systems',
    title: 'Stage 5 – AI Systems',
    summary: 'Learn deployment, monitoring, and building practical AI systems that solve user problems.',
    href: '/lessons/ai-systems',
  },
];

export const lessonData = {
  'python-foundations': {
    title: 'Python Foundations for ML',
    concept: 'Python is the language glue of ML workflows. We use it to load data, transform features, train models, and evaluate results.',
    intuition: 'Think of Python as your lab notebook + calculator + automation tool in one place.',
    code: `import pandas as pd\nfrom sklearn.model_selection import train_test_split\n\ndf = pd.read_csv('housing.csv')\nX = df[['size', 'rooms']]\ny = df['price']\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)`,
    videoId: 'rfscVS0vtbw',
  },
  'math-for-ml': {
    title: 'Math for Machine Learning',
    concept: 'Linear algebra and calculus are the language of models. Dot products measure similarity, gradients guide optimization.',
    intuition: 'Math is not extra theory; it explains why a model decision happens and how to improve it.',
    code: `import numpy as np\n\na = np.array([2, 3, 1])\nb = np.array([1, 0, 4])\n\ndot = a @ b\nprint('Dot product:', dot)`,
    videoId: 'aircAruvnKk',
  },
  'ml-algorithms': {
    title: 'Machine Learning Algorithms',
    concept: 'Algorithms map input features to target outputs. We start from baselines, compare metrics, and iterate.',
    intuition: 'A model is a function that improves through data-driven feedback, not guesswork.',
    code: `from sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\nmodel = LogisticRegression(max_iter=1000)\nmodel.fit(X_train, y_train)\npreds = model.predict(X_test)\nprint(classification_report(y_test, preds))`,
    videoId: '7eh4d6sabA0',
  },
  'deep-learning-basics': {
    title: 'Deep Learning Basics',
    concept: 'Neural networks stack linear layers and nonlinear activations to learn complex patterns.',
    intuition: 'Each layer transforms data into more useful representations for final prediction.',
    code: `import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n    tf.keras.layers.Dense(16, activation='relu'),\n    tf.keras.layers.Dense(1, activation='sigmoid')\n])\nmodel.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])`,
    videoId: 'VyWAvY2CF9c',
  },
  'ai-systems': {
    title: 'AI Systems and Deployment',
    concept: 'Production AI includes data pipelines, APIs, monitoring, and feedback loops for quality control.',
    intuition: 'A good model in notebook is step one. Real impact happens when systems are reliable and observable.',
    code: `from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/predict')\ndef predict(size: float, rooms: int):\n    score = 0.6 * size + 0.4 * rooms\n    return {'prediction_score': score}`,
    videoId: '9CbVf1wqRck',
  },
};

export const projects = [
  {
    slug: 'house-price-prediction',
    title: 'House Price Prediction',
    dataset: 'Kaggle Housing Dataset',
    model: 'Linear Regression + Random Forest baseline',
    tools: 'Python, Pandas, Scikit-Learn, Matplotlib',
    problem: 'Estimate house prices from structural and location features.',
    results: 'RMSE reduced by improving feature scaling and outlier handling.',
  },
  {
    slug: 'spam-classifier',
    title: 'Spam Classifier',
    dataset: 'SMS Spam Collection',
    model: 'TF-IDF + Logistic Regression',
    tools: 'Python, NLTK, Scikit-Learn',
    problem: 'Classify incoming SMS messages as spam or ham.',
    results: 'Strong precision-recall balance after text normalization.',
  },
  {
    slug: 'customer-segmentation',
    title: 'Customer Segmentation',
    dataset: 'Mall Customers Dataset',
    model: 'K-Means Clustering',
    tools: 'Python, NumPy, Seaborn',
    problem: 'Group customers into behavior-based segments for targeting.',
    results: 'Found interpretable clusters using spending score and income.',
  },
  {
    slug: 'image-classification',
    title: 'Image Classification',
    dataset: 'CIFAR-10',
    model: 'CNN baseline',
    tools: 'Python, TensorFlow, Matplotlib',
    problem: 'Classify natural images into 10 categories.',
    results: 'Baseline accuracy improved through augmentation and regularization.',
  },
];
