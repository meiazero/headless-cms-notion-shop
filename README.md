# Shop with Notion and Next.js

This project use the Notion API as headless CMS to create a Shop with Next.js.

## 🚀 Getting Started

### 1. Create a Notion Integration

Create a new Notion Integration and get the `NOTION_API_KEY` from the integration. Access the [Notion API](https://www.notion.so/profile/integrations) to learn more about the Notion API.

### 2. Create a Notion Database

Create a new database following this structure:

Create a new database following this structure:

| title    | description | price | imageUrl |
| -------- | ----------- | ----- | -------- |
| Hotel t-shirt | This is a hotel t-shirt | 100 | /products/hotel-tshirt.png |
| jeans | the best jeans ever | 200 | /products/jeans.png |

### 3. Install dependencies

```bash
pnpm install
```

### 4. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000/products](http://localhost:3000/products) with your browser to see the result.
