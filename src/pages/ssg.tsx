import Head from "next/head"

const SSG: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Static Site Generation</h1>
                <p>
                    Get started by editing <code>pages/ssg.tsx</code>
                </p>
            </main>
        </div>
    )
}

export default SSG