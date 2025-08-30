import { fetchSinglePost } from "@/lib/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { Asset } from "contentful";
import Image from "next/image";


interface serviceProps {
    params: Promise<{ slug: string }>;
}


export default async function Post ({ params }: serviceProps){
    const { slug } = await params;
    const usluga = await fetchSinglePost(slug);

    if (!usluga) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center text-6xl text-red-950">
                Usluga nije pronađena.
            </div>
        )
    }

    const fields = usluga.fields || {};

    const title = typeof fields.title === "string" ? fields.title : "Bez naziva";

    const coverImageAsset = fields.coverImage as Asset;
      const coverImageUrl = coverImageAsset?.fields?.file?.url
      ? `https:${coverImageAsset.fields.file.url}`
      : null;

    const text =
      fields.text && typeof fields.text === "object"
      ? (fields.text as Document)
      : null;

        
    return (
    <div className="py-12 px-6">
    <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl mb-10 sm:mb-20 text-beige-900 flex justify-center">{title.toUpperCase()}</h1>
        {coverImageUrl && (
          <Image
            src={coverImageUrl}
            alt={title}
            height={400}
            width={700}
            className="rounded-lg mb-6"
          />
        )}
    </div>
      <div className="text-lg bg-beige-50 p-10 leading-8">
        {text && documentToReactComponents(text)}

        <a href="/kontakt" className="flex justify-center">
            <button className="mt-6 bg-beige-200 text-beige-800 px-6 py-3 rounded-4xl 
            font-medium hover:bg-white transition">
                kontaktirajte nas
            </button>
      </a>
      </div>
    </div>
  );
}