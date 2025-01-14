import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type SSRProps = {
    message: string
}

const SSR: NextPage<SSRProps> = (props) => {
    const { message } = props
    return (
        <div>
            <Head>
                <title>Server Side Rendering</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1>Server Side Rendering</h1>
                <p>
                    {message}
                </p>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<SSRProps> = async () => { // context -> req, res, query, preview, previewData
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp}: This page was generated using Server Side Rendering`
    console.log(message)
    return {
        props: {
            message,
        }
    }
}


export default SSR;