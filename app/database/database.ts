import { SQLiteDatabase, openDatabaseSync } from "expo-sqlite";

const db: SQLiteDatabase = openDatabaseSync("actividades.db");

export const createTable = async () => {
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS actividades (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        actividad TEXT NOT NULL,
        hora TEXT NOT NULL,
        fecha TEXT NOT NULL,
        prioridad INTEGER NOT NULL DEFAULT 0
      );`
    );
    console.log("✅ Tabla creada correctamente");
  } catch (error) {
    console.error("❌ Error al crear la tabla", error);
  }

  try {
    await db.execAsync(
      `ALTER TABLE actividades ADD COLUMN prioridad INTEGER NOT NULL DEFAULT 0;`
    );
    console.log("✅ Columna 'prioridad' añadida correctamente");
  } catch (error) {
    if ((error as any).message.includes("duplicate column name")) {
      console.log("ℹ️ La columna 'prioridad' ya existe");
    } else {
      console.error("❌ Error al añadir la columna 'prioridad'", error);
    }
  }
};

export const insertActivity = async (actividad: string, hora: string, fecha: string, prioridad: number) => {
  try {
    await db.runAsync(
      `INSERT INTO actividades (actividad, hora, fecha, prioridad) VALUES (?, ?, ?, ?);`,
      [actividad, hora, fecha, prioridad] 
    );
    console.log("✅ Actividad insertada correctamente");
  } catch (error) {
    console.error("❌ Error al insertar actividad", error);
  }
};

export const getActivities = async (fecha: string): Promise<{ id: number; actividad: string; hora: string; prioridad: number }[]> => {
  try {
    const result = await db.getAllAsync<{ id: number; actividad: string; hora: string; prioridad: number }>(
      "SELECT * FROM actividades WHERE fecha = ?;",
      [fecha]
    );
    return result;
  } catch (error) {
    console.error("❌ Error al cargar actividades", error);
    return [];
  }
};

export const deleteActivities = async (ids: number[]) => {
  try {
    const placeholders = ids.map(() => "?").join(",");
    await db.runAsync(
      `DELETE FROM actividades WHERE id IN (${placeholders});`,
      ids
    );
    console.log("✅ Actividades eliminadas correctamente");
  } catch (error) {
    console.error("❌ Error al eliminar actividades", error);
  }
};

export const updateActivity = async (id: number, actividad: string, hora: string, prioridad: number) => {
  try {
    await db.runAsync(
      `UPDATE actividades SET actividad = ?, hora = ?, prioridad = ? WHERE id = ?;`,
      [actividad, hora, prioridad, id]
    );
    console.log("✅ Actividad actualizada correctamente");
  } catch (error) {
    console.error("❌ Error al actualizar actividad", error);
  }
};

// Nueva función para obtener actividades prioritarias
export const getActividadesPrioritarias = async (): Promise<{ id: number; actividad: string; hora: string; fecha: string; prioridad: number }[]> => {
  try {
    const result = await db.getAllAsync<{ id: number; actividad: string; hora: string; fecha: string; prioridad: number }>(
      "SELECT * FROM actividades WHERE prioridad = 1 ORDER BY fecha DESC, hora ASC;"
    );
    return result;
  } catch (error) {
    console.error("❌ Error al cargar actividades prioritarias", error);
    return [];
  }
};