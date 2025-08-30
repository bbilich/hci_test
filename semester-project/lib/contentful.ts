import { createClient } from "contentful";

 const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
  });


export async function fetchPost() {

  const response = await client.getEntries({ content_type: "post" });
  return response.items;
}

export async function fetchSinglePost(slug:string) {

  const response = await client.getEntries(
    { content_type: "post",
      "fields.slug": slug,
      limit: 1,
    }
  );
  return response.items[0];
}

