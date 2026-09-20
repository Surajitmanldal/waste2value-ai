# ♻️ Waste2Value AI

> AI-powered waste identification and recycling guidance built with AWS.

Waste2Value AI is a photo-based waste identification application that helps users understand what type of waste they have and how it can be handled responsibly.

Users can upload a photo of an everyday waste item. The application uses **Amazon Rekognition** to identify visual labels from the image and then applies application-level classification logic to convert those labels into useful waste categories and disposal guidance.

---

## 🌱 Problem

People often don't know how to properly dispose of different types of waste.

For example:

- Is a broken charger recyclable?
- Should a plastic bottle go into recycling?
- How should electronic waste be handled?
- What materials might an item contain?
- Should an item be separated from regular household waste?

Incorrect disposal can cause recyclable materials to be lost and can result in electronic or other special waste being mixed with regular household waste.

Waste2Value AI aims to make this process simpler by allowing users to start with something they already have — **a photo of the waste item**.

---

## 💡 Solution

Waste2Value AI provides a simple workflow:

```text
📷 Upload a waste image
        ↓
☁️ Store the image in Amazon S3
        ↓
⚡ Process the request with AWS Lambda
        ↓
👁️ Analyze the image with Amazon Rekognition
        ↓
🧠 Classify the detected item
        ↓
♻️ Provide recycling and disposal guidance

## ✨ Features

- 📷 Upload waste images
- 🔍 Image-based waste identification
- ♻️ Waste category classification
- 📊 Confidence score
- 🧱 Material information
- 🌱 Recycling guidance
- 💡 Practical disposal tips
- 📱 Responsive interface
- ⚡ Serverless AWS backend
- ☁️ Cloud-based image storage


## 🏗️ Architecture

```text
                         ┌─────────────────┐
                         │     Next.js     │
                         │    Frontend     │
                         └────────┬────────┘
                                  │
                                  │ POST /upload
                                  ▼
                         ┌─────────────────┐
                         │  API Gateway    │
                         │    HTTP API     │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   AWS Lambda    │
                         │                 │
                         │ Upload + Analyze│
                         └──────┬─────┬────┘
                                │     │
                       ┌────────┘     └─────────┐
                       ▼                        ▼
              ┌─────────────────┐      ┌─────────────────┐
              │   Amazon S3     │      │  Amazon         │
              │                 │      │  Rekognition    │
              │  Store Images   │      │  Detect Labels  │
              └─────────────────┘      └────────┬────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │ Waste Classifier │
                                       │ Application Logic│
                                       └────────┬─────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  Analysis Result │
                                       │                  │
                                       │ Category         │
                                       │ Recyclability    │
                                       │ Materials        │
                                       │ Guidance         │
                                       └──────────────────┘
☁️ AWS Services Used
AWS Amplify

AWS Amplify hosts the Next.js frontend and provides the production deployment.

The application is connected to GitHub, allowing the deployed application to be updated from the repository.

Amazon API Gateway

API Gateway provides the HTTP API endpoint used by the frontend.

Current route:

POST /upload

The frontend sends the uploaded image to this endpoint.

AWS Lambda

AWS Lambda handles the backend processing.

The Lambda function:

Receives the uploaded image from API Gateway.
Converts the request body into an image buffer.
Generates a unique S3 object key.
Uploads the image to Amazon S3.
Sends the stored image to Amazon Rekognition.
Receives the detected labels.
Returns the labels to the frontend.
Amazon S3

Amazon S3 stores the uploaded waste images.

Images are stored using unique object keys such as:

uploads/<unique-id>.<extension>
Amazon Rekognition

Amazon Rekognition analyzes the uploaded image and detects visual labels.

For example, a broken charger may produce labels such as:

Adapter
Electronics
Plug
Hardware

These labels are then processed by Waste2Value's classification logic.

🧠 Waste Classification

Amazon Rekognition provides visual labels and confidence scores.

Waste2Value then applies application-level classification logic to interpret those labels into waste categories.

Example: E-Waste
Image
  ↓
Amazon Rekognition
  ↓
Adapter
Electronics
Plug
  ↓
Waste Classifier
  ↓
E-Waste

The application can then provide:

Category: E-Waste
Recyclable: Yes

along with relevant disposal guidance.

Example: Plastic
Image
  ↓
Amazon Rekognition
  ↓
Bottle
Plastic
Container
  ↓
Waste Classifier
  ↓
Plastic
Current Categories

The current classification logic supports common categories including:

E-Waste
Plastic
Paper
Glass
General Waste

The classification layer can be extended with additional categories and waste-specific rules.

🛠️ Tech Stack
Frontend
Next.js
React
TypeScript
Tailwind CSS
AWS
AWS Amplify
Amazon API Gateway
AWS Lambda
Amazon S3
Amazon Rekognition
Development
Git
GitHub
VS Code
🚀 Live Demo

Live Application:  https://main.d2qycnbnnbyxw6.amplifyapp.com/

YOUR_AMPLIFY_URL

💻 Local Development
Prerequisites
Node.js 18+
npm
Git
1. Clone the repository
git clone https://github.com/surajitmanldal/waste2value-ai.git
2. Navigate to the project
cd waste2value-ai
3. Install dependencies
npm install
4. Configure environment variables

Create a .env.local file:

NEXT_PUBLIC_API_URL=https://YOUR_API_ID.execute-api.ap-south-1.amazonaws.com

Do not include /upload in the environment variable.

The frontend automatically sends requests to:

POST ${NEXT_PUBLIC_API_URL}/upload
5. Start the development server
npm run dev


🎯 Hackathon

Waste2Value AI was built for the WeMakeDevs × AWS First Commit Hackathon 2026.

The project demonstrates how AWS cloud services can be used to address a real-world waste-management problem through an accessible image-based experience.


👨‍💻 Author
Surajit Mandal