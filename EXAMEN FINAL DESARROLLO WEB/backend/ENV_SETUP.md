# Configuración de Variables de Entorno

## Crear archivo .env

Copia el archivo `.env.example` y renómbralo a `.env`, luego actualiza los valores:

```bash
# En Windows PowerShell:
Copy-Item .env.example .env

# En Linux/Mac:
cp .env.example .env
```

## Configurar MongoDB Atlas

1. Ve a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crea una cuenta gratuita (si no tienes una)
3. Crea un nuevo cluster (gratis)
4. Crea un usuario de base de datos:
   - Ve a "Database Access"
   - Click en "Add New Database User"
   - Crea un usuario y contraseña
5. Configura el acceso de red:
   - Ve a "Network Access"
   - Click en "Add IP Address"
   - Selecciona "Allow Access from Anywhere" (0.0.0.0/0) para desarrollo
6. Obtén la cadena de conexión:
   - Ve a "Database" > "Connect"
   - Selecciona "Connect your application"
   - Copia la cadena de conexión
   - Reemplaza `<password>` con tu contraseña de usuario
   - Reemplaza `<dbname>` con `partidos_politicos`

## Ejemplo de .env

```env
PORT=3000
MONGODB_URI=mongodb+srv://usuario:tu_password@cluster0.xxxxx.mongodb.net/partidos_politicos?retryWrites=true&w=majority
NODE_ENV=development
```

**IMPORTANTE:** No subas el archivo `.env` a Git. Ya está incluido en `.gitignore`.



