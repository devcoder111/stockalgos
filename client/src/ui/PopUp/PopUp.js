import React, { Fragment } from 'react';
import './PopUp.scss';

const PopUp = props => {
    const showcross = props.showcross !== undefined ? props.showcross : true;
    return (
        <Fragment>
            <div className='__blur' onClick={props.close}></div>
            <div className={`__popup-wrapper ${props.className}`}>
                <div className={`__PopUp  ${ props.small ? '__p-3' : '__p-4' }`}>
                    {showcross && <div className='__right __close-icon-wrapper'>
                        <div className='__close-icon __pointer __p __mr-s __mt-s __inline-block' onClick={props.close}></div>
                    </div>}
                    {props.children}
                </div>
            </div>
        </Fragment>
    )
}

export default PopUp;