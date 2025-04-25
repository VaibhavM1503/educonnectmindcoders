
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import ProgressCard from "@/components/dashboard/ProgressCard";
import SubjectCard from "@/components/dashboard/SubjectCard";
import QuizTable from "@/components/dashboard/QuizTable";
import { Clock, Book, Trophy, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const mockQuizzes = [
  {
    id: "1",
    name: "Linear Equations",
    subject: "Mathematics",
    date: "April 20, 2025",
    score: 92,
    scoreColor: "green" as const,
    timeTaken: "8 min 20 sec"
  },
  {
    id: "2",
    name: "Chemical Reactions",
    subject: "Science",
    date: "April 18, 2025",
    score: 75,
    scoreColor: "yellow" as const,
    timeTaken: "12 min 45 sec"
  },
  {
    id: "3",
    name: "World War II",
    subject: "Social Studies",
    date: "April 15, 2025",
    score: 88,
    scoreColor: "green" as const,
    timeTaken: "15 min 10 sec"
  },
  {
    id: "4",
    name: "Parts of Speech",
    subject: "English",
    date: "April 12, 2025",
    score: 95,
    scoreColor: "green" as const,
    timeTaken: "7 min 30 sec"
  },
  {
    id: "5",
    name: "Quadratic Equations",
    subject: "Mathematics",
    date: "April 10, 2025",
    score: 62,
    scoreColor: "red" as const,
    timeTaken: "14 min 20 sec"
  }
];

const subjects = [
  {
    id: "1",
    title: "Mathematics",
    description: "Master algebra, geometry, trigonometry and more with our math quizzes.",
    completed: "15/24",
    totalQuizzes: 24,
    averageScore: "78%",
    progressPercentage: 62.5
  },
  {
    id: "2",
    title: "Science",
    description: "Explore physics, chemistry and biology concepts through interactive quizzes.",
    completed: "8/20",
    totalQuizzes: 20,
    averageScore: "82%",
    progressPercentage: 40
  },
  {
    id: "3",
    title: "Social Studies",
    description: "Test your knowledge of history, geography, civics and economics.",
    completed: "5/18",
    totalQuizzes: 18,
    averageScore: "75%",
    progressPercentage: 27.8
  },
  {
    id: "4",
    title: "English",
    description: "Improve your grammar, vocabulary, and reading comprehension skills.",
    completed: "8/15",
    totalQuizzes: 15,
    averageScore: "90%",
    progressPercentage: 53.3
  }
];

const Dashboard = () => {
  const { user } = useAuth();

  useEffect(() => {
    // This would typically fetch data from the backend
    console.log("Dashboard mounted - would fetch user data here");
  }, []);

  const handleGeneratePath = () => {
    toast.info("AI is generating a personalized learning path for you...");
    setTimeout(() => {
      toast.success("Learning path generated successfully! Check the Learning Path section.");
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name || "Student"}!</h1>
        <Button className="bg-educonnect-orange hover:bg-orange-600" onClick={handleGeneratePath}>
          Generate New Learning Path
        </Button>
      </div>
      
      <section>
        <h2 className="text-xl font-semibold mb-4">Your Progress Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ProgressCard
            title="Study Hours This Week"
            value="42"
            icon={<Clock className="w-4 h-4" />}
          />
          <ProgressCard
            title="Completed Chapters"
            value="18"
            icon={<Book className="w-4 h-4" />}
          />
          <ProgressCard
            title="Days Streak"
            value="5"
            icon={<Trophy className="w-4 h-4" />}
          />
          <ProgressCard
            title="Test Score Average"
            value="85%"
            icon={<PieChart className="w-4 h-4" />}
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Your Subjects</h2>
          <Link to="/content-library">
            <Button variant="outline">View All Content</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {subjects.map(subject => (
            <SubjectCard
              key={subject.id}
              title={subject.title}
              description={subject.description}
              completed={subject.completed}
              totalQuizzes={subject.totalQuizzes}
              averageScore={subject.averageScore}
              progressPercentage={subject.progressPercentage}
              onClick={() => toast.info(`Opening ${subject.title} content...`)}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Quizzes</h2>
          <Link to="/quizzes">
            <Button variant="outline">Take a New Quiz</Button>
          </Link>
        </div>
        <QuizTable quizzes={mockQuizzes} title="Your Recent Quizzes" />
      </section>
    </div>
  );
};

export default Dashboard;
