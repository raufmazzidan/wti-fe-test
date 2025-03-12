## Project Description

This project serves as a technical test of Wide Technologies. Designed to assess proficiency in modern web development using **Next.js**. It consists of multiple tasks that cover various fundamental aspects, including component creation, state management, form handling, API integration, and routing.

## Tasks Overview

### Task 1: Component Creation and State Management

- Develop a **Counter** component in React.
- The component should display a number with two buttons: **Increment** and **Decrement**.
- Clicking "Increment" should increase the number, while "Decrement" should decrease it.
- Ensure that the number does not go below zero.

### Task 2: Form Handling and Validation

- Create a form with the following fields:
  1. **Name** (text input)
  2. **Email** (email input)
  3. **Password** (password input)
  4. **Confirm Password** (password input)
- Implement the following validations:
  - **Name** should not be empty.
  - **Email** must be in a valid format.
  - **Password** must have a minimum length of **8 characters**.
  - **Confirm Password** must match the **Password** field.

### Task 3: API Integration

- Fetch data from the API endpoint: **[https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)**.
- Display the retrieved data in a React component, showing at least the **title** of the todo item.

### Task 4: Routing

- Implement a multi-page Next.js application with the following pages:
  1. **Home Page**
  2. **About Page**
- Provide navigation links for seamless switching between pages.

### Task 5: Bonus (Optional)

- Ensure the application has a **responsive layout** that adapts to different screen sizes (desktop & mobile).
- Design the layout creatively and include a **brief explanation** of your design choices.

## Technologies Used

- **Next.js** for frontend development
- **React** for component-based architecture
- **Tailwind CSS** for styling and responsiveness
- **TypeScript** for type safety and maintainability

## How To Run

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
