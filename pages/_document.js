import { Html, Head, Main, NextScript } from "next/document";

const Doc = () => {
    return (
        <Html className="dark">
            <Head />
            <body className="min-h-screen dark:bg-gray-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Doc;