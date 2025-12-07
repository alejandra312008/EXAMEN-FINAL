# 🚀 Instrucciones Rápidas de Instalación

## Paso 1: Configurar Backend

```bash
cd backend
npm install
```

Crear archivo `.env` con:
```
PORT=3000
MONGODB_URI=tu_cadena_de_conexion_mongodb_atlas
NODE_ENV=development
```

Ver `backend/ENV_SETUP.md` para más detalles sobre MongoDB Atlas.

## Paso 2: Iniciar Backend

```bash
cd backend
npm start
```

El servidor estará en: `http://localhost:3000`

## Paso 3: Configurar Frontend

En otra terminal:

```bash
cd frontend
npm install
```

## Paso 4: Iniciar Frontend

```bash
cd frontend
npm start
```

La aplicación se abrirá automáticamente en el navegador.

## ✅ Probar la Aplicación

1. **Con el Frontend**: Navega a la URL que React muestra (normalmente http://localhost:3000)
2. **Con Postman**: Importa `backend/Postman_Collection.json` y prueba los endpoints

## 📝 Notas Importantes

- Asegúrate de tener MongoDB Atlas configurado antes de iniciar el backend
- El frontend se conecta automáticamente al backend en `http://localhost:3000`
- Si cambias el puerto del backend, actualiza `REACT_APP_API_URL` en el frontend



