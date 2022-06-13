import Link from 'next/link'

function Header() {
  return (
    <header className='py-8 px-8 bg-emerald-500 flex justify-between'>
      <h1 className='text-4xl font-bold'>Cookie Stand Admin</h1>
      <Link href={{ pathname: "components/overview" }}>
        <botton type="botton" className="bg-emerald-600 justify-self-center self-center shadow hover:bg-emerald-200 focus:shadow-outline focus:outline-none py-2 px-4 rounded">Overview</botton>
      </Link>
    </header>

  )
}

export default Header