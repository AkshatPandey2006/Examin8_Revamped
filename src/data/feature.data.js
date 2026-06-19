import { BookOpenText, Smartphone, Zap, BarChart3, LayoutDashboard, Share2, Award } from "lucide-react";

const features = [
  {
    title: "Pick from 10 Lakh+ Questions",
    description:
      "Zero typing or tech knowledge required. Just chose the questions you want.",
    icon: <BookOpenText className="size-5" />, // Changed to BookOpenText to represent question banks
  },
  {
    title: "Compatible on All Devices",
    description:
      "Works perfectly on all devices, including desktops, tablets, and smartphones.",
    icon: <Smartphone className="size-5" />, // Changed to Smartphone to represent device compatibility
  },
  {
    title: "Get your Personal Mobile App",
    description:
      "Your name, your logo where students can attempt tests and access study resources.",
    icon: <LayoutDashboard className="size-5" />, // Changed to LayoutDashboard to represent a branded app interface
  },
  {
    title: "Instant Result with Leaderboard",
    description:
      "Examin8 displays the result instantly as the test ends. Along with a student leaderboard.",
    icon: <Award className="size-5" />, // Changed to Award to represent results and rankings
  },
  {
    title: "Share Study Material",
    description:
      "Create batches and upload your PDF notes, papers or videos with your students easily.",
    icon: <Share2 className="size-5" />, // Changed to Share2 to represent content distribution
  },
  {
    title: "Prefilled Blueprint",
    description:
      "You can directly use our blueprints to create full length exams for senior classes.",
    icon: <Zap className="size-5" />, // Kept Zap as it implies speed and efficiency in creating exams
  },
];

export default features;