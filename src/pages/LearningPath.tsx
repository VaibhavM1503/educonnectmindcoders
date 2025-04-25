
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const subjects = ["Mathematics", "Science", "Computer Science", "English", "History"];
const grades = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

const LearningPath = () => {
  const [selectedSubject, setSelectedSubject] = useState("Science");
  const [selectedGrade, setSelectedGrade] = useState("Grade 10");
  const [isGenerating, setIsGenerating] = useState(false);
  
  // This would be fetched from the backend in a real app
  const pathSteps = [
    { id: 1, name: "Basics", status: "completed", color: "bg-green-500" },
    { id: 2, name: "Chemical Reactions", status: "completed", color: "bg-green-500" },
    { id: 3, name: "Acids & Bases", status: "current", color: "bg-orange-500" },
    { id: 4, name: "Metals & Non-metals", status: "locked", color: "bg-gray-300" },
    { id: 5, name: "Carbon Compounds", status: "locked", color: "bg-gray-300" },
  ];

  const handleGeneratePath = () => {
    setIsGenerating(true);
    toast.info(`Generating learning path for ${selectedSubject} - ${selectedGrade}...`);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Learning path generated successfully!");
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Learning Path</h1>
        <p className="text-gray-500">Personalized learning paths created by AI to guide your education journey</p>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Generate a Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Grade
              </label>
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Subject
              </label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>
                      {subject}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button 
                className="bg-educonnect-blue hover:bg-blue-700 w-full" 
                onClick={handleGeneratePath}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white mr-2"></div>
                    Generating...
                  </div>
                ) : (
                  "Generate Path"
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-6">Your Learning Path: Science</h2>
        
        <div className="relative">
          {/* Path line */}
          <div className="absolute left-[22px] top-10 h-[80%] w-1 bg-gray-200"></div>
          
          <div className="space-y-6">
            {pathSteps.map((step, index) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className={`${step.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold shrink-0`}>
                  {step.id}
                </div>
                <div className="grow">
                  <Card className={`${step.status === 'current' ? 'border-educonnect-orange border-2' : ''}`}>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{step.name}</h3>
                      {step.status === 'current' && (
                        <>
                          <p className="text-sm text-gray-500 mt-2 mb-4">Complete Chapter 3 to unlock next topics. Watch videos and take quiz to complete.</p>
                          <Button className="bg-educonnect-orange hover:bg-orange-600">Continue</Button>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
