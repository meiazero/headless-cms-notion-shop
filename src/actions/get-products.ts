"use server";

import { notion } from "@/lib/notion";
import { NotionResponse } from "@/types";

export async function getProducts() {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,

  }) as unknown as NotionResponse;

  const filteredResponse = database.results.map((product) => {
    return product.properties
  })

  const products = filteredResponse.map((product) => {
    return {
      title: product.title.title[0].plain_text,
      description: product.description.rich_text[0].plain_text,
      price: product.price.number,
      imageUrl: product.imageUrl.rich_text[0].plain_text,
    }
  })

  return products
}
