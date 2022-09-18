import { Wrapper } from './style'
import Link from 'next/link'
import { useCallback } from 'react'
import Router from 'next/router'

export default function Index () {
  const goto = useCallback(e => {
    e.preventDefault()
    Router.push({
      pathname: '/about/info',
      query: {
        id: 'me',
      },
    })
  }, [])

  return (
    <Wrapper>
      <h2>About</h2>
      {
        ['blingbling', 'qzj'].map(name =>
          <Link key={name} href={`/about/info?id=${name}`}>
            <a><p>{name}的信息</p></a>
          </Link>,
        )
      }
      <a href={''} onClick={goto}><p>我的信息</p></a>
    </Wrapper>
  )
}
