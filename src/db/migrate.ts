import "dotenv/config"

import { migrate } from "drizzle-orm/postgres-js/migrator"

import { database, pg } from "~/db/index"

async function main() {
  await migrate(database, { migrationsFolder: "./supabase/migrations" })
  await pg.end()
}

main()
