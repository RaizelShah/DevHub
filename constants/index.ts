import email from "@/assets/icons/email.png";
import google from "@/assets/icons/google.png";
import lock from "@/assets/icons/lock.png";
import user from "@/assets/icons/user.png";
import flag from "@/assets/icons/flag.png";
import home from "@/assets/icons/home.png";
import portfolio from "@/assets/icons/portfolio.png";
import list from "@/assets/icons/list.png";
import check from "@/assets/images/check.png";
import person from "@/assets/icons/person.png";
import chatbot from "@/assets/icons/chatbot.png";
import resume from "@/assets/icons/resume.png";
import search from "@/assets/icons/search.png";
import plus from "@/assets/icons/plus.png";
import logout from "@/assets/icons/logout.png";
import sun from "@/assets/icons/sun.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  check,
};

export const icons = {
  email,
  google,
  lock,
  user,
  flag,
  home,
  portfolio,
  list,
  person,
  chatbot,
  resume,
  search,
  plus,
  logout,
  sun,
};

export const onboarding = [
  {
    id: 1,
    title: "AI Career Roadmap!",
    description: "Guides users with tailored plans.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Jobs & Coding Challenges",
    description: "Find jobs, solve problems.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Resume Analyzer",
    description: "AI-driven feedback",
    image: images.onboarding3,
  },
];
export const trendingNews = [
  {
    id: 1,
    title: "React 19 Beta Released – New Features Explained!",
    source: "Dev.to",
    link: "https://dev.to/react-19-beta",
  },
  {
    id: 2,
    title: "GitHub Copilot vs ChatGPT – Which is better for coding?",
    source: "Hacker News",
    link: "https://news.ycombinator.com/item?id=123456",
  },
];

export const aiFeatures = [
  {
    id: 1,
    title: "AI Career Assistant",
    description: "Get career advice, resume feedback & interview tips!",
    icon: icons.chatbot,
  },
  {
    id: 2,
    title: "Resume Analyzer",
    description: "AI-driven feedback on your resume to enhance job prospects.",
    icon: icons.resume,
  },
];

export const recommendedProjects = [
  {
    id: 1,
    title: "🔹 Build a Dev Portfolio",
    description: "Learn how to make a great developer portfolio with Next.js",
  },
  {
    id: 2,
    title: "🔹 Full-Stack MERN App",
    description: "Build a real-world project with authentication & APIs",
  },
];

export const quickTools = [
  { id: 1, title: "📜 Resume Tips" },
  { id: 2, title: "🎯 Interview Prep" },
];

export const jobListings = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full-Time",
    description:
      "Seeking a React Native developer with 2+ years of experience...",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Microsoft",
    location: "Bangalore, India",
    type: "Hybrid",
    description:
      "Work on cutting-edge AI applications and cloud technologies...",
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Amazon",
    location: "Remote",
    type: "Contract",
    description:
      "Looking for a Node.js backend developer with AWS experience...",
  },
];

export const challenges = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    tags: ["Array", "HashMap"],
    description:
      "Find two numbers in an array that add up to a specific target.",
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    tags: ["String", "Sliding Window"],
    description:
      "Find the length of the longest substring without repeating characters.",
  },
  {
    id: 3,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    tags: ["Array", "Binary Search"],
    description: "Find the median of two sorted arrays.",
  },
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Pathfinding Visualizer",
    description: "Visualize algorithms like A*, Dijkstra, BFS, and DFS.",
    tags: ["React", "TailwindCSS", "Algorithms"],
  },
  {
    id: 2,
    title: "Mental Health Companion",
    description: "AI-powered chatbot for mental well-being.",
    tags: ["AI", "React Native", "Firebase"],
  },
  {
    id: 3,
    title: "Cricket News App",
    description: "Get the latest cricket news and updates.",
    tags: ["React Native", "API Integration"],
  },
];

export const ratingFilters = [
  "All",
  "800",
  "1000",
  "1200",
  "1400",
  "1600",
  "1800",
  "2000",
  "2200",
  "2400",
  "2600",
  "2800",
  "3000",
];

export const data = {
  onboarding,
  trendingNews,
  aiFeatures,
  recommendedProjects,
  quickTools,
  jobListings,
  challenges,
  portfolioProjects,
  ratingFilters,
};
