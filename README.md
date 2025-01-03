# Guess the Glass

![GitHub last commit](https://img.shields.io/github/last-commit/aftongauntlett/guess-the-glass)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub followers](https://img.shields.io/github/followers/aftongauntlett?style=social)

**Github Repo:** https://github.com/your-username/guess-the-glass.git
**Deployed:** https://guesstheglass.com/

---

### Tech Stack

- **Next.js 13 App Directory**
- **TypeScript**
- **Prisma** (SQLite)
- **TanStack Query** for data fetching and caching
- **Formik** + **Yup** for form handling and validation
- **Tailwind CSS** for styling

### Prerequisites

1. **Node.js** v16+
2. **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/your-username/guess-the-glass.git
   ```

2. **Install Dependencies**:

   ```
   cd guess-the-glass
   npm install
   ```

3. **Install Dependencies**:

   ```
   cd guess-the-glass
   npm install
   ```

4. **Start the Development Server**:

   ```
   npm run dev
   ```

5. **Build for Production (optional)**:

   ```
   npm run build
   npm run start
   ```

6. **Run Database Migration (creates dev.db locally)**:

   - Configure Prisma in prisma/schema.prisma

     ```
     npx prisma migrate dev --name init
     ```

7. **Generate the Prisma client**:

   ```
   npx prisma generate
   ```

8. **Viewing the Database**:

   ```
   npx prisma studio
   ```
