# INFORME TÉCNICO - SISTEMA DE GESTIÓN DE PARTIDOS POLÍTICOS

## 1. INTEGRANTES DEL PROYECTO

**Integrante 1:** [NOMBRE DEL INTEGRANTE 1]  
**Integrante 2:** [NOMBRE DEL INTEGRANTE 2]

---

## 2. ENLACE DEL REPOSITORIO GITHUB

**Repositorio:** https://github.com/alejandra312008/EXAMEN-FINAL.git

**Colección de Postman:** La colección de Postman se encuentra en el repositorio en la ruta:
- `backend/Postman_Collection.json`

Para importar la colección en Postman:
1. Abrir Postman
2. Click en "Import"
3. Seleccionar el archivo `Postman_Collection.json`
4. La colección quedará disponible con todos los endpoints configurados

---

## 3. ENLACES DE VIDEOS DE SUSTENTACIÓN

**Video Integrante 1:** [ENLACE DEL VIDEO DEL INTEGRANTE 1]  
**Video Integrante 2:** [ENLACE DEL VIDEO DEL INTEGRANTE 2]

---

## 4. INFORME TÉCNICO

### 4.1 Descripción General del Proyecto

Este proyecto consiste en el desarrollo de un sistema completo CRUDL (Create, Read, Update, Delete, List) para la gestión de partidos políticos. El sistema está implementado utilizando **Arquitectura Hexagonal** (también conocida como Arquitectura de Puertos y Adaptadores) en el backend, lo que garantiza una separación clara de responsabilidades y facilita el mantenimiento y la escalabilidad del código.

### 4.2 Arquitectura del Sistema

El sistema está dividido en dos partes principales:

#### 4.2.1 Backend
- **Arquitectura:** Hexagonal (Ports and Adapters)
- **Lenguaje:** JavaScript (Node.js)
- **Framework:** Express.js
- **Base de Datos:** MongoDB (NoSQL)
- **ORM/ODM:** Mongoose

#### 4.2.2 Frontend
- **Framework:** React
- **Librería HTTP:** Axios
- **Estilo:** CSS3

### 4.3 Funcionalidades Implementadas

El sistema permite realizar las siguientes operaciones sobre partidos políticos:

1. **Crear Partido Político:** Permite registrar un nuevo partido político con toda su información
2. **Listar Partidos Políticos:** Obtiene todos los partidos políticos registrados
3. **Obtener Partido por ID:** Consulta un partido político específico mediante su identificador
4. **Actualizar Partido Político:** Modifica la información de un partido político existente
5. **Eliminar Partido Político:** Elimina un partido político del sistema

### 4.4 Estructura de Datos

Cada partido político contiene la siguiente información:
- **nombre:** Nombre del partido político (requerido)
- **eslogan:** Eslogan o lema del partido (requerido)
- **presidente:** Nombre del presidente del partido (requerido)
- **secretario:** Nombre del secretario del partido (requerido)
- **tesorero:** Nombre del tesorero del partido (requerido)
- **pais:** País donde opera el partido (requerido)
- **numPresidentes:** Número de presidentes que ha tenido el partido (default: 0)
- **numGobernadores:** Número de gobernadores (default: 0)
- **numAlcaldes:** Número de alcaldes (default: 0)
- **numConcejales:** Número de concejales (default: 0)
- **numCongresistas:** Número de congresistas (default: 0)

### 4.5 Ventajas de la Arquitectura Hexagonal

La implementación de la Arquitectura Hexagonal proporciona las siguientes ventajas:

1. **Desacoplamiento:** El dominio de negocio está completamente aislado de los detalles técnicos
2. **Testabilidad:** Cada capa puede ser probada de forma independiente
3. **Flexibilidad:** Es fácil cambiar la base de datos o el framework web sin afectar la lógica de negocio
4. **Mantenibilidad:** El código está organizado de forma clara y predecible
5. **Escalabilidad:** Facilita la adición de nuevas funcionalidades

---

## 5. SCRIPT DE SENTENCIAS SQL

**Nota:** Este proyecto utiliza MongoDB, que es una base de datos NoSQL (orientada a documentos). Por lo tanto, no se utilizan sentencias SQL tradicionales. MongoDB utiliza su propio lenguaje de consulta basado en JSON.

Sin embargo, a continuación se presentan las operaciones equivalentes que se realizan en MongoDB:

### 5.1 Operaciones MongoDB Equivalentes

#### Crear un documento (INSERT equivalente)
```javascript
db.partidopoliticos.insertOne({
  nombre: "Partido Democrático",
  eslogan: "Por un futuro mejor",
  presidente: "Juan Pérez",
  secretario: "María González",
  tesorero: "Carlos Rodríguez",
  pais: "Colombia",
  numPresidentes: 2,
  numGobernadores: 5,
  numAlcaldes: 15,
  numConcejales: 30,
  numCongresistas: 25
})
```

#### Consultar todos los documentos (SELECT * equivalente)
```javascript
db.partidopoliticos.find()
```

#### Consultar por ID (SELECT WHERE equivalente)
```javascript
db.partidopoliticos.findOne({ _id: ObjectId("id_del_documento") })
```

#### Actualizar un documento (UPDATE equivalente)
```javascript
db.partidopoliticos.updateOne(
  { _id: ObjectId("id_del_documento") },
  {
    $set: {
      nombre: "Nuevo Nombre",
      eslogan: "Nuevo Eslogan"
    }
  }
)
```

#### Eliminar un documento (DELETE equivalente)
```javascript
db.partidopoliticos.deleteOne({ _id: ObjectId("id_del_documento") })
```

---

## 6. FRAGMENTOS DE CÓDIGO POR CAPA DE ARQUITECTURA HEXAGONAL

### 6.1 CAPA DE DOMINIO (Domain Layer)

La capa de dominio es el núcleo de la aplicación y contiene la lógica de negocio pura. Esta capa es completamente independiente de frameworks, bases de datos y tecnologías externas.

#### 6.1.1 Entidad: PartidoPolitico.js

**Ubicación:** `backend/src/domain/entities/PartidoPolitico.js`

```javascript
/**
 * Entidad de dominio: PartidoPolitico
 * Representa un partido político con sus atributos
 */
export class PartidoPolitico {
  constructor({
    id,
    nombre,
    eslogan,
    presidente,
    secretario,
    tesorero,
    pais,
    numPresidentes = 0,
    numGobernadores = 0,
    numAlcaldes = 0,
    numConcejales = 0,
    numCongresistas = 0
  }) {
    this.id = id;
    this.nombre = nombre;
    this.eslogan = eslogan;
    this.presidente = presidente;
    this.secretario = secretario;
    this.tesorero = tesorero;
    this.pais = pais;
    this.numPresidentes = numPresidentes;
    this.numGobernadores = numGobernadores;
    this.numAlcaldes = numAlcaldes;
    this.numConcejales = numConcejales;
    this.numCongresistas = numCongresistas;
  }

  validate() {
    const errors = [];
    
    if (!this.nombre || this.nombre.trim() === '') {
      errors.push('El nombre es requerido');
    }
    
    if (!this.eslogan || this.eslogan.trim() === '') {
      errors.push('El eslogan es requerido');
    }
    
    // ... más validaciones
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}
```

**¿Por qué este código es característico de la capa de dominio?**

1. **Independencia tecnológica:** No importa ninguna librería externa (no hay imports de Express, Mongoose, etc.)
2. **Lógica de negocio pura:** Contiene las reglas de validación del negocio (método `validate()`)
3. **Representación del concepto de negocio:** Modela directamente la entidad "Partido Político" del dominio
4. **Sin dependencias externas:** Puede ejecutarse sin necesidad de frameworks o bases de datos

#### 6.1.2 Puerto (Interface): PartidoPoliticoRepository.js

**Ubicación:** `backend/src/domain/repositories/PartidoPoliticoRepository.js`

```javascript
/**
 * Interfaz del repositorio (Puerto)
 * Define el contrato que debe cumplir cualquier implementación del repositorio
 */
export class PartidoPoliticoRepository {
  async save(partidoPolitico) {
    throw new Error('Method save() must be implemented');
  }

  async findById(id) {
    throw new Error('Method findById() must be implemented');
  }

  async findAll() {
    throw new Error('Method findAll() must be implemented');
  }

  async update(id, partidoPolitico) {
    throw new Error('Method update() must be implemented');
  }

  async delete(id) {
    throw new Error('Method delete() must be implemented');
  }
}
```

**¿Por qué este código es característico de la capa de dominio?**

1. **Define un contrato (Puerto):** Especifica QUÉ operaciones se necesitan, no CÓMO se implementan
2. **Inversión de dependencias:** El dominio define la interfaz, la infraestructura la implementa
3. **Abstracción:** No menciona MongoDB, SQL, archivos u otros detalles técnicos
4. **Independencia:** Permite cambiar la implementación sin afectar el dominio

---

### 6.2 CAPA DE APLICACIÓN (Application Layer)

La capa de aplicación contiene los casos de uso, que orquestan la lógica de negocio y coordinan entre el dominio y la infraestructura.

#### 6.2.1 Caso de Uso: CreatePartidoPolitico.js

**Ubicación:** `backend/src/application/use-cases/CreatePartidoPolitico.js`

```javascript
import { PartidoPolitico } from '../../domain/entities/PartidoPolitico.js';

/**
 * Caso de uso: Crear Partido Político
 */
export class CreatePartidoPolitico {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute(partidoData) {
    const partido = new PartidoPolitico(partidoData);
    const validation = partido.validate();

    if (!validation.isValid) {
      throw new Error(`Validación fallida: ${validation.errors.join(', ')}`);
    }

    return await this.partidoPoliticoRepository.save(partido);
  }
}
```

**¿Por qué este código es característico de la capa de aplicación?**

1. **Orquestación:** Coordina entre la entidad de dominio y el repositorio
2. **Casos de uso:** Representa una acción específica del negocio ("Crear Partido Político")
3. **Inyección de dependencias:** Recibe el repositorio como dependencia (no lo crea directamente)
4. **Lógica de aplicación:** Contiene la secuencia de pasos para cumplir el caso de uso
5. **Independiente del framework:** No conoce Express, HTTP, ni detalles de la web

#### 6.2.2 Caso de Uso: GetPartidoPolitico.js

**Ubicación:** `backend/src/application/use-cases/GetPartidoPolitico.js`

```javascript
/**
 * Caso de uso: Obtener Partido Político por ID
 */
export class GetPartidoPolitico {
  constructor(partidoPoliticoRepository) {
    this.partidoPoliticoRepository = partidoPoliticoRepository;
  }

  async execute(id) {
    if (!id) {
      throw new Error('ID es requerido');
    }

    const partido = await this.partidoPoliticoRepository.findById(id);
    
    if (!partido) {
      throw new Error('Partido político no encontrado');
    }

    return partido;
  }
}
```

**¿Por qué este código es característico de la capa de aplicación?**

1. **Encapsula la lógica de aplicación:** Define los pasos para obtener un partido
2. **Manejo de errores de aplicación:** Valida precondiciones y maneja casos de error
3. **Usa el puerto:** Depende de la interfaz del repositorio, no de su implementación
4. **Reutilizable:** Puede ser usado desde HTTP, CLI, o cualquier otro adaptador

---

### 6.3 CAPA DE INFRAESTRUCTURA (Infrastructure Layer)

La capa de infraestructura contiene los adaptadores que conectan la aplicación con el mundo exterior (bases de datos, APIs, frameworks web, etc.).

#### 6.3.1 Adaptador de Persistencia: MongoPartidoPoliticoRepository.js

**Ubicación:** `backend/src/infrastructure/database/mongodb/MongoPartidoPoliticoRepository.js`

```javascript
import { PartidoPoliticoRepository } from '../../../domain/repositories/PartidoPoliticoRepository.js';
import { PartidoPoliticoModel } from './PartidoPoliticoSchema.js';
import { PartidoPolitico } from '../../../domain/entities/PartidoPolitico.js';

/**
 * Implementación del repositorio usando MongoDB (Adaptador)
 */
export class MongoPartidoPoliticoRepository extends PartidoPoliticoRepository {
  async save(partidoPolitico) {
    const doc = new PartidoPoliticoModel({
      nombre: partidoPolitico.nombre,
      eslogan: partidoPolitico.eslogan,
      // ... más campos
    });

    const saved = await doc.save();
    return this._toDomain(saved);
  }

  async findById(id) {
    const doc = await PartidoPoliticoModel.findById(id);
    return doc ? this._toDomain(doc) : null;
  }

  _toDomain(doc) {
    const partido = new PartidoPolitico({
      nombre: doc.nombre,
      eslogan: doc.eslogan,
      // ... más campos
    });
    partido.id = doc._id.toString();
    return partido;
  }
}
```

**¿Por qué este código es característico de la capa de infraestructura?**

1. **Implementa el puerto:** Extiende `PartidoPoliticoRepository` y proporciona la implementación concreta
2. **Dependencias técnicas:** Importa Mongoose (`PartidoPoliticoModel`) que es específico de MongoDB
3. **Adaptación:** Convierte entre el modelo de dominio y el modelo de persistencia (`_toDomain`)
4. **Detalles técnicos:** Maneja IDs de MongoDB, esquemas, y operaciones de base de datos
5. **Reemplazable:** Si se cambia a PostgreSQL, solo se modifica esta clase

#### 6.3.2 Esquema de MongoDB: PartidoPoliticoSchema.js

**Ubicación:** `backend/src/infrastructure/database/mongodb/PartidoPoliticoSchema.js`

```javascript
import mongoose from 'mongoose';

/**
 * Esquema de MongoDB para PartidoPolitico
 */
const partidoPoliticoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  eslogan: {
    type: String,
    required: true,
    trim: true
  },
  // ... más campos
}, {
  timestamps: true
});

export const PartidoPoliticoModel = mongoose.model('PartidoPolitico', partidoPoliticoSchema);
```

**¿Por qué este código es característico de la capa de infraestructura?**

1. **Específico de la tecnología:** Usa Mongoose, que es específico de MongoDB
2. **Definición de persistencia:** Define cómo se almacenan los datos físicamente
3. **Validaciones de base de datos:** Contiene validaciones a nivel de esquema
4. **Timestamps automáticos:** Agrega campos técnicos como `createdAt` y `updatedAt`

#### 6.3.3 Adaptador Web (Controlador): PartidoPoliticoController.js

**Ubicación:** `backend/src/infrastructure/web/controllers/PartidoPoliticoController.js`

```javascript
/**
 * Controlador REST (Adaptador)
 * Maneja las peticiones HTTP y delega a los casos de uso
 */
export class PartidoPoliticoController {
  constructor(createUseCase, getUseCase, listUseCase, updateUseCase, deleteUseCase) {
    this.createUseCase = createUseCase;
    this.getUseCase = getUseCase;
    this.listUseCase = listUseCase;
    this.updateUseCase = updateUseCase;
    this.deleteUseCase = deleteUseCase;
  }

  create = async (req, res) => {
    try {
      const partido = await this.createUseCase.execute(req.body);
      res.status(201).json({
        success: true,
        data: this._toDTO(partido)
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  };

  _toDTO(partido) {
    return {
      id: partido.id,
      nombre: partido.nombre,
      // ... más campos
    };
  }
}
```

**¿Por qué este código es característico de la capa de infraestructura?**

1. **Adaptador HTTP:** Convierte peticiones HTTP en llamadas a casos de uso
2. **Depende de Express:** Usa `req` y `res` que son específicos de Express
3. **Manejo de HTTP:** Gestiona códigos de estado, JSON, y errores HTTP
4. **Transformación de datos:** Convierte entidades de dominio a DTOs (Data Transfer Objects)
5. **Punto de entrada web:** Es el adaptador que permite que la aplicación sea accesible vía HTTP

#### 6.3.4 Rutas: partidoPoliticoRoutes.js

**Ubicación:** `backend/src/infrastructure/web/routes/partidoPoliticoRoutes.js`

```javascript
import express from 'express';
import { PartidoPoliticoController } from '../controllers/PartidoPoliticoController.js';

/**
 * Rutas RESTful para PartidoPolitico
 */
export const createPartidoPoliticoRoutes = (controller) => {
  const router = express.Router();

  router.post('/', controller.create);           // Create
  router.get('/', controller.list);              // List
  router.get('/:id', controller.getById);        // Read
  router.put('/:id', controller.update);         // Update
  router.delete('/:id', controller.delete);      // Delete

  return router;
};
```

**¿Por qué este código es característico de la capa de infraestructura?**

1. **Configuración de rutas HTTP:** Define los endpoints REST de la API
2. **Específico de Express:** Usa el router de Express
3. **Mapeo URL a controladores:** Conecta URLs con métodos del controlador
4. **Protocolo HTTP:** Maneja verbos HTTP (GET, POST, PUT, DELETE)

#### 6.3.5 Punto de Entrada: index.js

**Ubicación:** `backend/src/index.js`

```javascript
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDatabase } from './infrastructure/database/mongodb/connection.js';
import { MongoPartidoPoliticoRepository } from './infrastructure/database/mongodb/MongoPartidoPoliticoRepository.js';
import { CreatePartidoPolitico } from './application/use-cases/CreatePartidoPolitico.js';
// ... más imports

// Inyección de dependencias (Arquitectura Hexagonal)
const repository = new MongoPartidoPoliticoRepository();
const createUseCase = new CreatePartidoPolitico(repository);
const getUseCase = new GetPartidoPolitico(repository);
// ... más casos de uso

const controller = new PartidoPoliticoController(
  createUseCase,
  getUseCase,
  listUseCase,
  updateUseCase,
  deleteUseCase
);

app.use('/api/partidos', createPartidoPoliticoRoutes(controller));
```

**¿Por qué este código es característico de la capa de infraestructura?**

1. **Composición de raíz (Composition Root):** Ensambla todas las dependencias
2. **Inversión de control:** Crea las instancias y las inyecta
3. **Configuración del framework:** Configura Express, CORS, middlewares
4. **Conexión a servicios externos:** Conecta a MongoDB
5. **Punto de entrada:** Es el archivo que se ejecuta para iniciar la aplicación

---

## 7. LISTADO DE HERRAMIENTAS UTILIZADAS

### 7.1 Lenguaje de Programación

- **Lenguaje:** JavaScript (ECMAScript 2022)
- **Versión:** Node.js v18.x o superior (ES Modules)

### 7.2 SDK

- **SDK:** Node.js
- **Versión:** 18.x o superior

### 7.3 Gestor de Paquetes

- **Gestor de Paquetes:** npm (Node Package Manager)
- **Versión:** 9.x o superior (incluido con Node.js)

### 7.4 Framework

#### Backend
- **Framework:** Express.js
- **Versión:** 4.18.2

#### Frontend
- **Framework:** React
- **Versión:** 18.2.0

### 7.5 Librerías

#### Backend
- **express:** ^4.18.2 - Framework web para Node.js
- **mongoose:** ^8.0.3 - ODM (Object Document Mapper) para MongoDB
- **cors:** ^2.8.5 - Middleware para habilitar CORS
- **dotenv:** ^16.3.1 - Carga variables de entorno desde archivo .env
- **nodemon:** ^3.0.2 - Herramienta de desarrollo para reiniciar el servidor automáticamente (devDependency)

#### Frontend
- **react:** ^18.2.0 - Librería para construir interfaces de usuario
- **react-dom:** ^18.2.0 - Renderizado de React en el DOM
- **react-scripts:** 5.0.1 - Scripts y configuración para Create React App
- **axios:** ^1.6.2 - Cliente HTTP para realizar peticiones a la API

### 7.6 Motor de Base de Datos

- **Tipo:** NoSQL (Orientado a Documentos)
- **Motor:** MongoDB
- **Versión:** MongoDB Atlas (Cloud) o MongoDB Community Server 6.0 o superior
- **ODM:** Mongoose 8.0.3

### 7.7 Utilidades para Pruebas

#### Cliente HTTP para Pruebas
- **Postman:** Versión 10.x o superior
  - Colección de Postman incluida en: `backend/Postman_Collection.json`

#### IDE (Entorno de Desarrollo Integrado)
- **Visual Studio Code:** Versión recomendada 1.80 o superior
- **Extensiones recomendadas:**
  - ESLint
  - Prettier
  - JavaScript (ES6) code snippets
  - MongoDB for VS Code

---

## 8. PASOS Y COMANDOS PARA CREAR, COMPILAR Y EJECUTAR EL PROYECTO

### 8.1 Requisitos Previos

1. **Node.js y npm:** Instalar Node.js (versión 18 o superior) desde https://nodejs.org/
2. **MongoDB Atlas:** Crear una cuenta gratuita en https://www.mongodb.com/cloud/atlas
3. **Git:** Instalar Git desde https://git-scm.com/ (opcional, si se clona el repositorio)

### 8.2 Clonar el Repositorio

```bash
git clone https://github.com/alejandra312008/EXAMEN-FINAL.git
cd EXAMEN-FINAL
```

### 8.3 Configurar el Backend

#### Paso 1: Instalar dependencias del backend

```bash
cd backend
npm install
```

#### Paso 2: Configurar variables de entorno

Crear un archivo `.env` en la carpeta `backend/` con el siguiente contenido:

```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster0.xxxxx.mongodb.net/partidos_politicos?retryWrites=true&w=majority
NODE_ENV=development
```

**Nota:** Reemplazar:
- `usuario` con tu usuario de MongoDB Atlas
- `password` con tu contraseña de MongoDB Atlas
- `cluster0.xxxxx` con la URL de tu cluster

#### Paso 3: Iniciar el servidor backend

**Modo desarrollo (con auto-reload):**
```bash
npm run dev
```

**Modo producción:**
```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

### 8.4 Configurar el Frontend

#### Paso 1: Abrir una nueva terminal

Mantener el backend corriendo y abrir una nueva terminal.

#### Paso 2: Instalar dependencias del frontend

```bash
cd frontend
npm install
```

#### Paso 3: Iniciar el frontend

```bash
npm start
```

La aplicación se abrirá automáticamente en el navegador en `http://localhost:3000` (si el puerto está disponible, React puede usar otro puerto como 3001).

### 8.5 Verificar la Instalación

#### Verificar Backend

1. Abrir el navegador y visitar: `http://localhost:3000`
2. Debería aparecer un JSON con información de la API

#### Verificar Frontend

1. La aplicación React debería abrirse automáticamente
2. Debería mostrar la interfaz para gestionar partidos políticos

#### Probar con Postman

1. Abrir Postman
2. Importar la colección desde: `backend/Postman_Collection.json`
3. Probar los endpoints:
   - `GET http://localhost:3000/api/partidos` - Listar partidos
   - `POST http://localhost:3000/api/partidos` - Crear partido
   - `GET http://localhost:3000/api/partidos/:id` - Obtener partido
   - `PUT http://localhost:3000/api/partidos/:id` - Actualizar partido
   - `DELETE http://localhost:3000/api/partidos/:id` - Eliminar partido

### 8.6 Comandos Adicionales

#### Compilar Frontend para Producción

```bash
cd frontend
npm run build
```

Esto generará una carpeta `build/` con los archivos optimizados para producción.

#### Ejecutar Tests (si están implementados)

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### 8.7 Solución de Problemas Comunes

#### Error: "MONGODB_URI no está definida"
- Verificar que el archivo `.env` existe en `backend/`
- Verificar que la variable `MONGODB_URI` está correctamente configurada

#### Error: "Cannot find module"
- Ejecutar `npm install` en la carpeta correspondiente (backend o frontend)

#### Error: "Port 3000 already in use"
- Cambiar el puerto en el archivo `.env` del backend
- O detener el proceso que está usando el puerto 3000

#### Error de conexión a MongoDB
- Verificar que la IP está permitida en MongoDB Atlas (Network Access)
- Verificar que las credenciales son correctas
- Verificar que el cluster está activo

---

## 9. ESTRUCTURA DEL PROYECTO

```
EXAMEN FINAL DESARROLLO WEB/
├── backend/
│   ├── src/
│   │   ├── domain/                    # CAPA DE DOMINIO
│   │   │   ├── entities/
│   │   │   │   └── PartidoPolitico.js
│   │   │   └── repositories/
│   │   │       └── PartidoPoliticoRepository.js
│   │   ├── application/               # CAPA DE APLICACIÓN
│   │   │   └── use-cases/
│   │   │       ├── CreatePartidoPolitico.js
│   │   │       ├── GetPartidoPolitico.js
│   │   │       ├── ListPartidosPoliticos.js
│   │   │       ├── UpdatePartidoPolitico.js
│   │   │       └── DeletePartidoPolitico.js
│   │   ├── infrastructure/            # CAPA DE INFRAESTRUCTURA
│   │   │   ├── database/
│   │   │   │   └── mongodb/
│   │   │   │       ├── connection.js
│   │   │   │       ├── MongoPartidoPoliticoRepository.js
│   │   │   │       └── PartidoPoliticoSchema.js
│   │   │   └── web/
│   │   │       ├── controllers/
│   │   │       │   └── PartidoPoliticoController.js
│   │   │       └── routes/
│   │   │           └── partidoPoliticoRoutes.js
│   │   └── index.js
│   ├── package.json
│   ├── Postman_Collection.json
│   ├── ENV_SETUP.md
│   └── .env (crear manualmente)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PartidoForm.js
│   │   │   ├── PartidoForm.css
│   │   │   ├── PartidoList.js
│   │   │   └── PartidoList.css
│   │   ├── services/
│   │   │   └── partidoService.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   └── package.json
├── README.md
├── INSTRUCCIONES_RAPIDAS.md
└── INFORME_TECNICO.md (este documento)
```

---

## 10. CONCLUSIÓN

Este proyecto demuestra la implementación exitosa de la Arquitectura Hexagonal en un sistema completo de gestión de partidos políticos. La separación clara de capas (Dominio, Aplicación e Infraestructura) garantiza un código mantenible, testeable y escalable. El uso de MongoDB como base de datos NoSQL proporciona flexibilidad en el almacenamiento de datos, mientras que React ofrece una interfaz de usuario moderna y reactiva.

La arquitectura implementada permite:
- Cambiar la base de datos sin afectar la lógica de negocio
- Cambiar el framework web sin modificar el dominio
- Probar cada capa de forma independiente
- Agregar nuevas funcionalidades de manera sencilla
- Mantener el código organizado y predecible

---

**Fecha de Elaboración:** [FECHA]  
**Versión del Documento:** 1.0

