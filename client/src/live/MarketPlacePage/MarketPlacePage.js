import React, { Component } from 'react';
import './MarketPlacePage.scss'
import SideBar from '../../components/SideBar/SideBar';
import BellSolid from '../../icons/BellSolid';
import MagnifierGlass from '../../icons/MagnifierGlass';
import Select from '../../ui/Select/Select';
import StockAlgoItem from '../../components/StockAlgoItem/StockAlgoItem';
import chart from '../../assets/Mask.png';

class MarketPlacePage extends Component {
    render() {
        return (
            <div className='__flex-stretch'>
                <SideBar />
                <div className='__MarketPlace-Page __m-4 __f1'>
                    <div className='__flex __sb __h2'>
                        <div className='__bolder __primary-text-darken-1'>Marketplace</div>
                        <BellSolid className='__primary-text' />
                    </div>
                    <div className='__flex __mt-25'>
                        <form className='__flex-stretch'>
                            <div>
                                <div className='__flex'>
                                    <div className='__flex __f1'>
                                        <label className=' __lightgrey-2 __flex __search-box __f1 __pl-sm __pr-sm'>
                                            <MagnifierGlass className='__grey-text __m-sm' />
                                            <input type='text' autoComplete="off" name='search' className='__input __f1' placeholder='Search stock algorithms' />
                                        </label>
                                        <button className='__btn __search-box-button'>Search</button>
                                    </div>
                                </div>
                                <div className='__flex __market-place-chips __mt-1'>
                                    <span className='__chip'>#forex</span>
                                    <span className='__chip'>#future</span>
                                    <span className='__chip'>#ETF</span>
                                    <span className='__chip'>#options</span>
                                    <span className='__chip'>#screener</span>
                                    <span className='__chip'>#signal</span>
                                </div>
                            </div>
                            <Select value='Relevancy' title='Sort by' className='__ml-3'>
                                <option value='Relevancy'>Relevancy</option>
                                <option value='BestSelling'>BestSelling</option>
                                <option value='Top Rated'>Top Rated</option>
                                <option value='New'>New</option>
                                <option value='Price High to Low'>Price High to Low</option>
                                <option value='Price Low To High'>Price Low To High</option>
                            </Select>
                        </form>
                    </div>
                    <main>
                        <div className='__grey-text __small __mt-35 __mb-3'>315 Results</div>
                        <div className='__wrap __marketplace-stock-algos'>
                            <StockAlgoItem
                                to='/marketplace/1'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/2'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/3'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/4'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/5'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/6'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/7'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/8'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/9'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/10'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/11'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                            <StockAlgoItem
                                to='/marketplace/12'
                                chart={chart}
                                title='Title of Stock Algo'
                                username='@janedoh321'
                                price="340.00"
                                ratings="3"
                                tags={['#forex', '#futures']}
                            />
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default MarketPlacePage;