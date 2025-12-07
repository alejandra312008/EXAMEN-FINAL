import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './infrastructure/database/mongodb/connection.js';
import { MongoPartidoPoliticoRepository } from './infrastructure/database/mongodb/MongoPartidoPoliticoRepository.js';
import { CreatePartidoPolitico } from './application/use-cases/CreatePartidoPolitico.js';
import { GetPartidoPolitico } from './application/use-cases/GetPartidoPolitico.js';
import { ListPartidosPoliticos } from './application/use-cases/ListPartidosPoliticos.js';
import { UpdatePartidoPolitico } from './application/use-cases/UpdatePartidoPolitico.js';
import { DeletePartidoPolitico } from './application/use-cases/DeletePartidoPolitico.js';
import { PartidoPoliticoController } from './infrastructure/web/controllers/PartidoPoliticoController.js';
import { createPartidoPoliticoRoutes } from './infrastructure/web/routes/partidoPoliticoRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Inyección de dependencias (Arquitectura Hexagonal)
const repository = new MongoPartidoPoliticoRepository();
const createUseCase = new CreatePartidoPolitico(repository);
const getUseCase = new GetPartidoPolitico(repository);
const listUseCase = new ListPartidosPoliticos(repository);
const updateUseCase = new UpdatePartidoPolitico(repository);
const deleteUseCase = new DeletePartidoPolitico(repository);
const controller = new PartidoPoliticoController(
  createUseCase,
  getUseCase,
  listUseCase,
  updateUseCase,
  deleteUseCase
);

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'API RESTful de Partidos Políticos',
    version: '1.0.0',
    endpoints: {
      'GET /api/partidos': 'Listar todos los partidos',
      'GET /api/partidos/:id': 'Obtener un partido por ID',
      'POST /api/partidos': 'Crear un nuevo partido',
      'PUT /api/partidos/:id': 'Actualizar un partido',
      'DELETE /api/partidos/:id': 'Eliminar un partido'
    }
  });
});

app.use('/api/partidos', createPartidoPoliticoRoutes(controller));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Error interno del servidor'
  });
});

// Iniciar servidor
const startServer = async () => {
  try {
    await connectDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

startServer();



