# Text-to-Image Application

A full-stack application that generates images from text prompts using AI.

## Setup Instructions

### Server Setup

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Create a `.env` file in the server directory with the following variables:

   ```
   MONGODB_URI=mongodb://localhost:27017/
   JWT_SECRET=your_jwt_secret_key_here
   CLIPDROP_API=your_clipdrop_api_key_here
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   npm start
   ```

### Client Setup

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Create a `.env` file in the client directory with:

   ```
   VITE_BACKEND_URL=http://localhost:4000
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- User authentication (login/register)
- Credit-based image generation
- Real-time credit balance display
- Responsive design

## Credit System

- New users start with 5 credits
- Each image generation costs 1 credit
- Credits are displayed in the navbar
- Users are redirected to buy page when credits run out

## Fixed Issues

- Credit balance now properly updates in the navbar
- Fixed server-side credit loading logic
- Added proper error handling for credit API calls
- Improved user experience with loading states
