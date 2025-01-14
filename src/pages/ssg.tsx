import { GetStaticProps, NextPage } from "next"
import Head from "next/head"

type SSGProps = {
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    return (
        <div>
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Static Site Generation</h1>
                <p>
                    {props.message}
                </p>
            </main>
        </div>
    )
}
// 이 친구들은 빌드하고 다시 실행해야 적용 됨. 
export const getStaticProps: GetStaticProps<SSGProps> = async () => {
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}: This page was generated using Static Site Generation`
    console.log(message)
    return {
        props: {
            message,
        }
    }
}

export default SSG