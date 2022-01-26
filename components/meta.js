import Head from "next/head"

const Meta = ({meta}) => {
    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='description' content={meta.desc} />
        </Head>
    )
}

export default Meta;