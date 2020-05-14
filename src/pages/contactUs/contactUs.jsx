import React from 'react';

import { Helmet } from "react-helmet";

import PageTitle from '../../components/global/pageTitle/pageTitle';
import ContactForm from './contactForm';


import contactImg from '../../assets/img/dbrandmarketing/support.png'

const ContactUsPage = () => {
    return (
        <>
        <Helmet>
            <title>dBrandMarketing - Contact Us</title>
            <meta name="description" content="dBrandMarketing - Contact Us | For web development & Digital Marketing Services" />
            <meta property="og:url" content="https://www.dbrandmarketing.com/contactUs" />
            <meta property="og:title" content="dBrandMarketing - Contact Us" />
            <meta property="og:description" content="dBrandMarketing - Contact Us | For web development & Digital Marketing Services" />
            <meta property="og:image" content={contactImg} />
            <meta property="fb:app_id" content="650543162203577" />
            <meta property="og:type" content="article" />
            <meta property="og:locale" content="en_IN" /> 
            <meta content='INDEX,FOLLOW' name='robots'></meta>
                                   
        </Helmet>
        <div className='container-fluid'>
            <PageTitle title = 'Contact Us' />
            <div className='row'>
                <div className='col-md-6'><img className="img-fluid" src={contactImg} alt='Contact Us' /></div>
                <div className='col-md-6'>
                    <ContactForm />
                </div>
            </div>
            
        </div> 
        </> 
    );
};

export default ContactUsPage;