import { useRouter } from 'next/router'

export default function Index () {
  const router = useRouter()

  return <p>Info: {router.query.id}</p>
}
