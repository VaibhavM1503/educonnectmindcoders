
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-educonnect-blue to-blue-700">
      <div className="container mx-auto px-4 py-16">
        <header className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold text-white">EduConnect</h1>
          <div className="flex space-x-4">
            <Button 
              onClick={() => navigate("/login")} 
              variant="ghost" 
              className="text-white hover:bg-white/10"
            >
              Login
            </Button>
            <Button 
              onClick={() => navigate("/register")} 
              className="bg-white text-educonnect-blue hover:bg-gray-100"
            >
              Sign Up
            </Button>
          </div>
        </header>
        
        <main className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your AI-Powered Learning Companion
            </h2>
            <p className="text-xl text-white/90 mb-8">
              EduConnect creates personalized learning paths using AI to guide your education journey. Get customized content, track your progress, and master subjects at your own pace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => navigate("/register")} 
                size="lg" 
                className="bg-educonnect-orange hover:bg-orange-600 text-white"
              >
                Start Learning Now
              </Button>
              <Button 
                onClick={() => navigate("/login")} 
                variant="outline" 
                size="lg" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-educonnect-blue"
              >
                Explore Features
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/f4219e75-419f-4801-b1a6-8865321eaf0b.png" 
              alt="Student dashboard example" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </main>

        <section className="mt-32">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose EduConnect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Personalized Learning</h3>
              <p>AI algorithms create custom learning paths based on your goals, strengths, and learning style</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Track Your Progress</h3>
              <p>Visualize your learning journey with detailed analytics and progress tracking tools</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">Quality Content</h3>
              <p>Access curriculum-aligned lectures, notes and interactive quizzes from trusted sources</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-blue-800 text-white py-6 mt-32">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 EduConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
