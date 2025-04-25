
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Book, Video, FileText } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  subject: string;
  type: "video" | "document" | "quiz";
  duration?: string;
  source?: string;
  rating?: number;
}

const mockContent: ContentItem[] = [
  { id: "1", title: "Introduction to Algebra", subject: "Mathematics", type: "video", duration: "24 mins", source: "YouTube", rating: 4.8 },
  { id: "2", title: "Chemical Reactions Explained", subject: "Science", type: "video", duration: "18 mins", source: "Khan Academy", rating: 4.9 },
  { id: "3", title: "World History - The Renaissance", subject: "History", type: "document", source: "PDF Notes", rating: 4.5 },
  { id: "4", title: "Grammar Rules - Advanced", subject: "English", type: "document", source: "PDF Notes", rating: 4.3 },
  { id: "5", title: "Python Programming Basics", subject: "Computer Science", type: "video", duration: "32 mins", source: "YouTube", rating: 4.7 },
  { id: "6", title: "Quadratic Equations Practice", subject: "Mathematics", type: "quiz", duration: "15 mins", rating: 4.6 },
  { id: "7", title: "Organic Chemistry Fundamentals", subject: "Science", type: "document", source: "PDF Notes", rating: 4.4 },
  { id: "8", title: "Literary Analysis Techniques", subject: "English", type: "video", duration: "22 mins", source: "EduConnect Original", rating: 4.9 },
];

const ContentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  
  const filteredContent = mockContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "videos") return matchesSearch && item.type === "video";
    if (activeTab === "documents") return matchesSearch && item.type === "document";
    if (activeTab === "quizzes") return matchesSearch && item.type === "quiz";
    
    return matchesSearch;
  });

  const ContentCard = ({ item }: { item: ContentItem }) => {
    const getIcon = () => {
      switch (item.type) {
        case "video":
          return <Video className="h-5 w-5 text-educonnect-blue" />;
        case "document":
          return <FileText className="h-5 w-5 text-educonnect-orange" />;
        case "quiz":
          return <Book className="h-5 w-5 text-educonnect-green" />;
      }
    };

    return (
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="mt-1">{getIcon()}</div>
            <div>
              <h3 className="font-medium">{item.title}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">{item.subject}</span>
                {item.duration && (
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">{item.duration}</span>
                )}
                {item.source && (
                  <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">{item.source}</span>
                )}
              </div>
              {item.rating && (
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`text-sm ${i < Math.floor(item.rating!) ? "text-yellow-400" : "text-gray-300"}`}>★</div>
                    ))}
                  </div>
                  <span className="text-xs ml-1 text-gray-500">{item.rating}</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Content Library</h1>
        <p className="text-gray-500">Browse through our comprehensive collection of educational resources</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input 
          className="pl-10" 
          placeholder="Search for content by title, subject, or keyword..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 max-w-md">
          <TabsTrigger value="all">All Content</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeTab} className="mt-6">
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredContent.map(item => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No content found matching your search criteria.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                }}
              >
                Clear Search
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentLibrary;
