# DevHub - AI-Powered Career Companion 🚀

DevHub is an AI-powered career companion mobile application designed specifically for developers. It provides job listings, coding challenges, and personalized career guidance. Built using React Native, this app offers a seamless and engaging user experience with robust features tailored for the developer community.

## 📖 Description

DevHub is built to assist developers in exploring job opportunities, practicing coding challenges, and gaining personalized career advice. The app is designed with a focus on usability, offering features like search and filters for a smooth user experience.

With the power of AI, future updates will include personalized job recommendations, interview preparation tips, and tailored career paths.

## ⚙️ Tech Stack

- **React Native** - For cross-platform mobile application development.
- **Expo Router** - For navigation and routing within the app.
- **TailwindCSS** - For responsive and modern UI design.
- **Clerk** - For secure and easy user authentication.
- **Firebase** - (Planned) For backend services like Firestore and cloud functions.
- **Axios** - For API integration and data fetching.
- **Codeforces API** - To fetch coding challenges and problem sets.
- **TypeScript** - Ensures type safety and better maintainability.

## 🚀 Features Implemented

- **Authentication**: User authentication using Clerk for secure and seamless login.
- **Job Listings**:
  - Browse and search for developer jobs from various sources.
  - Filter jobs by type (Full-time, Part-time, Contractor).
  - Search jobs by title, company, or type.
- **Challenges Section**: Integrates with the Codeforces API to provide coding challenges:
  - Search challenges by name and tags.
  - Filter challenges by difficulty rating using FlatList.
  - Pagination for a smoother browsing experience.
- **Profile and Settings**:
  - View and update user profile details.
  - Data fetched using Clerk's `UseUser`.
- **UI/UX Enhancements**:
  - Intuitive design with TailwindCSS for a modern look and feel.
  - Smooth transitions and user interactions.

## 🔨 Features In Progress / Left to Build

- **AI Integration**:
  - Personalized career guidance and recommendations.
  - Resume builder powered by AI for optimized job applications.
- **Interview Preparation**:
  - Curated questions and mock interview simulations.
- **Firebase Integration**:
  - For cloud storage, real-time database, and push notifications.
- **Bookmark and Save**:
  - Save favorite jobs and challenges for later.
- **User Analytics**:
  - Track user engagement and activity for better insights.


## 🚀 Getting Started
### Prerequisites

- Node.js (v18.x.x or later)
- Expo CLI (`npm install -g expo-cli`)
- Git (to clone the repository)

### Step-by-Step Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RaizelShah/DevHub.git
cd DevHub
```

### 2️⃣ Install Dependencies

```bash
npm install  # or yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory and add API keys:

```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_api_key
RAPID_API_KEY=your_rapid_api_key
```

### 4️⃣ Run the App

```bash
npm run start  # or expo start
```

### 📩 Contact

📧 Email: [shahraizel11@email.com](mailto\:shahraizel11@email.com)\

