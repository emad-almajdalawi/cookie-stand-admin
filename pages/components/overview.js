import Link from "next/link";
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
// import { useRouter } from 'next/router';

function overview() {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <div>
            <Head>
                <title>Overview</title>
            </Head>
            <Header />
            <div className="m-10">
                <p>overview page</p>
                <br />
                <Link href={{ pathname: "/" }}>
                    <a className="text-blue-700">back to Home</a>
                </Link>
            </div>
            <Footer />

        </div>
    )
}

export default overview