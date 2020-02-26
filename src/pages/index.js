import React from "react";
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'gatsby';

export default () => (
    <>
        <Layout>
           Hello world <Link to="/blog/">ddsblog page</Link>
        </Layout>
    </>
)
