import React from 'react';

import './pageCover.scss';

const PageCover = (props) => {
    const {bgURL, title, subTitle, detail} = props;
    return (
        <div className='container-fluid row' >
            <div className='pageCoverContent col-md-5'>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                <h5>{detail}</h5>
            </div>
            <div className='pageCover col-md-7' style={{ backgroundImage: `url(${bgURL})`}} ></div>
        </div>
    );
};

export default PageCover;