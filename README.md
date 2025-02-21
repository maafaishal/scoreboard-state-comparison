# Scoreboard with Context, Redux, and Zustand State Managements

A practical demonstration of different state management approaches in React, comparing React Context, Redux, and Zustand through an interactive scoreboard application.

![image](https://github.com/user-attachments/assets/582684e5-13f1-4de8-a5ee-e1a3e662bf62)

## 📑 Table of Contents

- [🛠️ Tech Stack](#%EF%B8%8F-tech-stack)
- [🎯 Goals](#-goals)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [📖 Understanding the Implementation](#-understanding-the-implementation)
  - [Project Structure](#project-structure)
- [🧪 Testing Re-render Behavior](#-testing-re-render-behavior)
  - [How to Test](#how-to-test)
  - [Understanding the Differences](#understanding-the-differences)

## 🛠️ Tech Stack

### Core

- **React 19** - UI library with concurrent features
- **TypeScript** - Type safety and developer experience
- **Vite** - Next-generation frontend tooling

### State Management

- **React Context** - Built-in state management
- **Redux Toolkit** - Modern Redux with less boilerplate
- **Zustand** - Lightweight state management

### Routing & Navigation

- **React Router DOM** - Client-side routing

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Re-usable components built with Radix UI

## 🎯 Goals

This project aims to:

1. **Compare State Management Solutions**

   - React Context (Built-in solution)
   - Redux (Traditional state management)
   - Zustand (Modern, lightweight alternative)

2. **Demonstrate Re-rendering Behavior**
   - Visualize component re-renders in real-time
   - Compare performance implications
   - Showcase optimal state subscription patterns

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm manager

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

## 📖 Understanding the Implementation

### Project Structure

```
src/
├── components/      # Reusable UI components
├── layouts/         # Reusable UI layouts
├── lib/             # Reusable libraries
├── pages/           # Page components for each implementation
└── types/           # TypeScript type definitions
```

## 🧪 Testing Re-render Behavior

### How to Test

1. **Open Different Implementations**

   - Switch between Context, Redux, and Zustand using the tabs
   - Each implementation has the same UI but different state management

2. **Watch the Render Counter**

   - Each team score component shows its render count
   - The counter increments whenever the component re-renders

3. **Test Scenarios**

   a. **Update Left Score**

   ```
   1. Click +1 on the left team
   2. Observe: Only left component's render count increases
   3. Right component should not re-render
   ```

   b. **Update Team Names**

   ```
   1. Change team name in either component
   2. Watch render counts to see which components update
   ```

   c. **Reset Scores**

   ```
   1. Click the Reset button
   2. Both components should update once
   ```

### Understanding the Differences

1. **React Context**

   - Pros:
     - Built into React
     - Simple to implement
     - Good for low-frequency updates
   - Cons:
     - Can cause unnecessary re-renders
     - Less performant with frequent updates

2. **Redux**

   - Pros:
     - Powerful dev tools
     - Predictable state updates
     - Great for complex state
   - Cons:
     - More boilerplate code
     - Might be overkill for simple apps

3. **Zustand**
   - Pros:
     - Minimal boilerplate
     - Easy to learn
     - Great performance
   - Cons:
     - Less established ecosystem
