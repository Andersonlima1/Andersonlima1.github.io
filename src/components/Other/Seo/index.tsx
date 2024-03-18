import Head from "next/head";
import { SeoInterface } from "@/interfaces/SeoInterface";

const Seo = ({ title, description }: SeoInterface) => {
    return (
        <Head>
           
            <meta name="googlebot" content="index, follow" />
        </Head>
    );
};

export default Seo;
