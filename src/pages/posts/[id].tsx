import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const router = useRouter()
    const { id } = props

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Post: {id}</h1>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {

    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
    ]

    return {
        paths,
        fallback: false,
    }
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id']
        },
    }
}


export default Post