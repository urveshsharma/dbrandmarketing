import React from 'react';

import { Helmet } from "react-helmet";

import PageTitle from '../../components/global/pageTitle/pageTitle';
import Carousel from '../../components/global/carousel/Carousel';
import CBoxListService from '../../components/service/cBoxList';
import CBoxListAboutUs from '../../components/aboutUs/cBoxList';
import CRow from '../../components/aboutUs/cRow';

import IMG1 from '../../assets/img/dbrandmarketing/dbm_banner.jpg';
import IMG2 from '../../assets/img/dbrandmarketing/smm_banner.jpg';
import IMG3 from '../../assets/img/dbrandmarketing/web_banner.jpg';

import './home.scss';

const HomePage = () => {
    return (
        <>
        <Helmet>
        <title>dBrandMarketing - Digital and Social Marketing</title>
        <meta name="description" content="dBrandMarketing - A Digital Marketing Agency - Helping your Brand and Business to grow" />
        <meta property="og:url" content="https://www.dbrandmarketing.com" />
        <meta property="og:title" content="dBrandMarketing - Digital and Social Marketing" />
        <meta property="og:description" content="dBrandMarketing - A Digital Marketing Agency - Helping your Brand and Business to grow" />
        <meta property="og:image" content="/static/media/dBrandMarketing_aboutUs.583d89fe.jpg" />
        <meta property="fb:app_id" content="650543162203577" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" /> 
        <meta content='INDEX,FOLLOW' name='robots'></meta>                       
        </Helmet>
        <div className='container-fluid'>
            <PageTitle title = 'Grow your business with digital marketing experts' />
                    <Carousel 
                        img1={IMG1}
                        img2={IMG2}
                        img3={IMG3} 
                    />
            <div><h2>Our Services</h2></div>
            <CBoxListService />
            <div><h2>About Us</h2></div>
            <CBoxListAboutUs />
            <CRow />
        </div> 
        </> 
    );
};

export default HomePage;