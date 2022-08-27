import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Playlists from 'src/components/widgets/Playlists'
import LoginScreen from 'src/components/widgets/LoginScreen'

export default function Home() {
  const { data: session } = useSession()

  if (session) {
    return <Playlists />
  }

  return (
    <>
      <LoginScreen />
    </>
  )
}
