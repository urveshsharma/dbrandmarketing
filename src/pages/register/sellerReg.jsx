import React from 'react';

import { Helmet } from "react-helmet";

import PageTitle from '../../components/global/pageTitle/pageTitle';
import SellerRegForm from './sellerRegForm';


import sellerRegImg from '../../assets/img/dbrandmarketing/sellOnline.jpg'

const SellerRegPage = () => {
    return (
        <>
        <Helmet>
            <title>dBrandMarketing - Seller Registration</title>
            <meta name="description" content="dBrandMarketing - Seller Registration | For advertising on our digital and social media sites" />
            <meta property="og:url" content="https://www.dbrandmarketing.com/sellerReg" />
            <meta property="og:title" content="dBrandMarketing - Seller Registration" />
            <meta property="og:description" content="dBrandMarketing - Seller Registration | For advertising on our digital and social media sites" />
            <meta property="og:image" content={sellerRegImg} />
            <meta property="fb:app_id" content="650543162203577" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_IN" /> 
            <meta content='INDEX,FOLLOW' name='robots'></meta>                       
        </Helmet>
        <div className='container-fluid'>
            <PageTitle title = 'Seller Registration' />
            <div className='row'>
                <div className='col-md-6'><img className="img-fluid" src={sellerRegImg} alt='Seller Registration' /></div>
                <div className='col-md-6'>
                    <SellerRegForm />
                </div>
            </div>
            
        </div> 
        </> 
    );
};

export default SellerRegPage;