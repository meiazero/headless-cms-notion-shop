import { z } from "zod"

const envVariables = z.object({
  NOTION_API_KEY: z.string(),
  NOTION_DATABASE_ID: z.string(),
})

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envVariables> {
    }
	}
}
