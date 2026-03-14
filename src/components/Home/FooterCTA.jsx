import React from "react";

const FooterCTA = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 border-t border-blue-500/20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Let’s Build Data-Driven Products</h3>
          <p className="text-gray-400 text-sm">
            Open to machine learning internship opportunities, collaborative projects, and technical discussions on AI systems.
          </p>
        </div>
        <div className="text-gray-300 text-sm space-y-2 md:text-right">
          <p>GitHub: github.com/DEEPY-X7</p>
          <p>Email: deepy.x7@gmail.com</p>
          <p>© {new Date().getFullYear()} Deepanshu Yadav</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
