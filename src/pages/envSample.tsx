import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

interface EnvSampleProps {
    test: string;
    nextPublicTest: string;
}

const EnvSample: NextPage<EnvSampleProps> = ({ test, nextPublicTest }) => {
    return (
        <div>
            <Head>
                <title>env test</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>{test}</p>
                <p>{nextPublicTest}</p>
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            test: process.env.TEST || '',
            nextPublicTest: process.env.NEXT_PUBLIC_TEST || '',
        },
    }
}

export default EnvSample