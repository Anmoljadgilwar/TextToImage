project structure to understand its architecture, functionality, and features.

# Text-to-Image Application

## 🏗️ **Project Architecture**

This is a **full-stack MERN application** with a modern React frontend and Node.js/Express backend, designed to generate AI-powered images from text prompts.

### **Frontend (Client)**

- **Framework**: React 19 with Vite as the build tool
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Context API for global state
- **Routing**: React Router DOM for navigation
- **UI/UX**: Framer Motion for animations, React Toastify for notifications
- **HTTP Client**: Axios for API communication

### **Backend (Server)**

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcrypt for password hashing
- **Payment Integration**: Razorpay for credit purchases
- **AI Integration**: ClipDrop API for text-to-image generation

## 🚀 **Core Features**

### **1. User Authentication System**

- **Registration**: Users can create accounts with name, email, and password
- **Login**: Secure authentication with JWT tokens
- **Password Security**: Bcrypt hashing for password protection
- **Session Management**: Token-based authentication with automatic logout

### **2. Credit-Based Image Generation**

- **Credit System**: New users start with 5 free credits
- **Cost Structure**: Each image generation costs 1 credit
- **Real-time Balance**: Credit balance updates immediately after generation
- **Credit Tracking**: Persistent credit balance stored in MongoDB

### **3. AI Image Generation**

- **Text-to-Image**: Converts text prompts into visual images
- **API Integration**: Uses ClipDrop API for high-quality image generation
- **Base64 Encoding**: Images are returned as base64 strings for immediate display
- **Error Handling**: Comprehensive error handling for API failures

### **4. Payment System**

- **Multiple Plans**: Different credit packages (Basic, Standard, Premium)
- **Razorpay Integration**: Secure payment processing
- **Payment Verification**: Server-side payment verification
- **Credit Addition**: Automatic credit addition after successful payment

### **5. User Interface**

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, gradient-based design with smooth animations
- **Interactive Elements**: Hover effects, loading states, and toast notifications
- **Navigation**: Seamless routing between pages

## 📁 **File Structure Breakdown**

### **Client Structure**

```
client/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Landing page hero section
│   │   ├── Navbar.jsx       # Navigation with credit display
│   │   ├── Login.jsx        # Authentication modal
│   │   ├── GenerateBtn.jsx  # Image generation button
│   │   ├── Steps.jsx        # How-to-use guide
│   │   ├── Testimonials.jsx # User testimonials
│   │   └── Footer.jsx       # Site footer
│   ├── pages/               # Main application pages
│   │   ├── Home.jsx         # Landing page
│   │   ├── Result.jsx       # Image generation interface
│   │   └── BuyCredit.jsx    # Credit purchase page
│   ├── context/             # Global state management
│   │   └── AppContext.jsx   # Main context provider
│   └── assets/              # Static assets and images
```

### **Server Structure**

```
server/
├── controllers/             # Business logic handlers
│   ├── userController.js    # User auth & payment logic
│   └── imageController.js   # Image generation logic
├── models/                  # Database schemas
│   ├── userModel.js         # User data model
│   └── transactionModel.js  # Payment transaction model
├── routes/                  # API route definitions
│   ├── userRoutes.js        # User-related endpoints
│   └── imageRoutes.js       # Image generation endpoints
├── middlewares/             # Request processing
│   └── auth.js              # JWT authentication middleware
└── config/                  # Configuration files
    └── mongodb.js           # Database connection
```

## �� **Application Flow**

### **1. User Journey**

1. **Landing**: User visits homepage with sample images and call-to-action
2. **Authentication**: User registers/logs in via modal
3. **Image Generation**: User enters text prompt and generates image
4. **Credit Management**: System checks credit balance before generation
5. **Payment**: If credits are low, user is redirected to purchase page
6. **Download**: Generated images can be downloaded

### **2. Technical Flow**

1. **Frontend Request**: User submits text prompt
2. **Authentication Check**: JWT token validates user identity
3. **Credit Validation**: Server checks if user has sufficient credits
4. **AI API Call**: Server calls ClipDrop API with the prompt
5. **Image Processing**: Received image is converted to base64
6. **Credit Deduction**: User's credit balance is reduced by 1
7. **Response**: Image data is sent back to frontend
8. **Display**: Image is rendered in the UI

## �� **Key Technologies & APIs**

### **Frontend Technologies**

- **React 19**: Latest React with hooks and modern patterns
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **React Router**: Client-side routing
- **Axios**: HTTP client for API calls

### **Backend Technologies**

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Token authentication
- **Bcrypt**: Password hashing
- **Razorpay**: Payment gateway integration

### **External APIs**

- **ClipDrop API**: Text-to-image generation service
- **Razorpay API**: Payment processing

## �� **Notable Features**

### **Security Features**

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Payment verification

### **User Experience**

- Real-time credit balance updates
- Loading states and animations
- Toast notifications for feedback
- Responsive design for all devices
- Modal-based authentication

### **Business Model**

- Freemium approach with free credits
- Credit-based pricing model
- Multiple payment plans
- Transaction tracking

This application demonstrates a complete full-stack implementation with modern web technologies, focusing on user experience, security, and scalability. The credit system ensures sustainable usage while the AI integration provides immediate value to users.
