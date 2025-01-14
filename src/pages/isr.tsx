import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"

type ISRProps = {
    message: string
}

const ISR: NextPage<ISRProps> = (props) => {
    const { message } = props
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Incremental Static Regeneration</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Incremental Static Regeneration</h1>
                <p>
                    {message}
                </p>
            </main>
        </div>
    )
}
export const getStaticProps: GetStaticProps<ISRProps> = async () => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}: This page was generated using Incremental Static Regeneration`
    console.log(message)
    return {
        props: {
            message,
        },
        revalidate: 10, // 페이지의 유효 기간을 초 단위로 저장한다. 
    }
}

export default ISR;