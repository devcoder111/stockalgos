import React, { Component } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import BellSolid from '../../icons/BellSolid';
import Select from '../../ui/Select/Select';
import chart from '../../assets/Mask.png';
import './MyPurchasesPage.scss';
import MyPurchaseItem from '../../components/MyPurchaseItem/MyPurchaseItem';

class MyPurchasesPage extends Component {
    render() {
        return (
            <div className='__flex-stretch'>
                <SideBar />
                <div className='__f1 __m-4 __My-Purchases-Page'>
                    <div className='__flex __sb __h2'>
                        <div className='__bolder __primary-text-darken-1'>My Purchases</div>
                        <BellSolid className='__primary-text' />
                    </div>
                    <Select className='__mb-25 __mt-35' value='New' title='Sort by'>
                        <option value='Relevancy'>Relevancy</option>
                        <option value='BestSelling'>BestSelling</option>
                        <option value='Top Rated'>Top Rated</option>
                        <option value='New'>New</option>
                        <option value='Price High to Low'>Price High to Low</option>
                        <option value='Price Low To High'>Price Low To High</option>
                    </Select>
                    <div className='__wrap __purchase-items'>
                        <MyPurchaseItem to='/my-purcheses/1' date='May 20, 2020' chart={chart} title='Stock Algo A' tags={['#forex', '#futures']} username='@janedoh321' ratings={3} price='340.00' />
                        <MyPurchaseItem to='/my-purcheses/2' date='May 14, 2020' chart={chart} title='Stock Algo B' tags={['#forex', '#futures']} username='@janedoh321' ratings={3} price='340.00' />
                        <MyPurchaseItem to='/my-purcheses/3' date='April 17, 2020' chart={chart} title='Stock Algo C' tags={['#forex', '#futures']} username='@janedoh321' ratings={3} price='340.00' reviewed={true} />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPurchasesPage;