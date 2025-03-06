import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

// Abrir la base de datos
const db: SQLiteDatabase = openDatabaseSync("actividades.db");

// Crear la tabla si no existe
export const createTable = async () => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS actividades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        actividad TEXT NOT NULL,
        hora TEXT NOT NULL
      );`
    );
    console.log("✅ Tabla creada correctamente");
  } catch (error) {
    console.error("❌ Error al crear la tabla", error);
  }
};

// Insertar una actividad en la BD (usando runAsync en lugar de execAsync)
export const insertActivity = async (actividad: string, hora: string) => {
  try {
    await db.runAsync(
      `INSERT INTO actividades (actividad, hora) VALUES (?, ?);`,
      [actividad, hora] // 🔹 Aquí pasamos los valores correctamente
    );
    console.log("✅ Actividad insertada correctamente");
  } catch (error) {
    console.error("❌ Error al insertar actividad", error);
  }
};

// Obtener actividades desde la BD
export const getActivities = async (): Promise<{ id: number; actividad: string; hora: string }[]> => {
  try {
    const result = await db.getAllAsync<{ id: number; actividad: string; hora: string }>(
      "SELECT * FROM actividades;"
    );
    return result;
  } catch (error) {
    console.error("❌ Error al cargar actividades", error);
    return [];
  }
};
