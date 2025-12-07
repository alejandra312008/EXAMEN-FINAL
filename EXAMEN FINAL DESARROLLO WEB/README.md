# 🏛️ Sistema de Gestión de Partidos Políticos

Sistema completo CRUDL (Create, Read, Update, Delete, List) para la gestión de partidos políticos, desarrollado con **Arquitectura Hexagonal** en el backend y **React** en el frontend.


## 🏗️ Arquitectura

### Backend - Arquitectura Hexagonal

```
backend/
├── src/
│   ├── domain/              # Capa de Dominio (Núcleo)
│   │   ├── entities/        # Entidades de negocio
│   │   └── repositories/    # Interfaces (Puertos)
│   ├── application/         # Capa de Aplicación
│   │   └── use-cases/       # Casos de uso
│   └── infrastructure/      # Capa de Infraestructura (Adaptadores)
│       ├── database/        # Implementación MongoDB
│       └── web/             # Controladores y Rutas REST
```


## Endpoints API

### Base URL: `http://localhost:3000/api/partidos`

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Listar todos los partidos |
| GET | `/:id` | Obtener un partido por ID |
| POST | `/` | Crear un nuevo partido |
| PUT | `/:id` | Actualizar un partido |
| DELETE | `/:id` | Eliminar un partido |

### Ejemplo de Request (POST)

```json
{
  "nombre": "Partido Democrático",
  "eslogan": "Por un futuro mejor",
  "presidente": "Juan Pérez",
  "secretario": "María González",
  "tesorero": "Carlos Rodríguez",
  "pais": "Colombia",
  "numPresidentes": 2,
  "numGobernadores": 5,
  "numAlcaldes": 15,
  "numConcejales": 30,
  "numCongresistas": 25
}
```


### PartidoPolitico

```javascript
{
  nombre: String (requerido),
  eslogan: String (requerido),
  presidente: String (requerido),
  secretario: String (requerido),
  tesorero: String (requerido),
  pais: String (requerido),
  numPresidentes: Number (default: 0),
  numGobernadores: Number (default: 0),
  numAlcaldes: Number (default: 0),
  numConcejales: Number (default: 0),
  numCongresistas: Number (default: 0)
}
```

## 📝 Estructura del Proyecto

```
EXAMEN FINAL DESARROLLO WEB/
├── backend/
│   ├── src/
│   │   ├── domain/
│   │   ├── application/
│   │   └── infrastructure/
│   ├── package.json
│   ├── Postman_Collection.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
```




