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
import FloatingWhatsApp from 'react-floating-whatsapp';
import 'react-floating-whatsapp-button/dist/index.css';

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
            <FloatingWhatsApp accountName="Foo" phoneNumber="123456789" />

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
