import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Conexión a MongoDB Atlas
 */
export const connectDatabase = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI no está definida en las variables de entorno');
    }

    await mongoose.connect(mongoUri);
    console.log('✅ Conectado a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};



