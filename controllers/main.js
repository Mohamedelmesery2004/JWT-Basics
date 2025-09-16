// controllers/authController.js

import jwt from 'jsonwebtoken';
import BadRequestError from '../errors/badRequest.js';


  // LOGIN FUNCTION
  const logIn = async (req, res) => {
  
      const { userName, password } = req.body;

      // Validate input
      if (!userName || !password) {
        throw new BadRequestError("Username and password must be provided", 400);
      }

      // Example: generate a user ID (replace with real DB user ID in production)
      const id = new Date().getTime(); // unique numeric ID

      // Generate JWT
      const token = jwt.sign({ id, userName }, process.env.secret_KEY, {
        expiresIn: "1h",
      });

      res.status(200).json({ msg: "User logged in successfully", token });

  };

// DASHBOARD FUNCTION (Protected Route)
const dashboard = (req, res) => {
  
  const luckyNumber = Math.floor(Math.random() * 100); // number between 0-99
    res.status(200).json({ msg: `Hi mr ${req.userName.userName} Your lucky number is ${luckyNumber}` });
};

export { logIn, dashboard };
