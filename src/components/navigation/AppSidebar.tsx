
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Book, 
  Library, 
  ListChecks, 
  FileText, 
  Download, 
  Settings, 
  LogOut
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const AppSidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();

  const navigationItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Learning Path",
      icon: Book,
      path: "/learning-path",
    },
    {
      title: "Content Library",
      icon: Library,
      path: "/content-library",
    },
    {
      title: "Progress Tracker",
      icon: ListChecks,
      path: "/progress-tracker",
    },
    {
      title: "Quizzes",
      icon: FileText,
      path: "/quizzes",
    },
    {
      title: "Downloads",
      icon: Download,
      path: "/downloads",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center h-14">
          <Link to="/dashboard" className="flex items-center text-2xl font-bold text-white ml-3">
            EduConnect
          </Link>
          <div className="flex-1" />
          <SidebarTrigger className="mr-2 text-white" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigationItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 py-2 ${
                    location.pathname === item.path ? "bg-sidebar-accent" : ""
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <Button 
          variant="ghost" 
          onClick={logout} 
          className="w-full text-white hover:bg-sidebar-accent flex items-center gap-3 justify-start"
        >
          <LogOut className="h-5 w-5" />
          <span>Log out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
