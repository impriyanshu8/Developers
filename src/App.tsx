import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ContactPage from "@/pages/ContactPage";
import AboutPU from "@/pages/AboutPU";
import AboutPage from "@/pages/AboutPage";
import AcademicsPage from "@/pages/AcademicsPage";
import DepartmentsPage from "@/pages/DepartmentsPage";
import DepartmentCSE from "@/pages/DepartmentCSE";
import DepartmentIT from "@/pages/DepartmentIT";
import DepartmentECE from "@/pages/DepartmentECE";
import DepartmentEEE from "@/pages/DepartmentEEE";
import DepartmentBT from "@/pages/DepartmentBT";
import NotFound from "@/pages/NotFound";
import DepartmentME from "@/pages/DepartmentME";
import DepartmentAS from "@/pages/DepartmentAS";
import AdmissionsPage from "@/pages/AdmissionsPage";
import ResearchPage from "@/pages/ResearchPage";
import FacultyPage from "@/pages/FacultyPage";
import CommitteesPage from "@/pages/CommitteesPage";
import PlacementsPage from "@/pages/PlacementsPage";
import PreviousYearPapersPage from "@/pages/PreviousYearPapersPage";
import StudentsPage from "./pages/StudentsPage";
import ImportantDownloadsPage from "./pages/ImportantDownloadsPage";
import FacultyProfilePage from "./pages/FacultyProfilePage";
import NewsPage from "./pages/NewsPage";
import ScrollToTop from "./lib/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/pu" element={<AboutPU />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/departments/cse" element={<DepartmentCSE />} />
          <Route path="/departments/it" element={<DepartmentIT />} />
          <Route path="/departments/ece" element={<DepartmentECE />} />
          <Route path="/departments/eee" element={<DepartmentEEE />} />
          <Route path="/departments/bt" element={<DepartmentBT />} />
          <Route path="/departments/me" element={<DepartmentME />} />
          <Route path="/departments/as" element={<DepartmentAS />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faculty" element={<FacultyPage />} />
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          <Route path="/previous-papers" element={<PreviousYearPapersPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/importantDownload" element={<ImportantDownloadsPage />} />
          <Route path="/facultyprofile" element={<FacultyProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
