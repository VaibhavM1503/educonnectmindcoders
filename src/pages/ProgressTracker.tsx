
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

interface SubjectProgress {
  id: string;
  name: string;
  progress: number;
  topics: TopicProgress[];
}

interface TopicProgress {
  id: string;
  name: string;
  progress: number;
}

const mockData: SubjectProgress[] = [
  {
    id: "math",
    name: "Mathematics",
    progress: 75,
    topics: [
      { id: "math1", name: "Algebra", progress: 90 },
      { id: "math2", name: "Geometry", progress: 80 },
      { id: "math3", name: "Trigonometry", progress: 65 },
      { id: "math4", name: "Calculus", progress: 40 },
    ]
  },
  {
    id: "physics",
    name: "Physics",
    progress: 60,
    topics: [
      { id: "physics1", name: "Mechanics", progress: 85 },
      { id: "physics2", name: "Electromagnetism", progress: 60 },
      { id: "physics3", name: "Optics", progress: 45 },
      { id: "physics4", name: "Modern Physics", progress: 30 },
    ]
  },
  {
    id: "chemistry",
    name: "Chemistry",
    progress: 50,
    topics: [
      { id: "chem1", name: "Inorganic Chemistry", progress: 65 },
      { id: "chem2", name: "Organic Chemistry", progress: 45 },
      { id: "chem3", name: "Physical Chemistry", progress: 40 },
    ]
  },
  {
    id: "cs",
    name: "Computer Science",
    progress: 80,
    topics: [
      { id: "cs1", name: "Programming Fundamentals", progress: 95 },
      { id: "cs2", name: "Data Structures", progress: 85 },
      { id: "cs3", name: "Algorithms", progress: 75 },
      { id: "cs4", name: "Database Systems", progress: 70 },
    ]
  },
];

const statsData = [
  { label: "Study Hours This Week", value: "42" },
  { label: "Completed Chapters", value: "18" },
  { label: "Days Streak", value: "5" },
  { label: "Test Score Average", value: "85%" },
];

const ProgressTracker = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const getProgressColorClass = (percentage: number) => {
    if (percentage >= 80) return "bg-educonnect-green";
    if (percentage >= 50) return "bg-educonnect-orange";
    return "bg-educonnect-red";
  };

  const overallProgress = Math.round(
    mockData.reduce((sum, subject) => sum + subject.progress, 0) / mockData.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Progress Tracker</h1>
        <p className="text-gray-500">Track your learning journey and stay motivated</p>
      </div>

      <Card className="bg-educonnect-blue text-white">
        <CardContent className="p-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-center">Overall Progress</h3>
            <div className="h-4 bg-white/30 rounded-full">
              <div 
                className="h-full bg-white rounded-full" 
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <p className="text-center text-xl font-bold">{overallProgress}%</p>
            <p className="text-center">You're making great progress! Keep going!</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 text-center">
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Subject-wise Progress</h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {mockData.map((subject) => (
            <AccordionItem key={subject.id} value={subject.id} className="border rounded-lg overflow-hidden">
              <Card>
                <CardHeader className="p-0">
                  <AccordionTrigger className="px-6 py-4">
                    <div className="flex items-center w-full">
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <div className="ml-auto flex items-center gap-4">
                        <span className="text-gray-500">{subject.progress}%</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                </CardHeader>
                <AccordionContent>
                  <CardContent className="pt-0">
                    <div className="space-y-4 pt-4">
                      {subject.topics.map((topic) => (
                        <div key={topic.id} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm">{topic.name}</span>
                            <span className="text-sm text-gray-500">{topic.progress}%</span>
                          </div>
                          <Progress value={topic.progress} className="h-2" indicatorClassName={getProgressColorClass(topic.progress)} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </AccordionContent>
              </Card>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ProgressTracker;
