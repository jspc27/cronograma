import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

const db: SQLiteDatabase = openDatabaseSync("actividades.db");

export const createTable = async () => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS actividades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        actividad TEXT NOT NULL,
        hora TEXT NOT NULL,
        fecha TEXT NOT NULL
      );`
    );
    console.log("✅ Tabla creada correctamente");
  } catch (error) {
    console.error("❌ Error al crear la tabla", error);
  }

  try {
    await db.execAsync(
      `ALTER TABLE actividades ADD COLUMN fecha TEXT;`
    );
    console.log("✅ Columna 'fecha' añadida correctamente");
  } catch (error) {
    if ((error as any).message.includes("duplicate column name")) {
      console.log("ℹ️ La columna 'fecha' ya existe");
    } else {
      console.error("❌ Error al añadir la columna 'fecha'", error);
    }
  }
};

export const insertActivity = async (actividad: string, hora: string, fecha: string) => {
  try {
    await db.runAsync(
      `INSERT INTO actividades (actividad, hora, fecha) VALUES (?, ?, ?);`,
      [actividad, hora, fecha] 
    );
    console.log("✅ Actividad insertada correctamente");
  } catch (error) {
    console.error("❌ Error al insertar actividad", error);
  }
};

export const getActivities = async (fecha: string): Promise<{ id: number; actividad: string; hora: string }[]> => {
  try {
    const result = await db.getAllAsync<{ id: number; actividad: string; hora: string }>(
      "SELECT * FROM actividades WHERE fecha = ?;",
      [fecha]
    );
    return result;
  } catch (error) {
    console.error("❌ Error al cargar actividades", error);
    return [];
  }
};