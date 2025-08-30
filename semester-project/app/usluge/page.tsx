'use client';
import Link from 'next/link';
import { fetchPost } from '@/lib/contentful';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Usluge = () => {
  const [usluge, setUsluge] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  useEffect(() => {
  const getPost = async () => {
    const post = await fetchPost();
    setUsluge(post);
    }

  getPost();
  }, []);

  const filteredUsluge =
    selectedFilter === 'all'
      ? usluge
      : usluge.filter(
          (post) => post.fields.category === selectedFilter );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-beige-800 text-3xl md:text-5xl flex justify-center mb-12">NAŠE USLUGE</h1>
      <div className="">
          <label className='text-beige-900 font-bold'>Odaberite uslugu: </label>
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border border-beige-800 text-beige-900 px-4 py-2 bg-beige-50 shadow">
            
            <option value="all">Prikaži sve usluge</option>
            <option value="vjencanje">Vjenčanje</option>
            <option value="krstenje">Krštenje</option>
            <option value="maturalna">Maturalna</option>
            <option value="pricest">Pričest</option>
            <option value="djevojacka">Djevojačka</option>
            <option value="studio">Fotografiranje u studiju</option>
            <option value="priroda">Fotografiranje u prirodi</option>
          </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {filteredUsluge.map((post) => (
          <div key={post.fields.slug}
          className="bg-white rounded-lg shadow hover:shadow-lg transition">
            {post.fields.coverImage && (
              <Image
                src={`https:${post.fields.coverImage.fields.file.url}`}
                alt={post.fields.title}
                width={400}
                height={300}
                className="rounded-t-lg object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="px-1 text-xl font-semibold mb-4">
                {post.fields.title}
              </h2>
              <Link
                href={`/usluge/${post.fields.slug}`}
                className="text-beige-800 font-medium hover:underline">
                <span className='bg-beige-200 px-3 py-1 rounded-3xl'>Saznajte više →</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usluge;