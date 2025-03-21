# Documentation

## App Development Procedures

Below I will write out steps so you too can create a similar app using AWS Amplify, React, Tailwind CSS, and Vite.

1. Create a new Vite project with the latest version. If you are creating within the root directory, use `.` as the project name to create the project within the current root directory. Otherwise, specify the directory name to create the project within the specified directory.

   > `npm create vite@latest`

2. Install dependencies.

   > `npm i tailwindcss @tailwindcss/vite react-router-dom aws-amplify @aws-amplify/ui-react`

   - `tailwindcss` is used for styling.
   - `@tailwindcss/vite` is used for configuring Tailwind CSS with Vite.
   - `react-router-dom` is used for routing.
   - `aws-amplify` is used for authentication.
   - `@aws-amplify/ui-react` is used for UI components. Add authenticator.

3. Setup Amplify sandbox environment.

   > `npm create amplify@latest`

4.
