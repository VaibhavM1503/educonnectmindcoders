
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import QuizTable from "@/components/dashboard/QuizTable";
import { toast } from "sonner";

interface QuizCategory {
  id: string;
  name: string;
  description: string;
  availableQuizzes: number;
  image: string;
}

const categories: QuizCategory[] = [
  { 
    id: "math", 
    name: "Mathematics", 
    description: "Master algebra, geometry, and more", 
    availableQuizzes: 24,
    image: "/lovable-uploads/c5efeeef-a68a-4195-82cd-40e77a0c21d0.png"
  },
  { 
    id: "science", 
    name: "Science", 
    description: "Explore physics, chemistry, and biology", 
    availableQuizzes: 20,
    image: "/lovable-uploads/84d9a252-4b26-4bf8-aae4-dc0467061ccc.png"
  },
  { 
    id: "social", 
    name: "Social Studies", 
    description: "Learn about history, geography, and civics", 
    availableQuizzes: 18,
    image: "/lovable-uploads/c0143dd2-b0c3-4304-a47e-f6afd5fe4a19.png"
  },
  { 
    id: "english", 
    name: "English", 
    description: "Improve grammar, vocabulary, and comprehension", 
    availableQuizzes: 15,
    image: "/lovable-uploads/db5ea16a-8886-427b-91e8-5232ebef4fa5.png" 
  },
];

const recentQuizzes = [
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

const Quizzes = () => {
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  const [selectedTopic, setSelectedTopic] = useState("Algebra");

  const handleStartQuiz = () => {
    toast.info(`Starting a new quiz on ${selectedTopic} in ${selectedSubject}...`);
  };

  const QuizCategoryCard = ({ category }: { category: QuizCategory }) => (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={category.image} 
          alt={category.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-gray-500">{category.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-educonnect-blue">{category.availableQuizzes} Quizzes</span>
          <Button 
            size="sm" 
            className="bg-educonnect-blue hover:bg-blue-700"
            onClick={() => toast.info(`Browsing ${category.name} quizzes...`)}
          >
            Start
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Quizzes</h1>
        <p className="text-gray-500">Test your knowledge and track your learning progress</p>
      </div>

      <Tabs defaultValue="categories">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="categories">Quiz Categories</TabsTrigger>
          <TabsTrigger value="history">Quiz History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="categories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Start a New Quiz</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Subject
                  </label>
                  <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Select Topic
                  </label>
                  <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedSubject === "Mathematics" ? (
                        <>
                          <SelectItem value="Algebra">Algebra</SelectItem>
                          <SelectItem value="Geometry">Geometry</SelectItem>
                          <SelectItem value="Trigonometry">Trigonometry</SelectItem>
                          <SelectItem value="Calculus">Calculus</SelectItem>
                        </>
                      ) : selectedSubject === "Science" ? (
                        <>
                          <SelectItem value="Physics">Physics</SelectItem>
                          <SelectItem value="Chemistry">Chemistry</SelectItem>
                          <SelectItem value="Biology">Biology</SelectItem>
                        </>
                      ) : selectedSubject === "Social Studies" ? (
                        <>
                          <SelectItem value="History">History</SelectItem>
                          <SelectItem value="Geography">Geography</SelectItem>
                          <SelectItem value="Civics">Civics</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="Grammar">Grammar</SelectItem>
                          <SelectItem value="Vocabulary">Vocabulary</SelectItem>
                          <SelectItem value="Comprehension">Comprehension</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button 
                    className="bg-educonnect-orange hover:bg-orange-600 w-full" 
                    onClick={handleStartQuiz}
                  >
                    Start Quiz
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div>
            <h2 className="text-xl font-semibold mb-4">Browse Quiz Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map(category => (
                <QuizCategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="history">
          <QuizTable quizzes={recentQuizzes} title="Your Quiz History" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Quizzes;
