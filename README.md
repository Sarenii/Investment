# Smart Investment Advisor Platform

## Table of Contents
- [Project Overview](#project-overview)
- [Goals](#goals)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
- [Collaboration Guidelines](#collaboration-guidelines)
    - [Setting Up Git and GitHub](#setting-up-git-and-github)
    - [Branching Strategy](#branching-strategy)
    - [Committing Changes](#committing-changes)
    - [Pushing and Pulling Changes](#pushing-and-pulling-changes)
    - [Handling Merge Conflicts](#handling-merge-conflicts)
    - [Best Practices](#best-practices)
- [Contributing](#contributing)
- [Resources](#resources)
- [Contact](#contact)
- [License](#license)

---

## Project Overview

The **Smart Investment Advisor Platform** is a web-based application designed to help users manage their investments intelligently. Leveraging modern JavaScript practices, the platform offers features such as user profiles, portfolio management, investment tracking, and data visualization. This project serves both as a practical tool for users and an educational experience for students learning JavaScript and collaborative development.

## Goals

- **Educational Objectives:**
    - Master fundamental JavaScript concepts including variables, operators, control flow, functions, and data structures.
    - Develop problem-solving and debugging skills through hands-on coding exercises.
    - Foster collaborative development practices using Git and GitHub.

- **Project Objectives:**
    - Create a user-friendly interface for managing investment portfolios.
    - Implement robust data handling and persistence mechanisms.
    - Integrate dynamic features such as real-time data visualization and risk assessment.

## Technologies Used

- **Frontend:**
    - HTML5
    - CSS3
    - JavaScript (ES6+)

- **Tools:**
    - Visual Studio Code
    - Node.js
    - Live Server Extension
    - Git & GitHub

## Project Structure

```
smart-investment-advisor/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── assets/
│       ├── images/
│       ├── fonts/
│       └── icons/
├── src/
│   ├── styles/
│   │   ├── main.css
│   │   └── responsive.css
│   ├── scripts/
│   │   ├── app.js
│   │   ├── utils.js
│   │   ├── api.js
│   │   └── modules/
│   │       ├── user.js
│   │       ├── investment.js
│   │       └── dashboard.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── InvestmentList.js
│   │   ├── InvestmentForm.js
│   │   └── Charts.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── investmentService.js
│   │   └── dataService.js
│   └── tests/
│       ├── user.test.js
│       ├── investment.test.js
│       └── dashboard.test.js
├── server/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── investmentRoutes.js
│   │   └── dataRoutes.js
│   ├── models/
│   │   ├── User.js
│   │   └── Investment.js
│   └── controllers/
│       ├── authController.js
│       ├── investmentController.js
│       └── dataController.js
├── config/
│   ├── default.json
│   └── environment.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── webpack.config.js
```

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Visual Studio Code (VS Code):** [Download Here](https://code.visualstudio.com/)
- **Node.js:** [Download Here](https://nodejs.org/) (optional but recommended for JavaScript runtime)
- **Git:** [Download Here](https://git-scm.com/downloads)
- **Live Server Extension for VS Code:** Installation steps below.

### Installation

1. **Clone the Repository:**

     ```bash
     git clone git@github.com:Ishmael-Chepsoi/ourInvest-project.git
     cd smart-investment-advisor
     ```

2. **Install Dependencies:**

     If your project uses `npm`, install the necessary packages:

     ```bash
     npm install
     ```

3. **Install Live Server Extension:**

     - Open **Visual Studio Code**.
     - Navigate to the **Extensions** panel by clicking the Extensions icon in the Activity Bar or pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on Mac).
     - Search for "**Live Server**" by **Ritwick Dey**.
     - Click **Install**.

### Running the App

1. **Open `index.html`:**

     - In VS Code, navigate to the `public/` folder.
     - Open the `index.html` file.

2. **Start Live Server:**

     - **Option 1:** Right-click inside the `index.html` file and select **"Open with Live Server"**.
     - **Option 2:** Click the **Go Live** button located at the bottom-right corner of VS Code's status bar.

3. **View the Application:**

     - Your default browser will automatically open the app at a local URL, typically `http://127.0.0.1:5500/public/index.html`.
     - Any changes you make to your code will automatically reflect in the browser.

4. **Access the Console:**

     - Open the browser's developer tools by pressing `F12`, `Ctrl+Shift+I` (Windows/Linux), or `Cmd+Option+I` (Mac).
     - Navigate to the **Console** tab to view logs and errors.

---

## Collaboration Guidelines

Successful collaboration is essential for the smooth development of the Smart Investment Advisor Platform. Follow these guidelines to ensure effective teamwork and minimize conflicts.

### Setting Up Git and GitHub

1. **Create a GitHub Account:**

     - Sign up for a free account at [GitHub](https://github.com/) if you don't have one.

2. **Fork the Repository:**

     - Navigate to the main repository page on GitHub.
     - Click the **Fork** button to create a personal copy of the repository.

3. **Clone Your Fork Locally:**

     ```bash
     git clone git@github.com:Ishmael-Chepsoi/ourInvest-project.git
     cd smart-investment-advisor
     ```

4. **Set Up Remote Upstream:**

     - This allows you to fetch updates from the original repository.

     ```bash
     git remote add upstream git@github.com:Ishmael-Chepsoi/ourInvest-project.git
     ```

     - Verify the remotes:

     ```bash
     git remote -v
     ```

### Branching Strategy

Using branches helps manage different features and prevents conflicts. Follow this branching strategy:

1. **Main Branch:**

     - Represents the production-ready code.
     - Should always be stable.

2. **Feature Branches:**

     - Create a new branch for each feature or task.
     - Naming convention: `feature/your-feature-name`

     ```bash
     git checkout -b feature/joshua-arithmetic-operators
     ```

### Committing Changes

1. **Make Your Changes:**

     - Work on your assigned feature or task in the feature branch.

2. **Stage Your Changes:**

     ```bash
     git add .
     ```

     - Alternatively, add specific files:

     ```bash
     git add src/scripts/operators_joshua.js
     ```

3. **Commit Your Changes:**

     ```bash
     git commit -m "Add arithmetic operator functions for investment calculations"
     ```

     - Use clear and descriptive commit messages.

### Pushing and Pulling Changes

1. **Push to Your Fork:**

     ```bash
     git push origin feature/joshua-arithmetic-operators
     ```

2. **Create a Pull Request (PR):**

     - Navigate to your fork on GitHub.
     - Click **Compare & pull request**.
     - Provide a clear description of your changes.
     - Submit the PR to the main repository.

3. **Syncing Your Fork:**

     - Regularly fetch and merge changes from the upstream repository to keep your fork up-to-date.

     ```bash
     git fetch upstream
     git checkout main
     git merge upstream/main
     ```

4. **Rebasing Your Feature Branch (Optional):**

     - To incorporate the latest changes from `main` into your feature branch.

     ```bash
     git checkout feature/joshua-arithmetic-operators
     git rebase main
     ```

### Handling Merge Conflicts

Merge conflicts occur when multiple branches modify the same part of a file. To handle them:

1. **Identify the Conflict:**

     - Git will notify you of conflicting files during a merge or rebase.

2. **Open the Conflicted File:**

     - Conflicted sections are marked with `<<<<<<<`, `=======`, and `>>>>>>>`.

3. **Resolve the Conflict:**

     - Decide which changes to keep or how to combine them.

4. **Stage the Resolved File:**

     ```bash
     git add path/to/conflicted-file.js
     ```

5. **Continue the Merge or Rebase:**

     ```bash
     git commit -m "Resolve merge conflict in path/to/conflicted-file.js"
     ```
     - Or for rebase:
     ```bash
     git rebase --continue
     ```

6. **Push the Resolved Changes:**

     ```bash
     git push origin feature/joshua-arithmetic-operators
     ```

### Best Practices

- **Pull Before You Push:**

    - Always pull the latest changes before pushing to minimize conflicts.

    ```bash
    git checkout main
    git pull upstream main
    git checkout feature/your-feature
    git merge main
    ```

- **Small, Frequent Commits:**

    - Commit changes in small, manageable chunks with clear messages.

- **Avoid Committing Sensitive Data:**

    - Use `.gitignore` to exclude files like `node_modules/`, environment variables, etc.

- **Communicate:**

    - Inform team members about the features you are working on to avoid overlapping efforts.

- **Review Code:**

    - Participate in code reviews to maintain code quality and share knowledge.

---

## Contributing

We welcome contributions from all team members. Follow these steps to contribute effectively:

1. **Assign Yourself a Task:**

     - Choose an open issue or select a feature to work on.

2. **Create a Feature Branch:**

     ```bash
     git checkout -b feature/your-feature-name
     ```

3. **Develop Your Feature:**

     - Write clean, readable, and maintainable code.
     - Follow the project's coding standards.

4. **Commit Your Changes:**

     ```bash
     git add .
     git commit -m "Add descriptive message about your changes"
     ```

5. **Push to Your Fork:**

     ```bash
     git push origin feature/your-feature-name
     ```

6. **Open a Pull Request:**

     - Navigate to your fork on GitHub.
     - Click **Compare & pull request**.
     - Provide a detailed description of your changes.
     - Submit the PR for review.

7. **Address Feedback:**

     - Make necessary changes based on feedback from team members.

8. **Merge Your PR:**

     - Once approved, merge your PR into the `main` branch.

---

## Resources

- **Eloquent JavaScript (3rd Edition) by Marijn Haverbeke:**  
    [Official Website](https://eloquentjavascript.net/)

- **MDN Web Docs:**  
    [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

- **Git and GitHub Tutorials:**  
    [GitHub Learning Lab](https://lab.github.com/)

- **Visual Studio Code Documentation:**  
    [VS Code Docs](https://code.visualstudio.com/docs)

---

## Contact

For any questions, issues, or suggestions, please reach out to the project leads:

- **Joshua:**  
    - **Email:** [email@example.com](mailto:email@example.com)
    - **GitHub:** [@joshua](https://github.com/joshua)

- **Sarah:**  
    - **Email:** [email@example.com](mailto:email@example.com)
    - **GitHub:** [@sarah](https://github.com/sarah)

- **Mercy:**  
    - **Email:** [email@example.com](mailto:email@example.com)
    - **GitHub:** [@mercy](https://github.com/mercy)

- **Blessing:**  
    - **Email:** [email@example.com](mailto:email@example.com)
    - **GitHub:** [@blessing](https://github.com/blessing)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

