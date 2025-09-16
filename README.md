# JWT Authentication Basics

A professional implementation of JSON Web Token (JWT) authentication system in Node.js. This project demonstrates secure user authentication practices using JWTs with proper security measures.

## Features

- **User Registration & Login** - Secure user authentication system
- **JWT Token Generation** - Secure token creation with expiration
- **Protected Routes** - Route protection using middleware
- **Environment Variables** - Secure configuration management
- **Input Validation** - Request data sanitization and validation

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Mohamedelmesery2004/JWT-Basics.git
cd JWT-Basics
```

2. Install dependencies:
```bash
npm install
```



4. Start the server:
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints

### Authentication Routes

| Method | Endpoint | Description |
|--------|----------|-------------|

| POST | `/api/v1/login` | Login user and receive JWT |
| GET | `/api/v1/dashboard` | Get current dashboard  (protected) |

### Example Usage
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/v1/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

**Access protected route:**
```bash
curl -X GET http://localhost:3000/v2/dashboard \
  -H "Authorization: Bearer <your_jwt_token>"
```

## Project Structure

```
src/
├── config/          # Database and environment configuration
├── controllers/     # Route controllers
├── middleware/      # Custom middleware (auth, validation)
├── models/          # Database models
├── routes/          # API routes
├── utils/           # Helper functions and utilities
└── app.js           # Main application file
```

## Security Features

- Password hashing with bcrypt (salt rounds: 12)
- JWT tokens with expiration
- Protected routes requiring valid tokens
- Environment variables for sensitive data
- Input validation and sanitization
- HTTP security headers

## Development

### Scripts


- `npm run start` - Start development server with nodemon


### Adding New Features

1. Create appropriate model in `models/` directory
2. Add controller functions in `controllers/` directory
3. Define routes in `routes/` directory
4. Add validation middleware if needed

## Best Practices Implemented


- Proper error handling and responses
- Environment-based configuration
- Modular code structure
- Middleware for authentication and authorization
- Consistent code style

## Common Issues & Solutions

1. **JWT Token Not Working** - Verify secret key matches in .env
2. **Database Connection Issues** - Check MongoDB URI in environment variables
3. **Validation Errors** - Ensure request body matches expected schema

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Resources

- [JWT Introduction](https://jwt.io/introduction)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/)

## Support

If you have any questions or issues, please open an issue on GitHub or contact the maintainer.

