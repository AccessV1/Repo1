import express from 'express';
import { registerUser } from './auth/authController'; 

const app = express();

app.use(express.json()); // Middleware i think

app.post('/auth/register', registerUser);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});