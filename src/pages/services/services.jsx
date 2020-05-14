import React from 'react';

import { Helmet } from "react-helmet";

import PageTitle from '../../components/global/pageTitle/pageTitle';
import PageCover from '../../components/global/pageCover/pageCover';
import CBoxList from '../../components/service/cBoxList';

import bgURL from '../../assets/img/dbrandmarketing/dBrandMarketing_services.jpg'

const ServicesPage = () => {
    return (
        <>
        <Helmet>
            <title>dBrandMarketing - Services</title>
            <meta name="description" content="dBrandMarketing - Services | Digital Marketing | Social Media Marketing | SEO | SMM | SEM" />
            <meta property="og:url" content="https://www.dbrandmarketing.com/aboutUs" />
            <meta property="og:title" content="dBrandMarketing - Services" />
            <meta property="og:description" content="dBrandMarketing - Services | Digital Marketing | Social Media Marketing | SEO | SMM | SEM" />
            <meta property="og:image" content={bgURL} />
            <meta property="fb:app_id" content="650543162203577" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_IN" />
            <meta content='INDEX,FOLLOW' name='robots'></meta>                        
        </Helmet>
        <div className='container-fluid'>
            <PageTitle title = 'Services' />
            <PageCover 
                bgURL = {bgURL}
                title = 'Digital Marketing Services'
                subTitle = 'Providng Online and Digital Marketing Services'
                detail = 'Website Development | SEO | SEM | SMM | Content Marketing'
            
            />
            
            <CBoxList />
        </div> 
        </> 
    );
};

export default ServicesPage;