# UniChat – React Chat Application

UniChat is a frontend chat application built with React. It includes user authentication with Firebase and social login options using Google and Facebook. This project is a good starting point for a real-time messaging platform with a simple and modern login flow.

---

## Features

- User authentication with Firebase
- Google sign-in integration
- Facebook sign-in integration
- React-based frontend structure
- Routing with React Router
- Clean and simple login interface
- Ready foundation for expanding into a full real-time chat application

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend framework |
| React Router DOM | Client-side routing |
| Firebase Authentication | User auth & social login |
| React Chat Engine | Chat UI components |
| Axios | HTTP requests |
| Ant Design Icons | UI icons |
| HTML / CSS / JavaScript | Base web technologies |

---

## Project Structure

```bash
Chat-Application/
├── README.md
└── unichat/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── App.js
    │   │   └── Login.js
    │   ├── firebase.js
    │   ├── index.css
    │   └── index.js
    ├── package.json
    ├── package-lock.json
    └── yarn.lock
```

---

## How It Works

- The application starts from `index.js`
- `App.js` handles routing
- `Login.js` displays the login page
- Firebase Authentication is configured in `firebase.js`
- Users can sign in using either **Google** or **Facebook**

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/kushanbhagya/Chat-Application.git
```

2. **Go to the project folder**

```bash
cd Chat-Application/unichat
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm start
```

---

## Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |

---

## Future Improvements

- [ ] Add real-time messaging functionality
- [ ] Add chat rooms and private chats
- [ ] Improve UI/UX
- [ ] Add protected routes
- [ ] Add user profile management
- [ ] Deploy the application online

---

## Author

**Kushan Bhagya**

---

## License

This project is open for learning and personal development.
