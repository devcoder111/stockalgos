import React, { Component } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import chart from '../../assets/Mask.png';
import './ProductPage.scss'
import RatingStars from '../../components/RatingStars/RatingStars';
import ProductPaymentPanel from '../../components/ProductPaymentPanel/ProductPaymentPanel';

class ProductPage extends Component {
    render() {
        return (
            <div className='__flex'>
                <SideBar />
                <div className='__algo-product-page __m-4 __f1 __pr-4'>
                    <div className='__pointer __flex' onClick={this.props.history.goBack}>
                        <i className="fas fa-chevron-left __mr-s __h2"></i>
                        <span>Back to Marketplace</span>
                    </div>
                    <div className='__flex-stretch __mt-35 __mb-35'>
                        <div className='__char-wrapper'>
                            <img src={chart} alt='' />
                        </div>
                        <div className='__ml-4 __f1'>
                            <div className='__h3 __bold'>Title of Stock Algo</div>
                            <div className='__h4 __dark-grey-text __line-height'>@janedoh321</div>
                            <div className='__flex __mt-1'>
                                <span className='__chip __primary __mr-1'>#forex</span>
                                <span className='__chip __primary'>#futures</span>
                            </div>
                            <div className='__mt-1 __h4 __flex'>
                                <RatingStars ratings={3} />
                                <span className='__ml-s'>3 reviews</span>
                            </div>
                        </div>
                        <div className='__center'>
                            <div className='__h3 __bold'>$340.00</div>
                            <div className='__small __dark-grey-text __mt-s'>One-time purchase</div>
                        </div>
                    </div>
                    <div className='__h2 __bold __mb-1'>Description</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className='__h2 __bold __mb-1 __mt-2'>How To Use</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className='__h2 __bold __mt-2'>Ratings & Reviews</div>
                    <table className='__product-page-rating-table'>
                        <tbody>
                            <tr className='__h4 __bold'>
                                <td>3 reviews</td>
                                <td><div className='__flex'><RatingStars ratings={4} /> <span className='__ml-1'>4/5</span></div></td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='__bold'>Jack</div>
                                    <div className='__dark-grey-text __line-height __mb-s'>@jackgoldberg</div>
                                    <RatingStars ratings={4} small />
                                </td>
                                <td>
                                    <div className='__bold'>Amazing Algo!</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='__bold'>Karen</div>
                                    <div className='__dark-grey-text __line-height __mb-s'>@kerenjohnson</div>
                                    <RatingStars ratings={4} small />
                                </td>
                                <td>
                                    <div className='__bold'>Really Great</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='__bold'>Mike</div>
                                    <div className='__dark-grey-text __line-height __mb-s'>@mikejones2</div>
                                    <RatingStars ratings={4} small />
                                </td>
                                <td>
                                    <div className='__bold'>Awesome</div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <ProductPaymentPanel price="340.00" isPurchased={this.props.isPurchased} isReviewed={this.props.isReviewed} />
            </div>
        )
    }
}


export default ProductPage;