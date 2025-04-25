
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectCardProps {
  title: string;
  description: string;
  completed: string;
  totalQuizzes: number;
  averageScore: string;
  progressPercentage: number;
  onClick?: () => void;
}

const SubjectCard = ({
  title,
  description,
  completed,
  totalQuizzes,
  averageScore,
  progressPercentage,
  onClick
}: SubjectCardProps) => {
  const getProgressColorClass = (percentage: number) => {
    if (percentage >= 80) return "progress-bar-fill-high";
    if (percentage >= 50) return "progress-bar-fill-medium";
    return "progress-bar-fill-low";
  };

  return (
    <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-gray-500">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="progress-bar mt-4">
          <div 
            className={`progress-bar-fill ${getProgressColorClass(progressPercentage)}`} 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-4 text-sm">
          <span>Completed: {completed}</span>
          <span>Avg. Score: {averageScore}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCard;
