import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import PlaylistSkeleton from './PlaylistSkeleton'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Playlist() {
  const [parent] = useAutoAnimate<HTMLDivElement>()
  const [show, setShow] = useState<boolean>(false)
  /* eslint-disable @next/next/no-img-element */
  const { isLoading, error, data } = useQuery(['getPlaylists'], async () => {
    const res = await fetch('/api/playlists')

    return res.json()
  })

  useEffect(() => {
    setShow(true)
  }, [data, show])

  if (error) return <div>An error has occurred</div>

  if (isLoading) return <PlaylistSkeleton />

  return (
    <div ref={parent}>
      {show && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-3'>
          {data && (
            <>
              {data?.items?.map((playlist: any) => (
                <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
                  <a className='rounded-2xl bg-neutral-900/80 hover:bg-neutral-900/80 transform hover:-translate-y-1 transition-all p-4 w-full'>
                    <img
                      src={playlist.images[0]?.url || ''}
                      className='rounded-xl w-full mb-4'
                      alt={playlist.name}
                    />
                    <h3 className='text-xl font-extrabold tracking-tighter'>
                      {playlist.name}
                    </h3>
                    <h5 className='text-neutral-200'>
                      {playlist.tracks.total} tracks
                    </h5>
                  </a>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  )
}