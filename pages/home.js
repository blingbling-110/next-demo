import axios from 'axios'

const Home = (props) => {
  const { banners } = props

  return (
    <>
      <h2>Home</h2>
      <ul>
        {
          banners.map(banner => <li key={banner.acm}>{banner.title}</li>)
        }
      </ul>

      <style>{`
      h2 {
      color: red;
    `}</style>
    </>
  )
}

Home.getInitialProps = async () => {
  const res = await axios('http://123.207.32.32:8000/home/multidata')
  return {
    banners: res.data.data.banner.list,
  }
}

export default Home
