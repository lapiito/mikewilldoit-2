import Layout from '@/Layout/Main.Layout';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import { PostType } from '@/types/PostType';
import getPosts from '@/utils/getPosts';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';



interface Props {
    Posts: [PostType];
    phoneNumber: string;
    accountName: string;
}

const Home: FC<Props> = ({ Posts }) => {
    return (
        <Layout>
            <Intro />
            <About />
            <Services />
            <Projects />
            <Skills />
            <Blog Posts={Posts} />
           

            <Contact />
        </Layout>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const Posts = await getPosts('avneesh0612');

    return {
        props: {
            Posts: Posts.publication.posts,
        },
        revalidate: 600,
    };
};
