import { Collection } from '@/components/shared/Collection'
import { navLinks } from '@/constants'
import { getAllImages } from '@/lib/actions/image.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Animation from '@/components/shared/Animation'

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
      <section className="home">
        <h1 className='home-heading'>Peça para o ailu editar sua foto</h1>
        <p className='p-16-regular'>Navegue no menu ao lado e selecione o que deseja!</p>
        <div className='w-full'>
          <Animation />
        </div>
      </section>

      <section className="mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home