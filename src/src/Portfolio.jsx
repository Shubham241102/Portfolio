import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Database, FileText } from "lucide-react";
import { motion } from "framer-motion";
// import SmokeBackground from "@/components/SmokeBackground"; // optional smoke animation

export default function Portfolio() {
  return (
    <div className="relative bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen text-white p-6 overflow-hidden">
      {/* <SmokeBackground /> */}
      <header className="text-center py-10 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Shubham Kumar
        </motion.h1>
        <p className="text-lg text-gray-300 mt-2">
          Student at Sikkim Manipal Institute of Technology
        </p>
        <p className="mt-2 text-sm text-blue-200">
          Machine Learning | Python | Data Analytics | Communication
        </p>
        <a href="/resume.pdf" download className="inline-flex mt-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <FileText className="mr-2" /> Download Resume
          </Button>
        </a>
      </header>

      <section className="max-w-3xl mx-auto text-center mt-6 relative z-10">
        <h2 className="text-3xl font-semibold text-blue-300 mb-4">About Me</h2>
        <p className="text-gray-300 text-sm">
          I'm a passionate computer science student with a strong interest in
          Machine Learning and Data Analytics. With hands-on project experience
          and an internship as an ML researcher, I strive to build intelligent
          systems and continue learning emerging technologies.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">
        <Card className="bg-slate-800 shadow-xl border-none">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">
              Text Summariser
            </h2>
            <p className="text-sm text-gray-300">
              Fine-tuned PEGASUS LLM on the SamSum dataset using Hugging Face for
              improved summary coherence and reduced processing time.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 shadow-xl border-none">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">
              Digit Recognition System
            </h2>
            <p className="text-sm text-gray-300">
              Built using TensorFlow and MNIST with data augmentation and
              hyperparameter tuning for optimized accuracy.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 shadow-xl border-none">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-blue-300 mb-2">
              SQL Query Generator
            </h2>
            <p className="text-sm text-gray-300">
              Developed with Gemini API to convert plain English into SQL,
              boosting usability for non-technical users.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center mt-12 relative z-10">
        <motion.h2
          className="text-3xl text-blue-400 font-semibold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Connect with Me
        </motion.h2>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Shubham241102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="text-white hover:text-blue-400" size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-kumar-50b3a5220/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-white hover:text-blue-400" size={28} />
          </a>
          <a
            href="https://www.kaggle.com/asshubham"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Database className="text-white hover:text-blue-400" size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4">
          krshubham493@gmail.com | 9110055636
        </p>
      </section>
    </div>
  );
}
