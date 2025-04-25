
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Book, Video } from "lucide-react";
import { toast } from "sonner";

interface DownloadableResource {
  id: string;
  title: string;
  subject: string;
  fileType: "pdf" | "doc" | "video" | "worksheet";
  fileSize: string;
  icon: React.ReactNode;
  downloadCount: number;
}

const resources: DownloadableResource[] = [
  {
    id: "1",
    title: "Mathematics Formula Sheet",
    subject: "Mathematics",
    fileType: "pdf",
    fileSize: "2.4 MB",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    downloadCount: 1287
  },
  {
    id: "2",
    title: "Periodic Table Reference",
    subject: "Chemistry",
    fileType: "pdf",
    fileSize: "1.8 MB",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    downloadCount: 952
  },
  {
    id: "3",
    title: "Grammar Rules Handbook",
    subject: "English",
    fileType: "doc",
    fileSize: "3.2 MB",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    downloadCount: 743
  },
  {
    id: "4",
    title: "Trigonometry Worksheet",
    subject: "Mathematics",
    fileType: "worksheet",
    fileSize: "1.5 MB",
    icon: <Book className="h-6 w-6 text-orange-500" />,
    downloadCount: 621
  },
  {
    id: "5",
    title: "Chemical Reactions Overview",
    subject: "Chemistry",
    fileType: "video",
    fileSize: "85.2 MB",
    icon: <Video className="h-6 w-6 text-green-500" />,
    downloadCount: 498
  },
  {
    id: "6",
    title: "World History Timeline",
    subject: "History",
    fileType: "pdf",
    fileSize: "4.7 MB",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    downloadCount: 385
  },
  {
    id: "7",
    title: "Programming Exercises",
    subject: "Computer Science",
    fileType: "worksheet",
    fileSize: "2.1 MB",
    icon: <Book className="h-6 w-6 text-orange-500" />,
    downloadCount: 729
  },
  {
    id: "8",
    title: "Physics Formulas and Constants",
    subject: "Physics",
    fileType: "pdf",
    fileSize: "1.9 MB",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
    downloadCount: 814
  },
];

const Downloads = () => {
  const handleDownload = (resource: DownloadableResource) => {
    toast.success(`Downloading ${resource.title}...`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Downloads</h1>
        <p className="text-gray-500">Access and download educational resources for offline learning</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.id} className="hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-gray-500">{resource.subject}</p>
                  <div className="mt-2 flex items-center text-xs text-gray-500">
                    <span>{resource.fileType.toUpperCase()}</span>
                    <span className="mx-2">•</span>
                    <span>{resource.fileSize}</span>
                    <span className="mx-2">•</span>
                    <span>{resource.downloadCount.toLocaleString()} downloads</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleDownload(resource)}
                variant="outline"
                className="w-full"
              >
                <Download className="h-4 w-4 mr-2" /> Download
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Downloads;
