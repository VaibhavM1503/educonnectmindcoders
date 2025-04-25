
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Quiz {
  id: string;
  name: string;
  subject: string;
  date: string;
  score: string | number;
  timeTaken: string;
  scoreColor: "red" | "yellow" | "green";
}

interface QuizTableProps {
  quizzes: Quiz[];
  title: string;
}

const QuizTable = ({ quizzes, title }: QuizTableProps) => {
  const getScoreColorClass = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-500";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="rounded-md border">
      <div className="border-b p-4">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Quiz Name</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Time Taken</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quizzes.map((quiz) => (
              <TableRow key={quiz.id}>
                <TableCell>{quiz.name}</TableCell>
                <TableCell>{quiz.subject}</TableCell>
                <TableCell>{quiz.date}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-6 rounded-full text-white flex items-center justify-center ${getScoreColorClass(quiz.scoreColor)}`}>
                      {quiz.score}%
                    </div>
                  </div>
                </TableCell>
                <TableCell>{quiz.timeTaken}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default QuizTable;
