import { Link } from 'react-router-dom'
import React from 'react'
import './graphics.css'
import { FaCheck } from 'react-icons/fa'
import ContactPage from '../../home/contact/contact'
import { graphicsPrices } from '../../../data/prices'
function GraphicsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
  <>
    <>
      <div className='websites-pricing-container'>
        <div className='websites-pricing-header'>
          <div className='websites-pricing-header-text'>
            <h1 className='websites-pricing-header-heading'><span className="websites-pricing-header-heading" style={{backgroundImage: 'linear-gradient(to right, #5b45bb, #c6bcf1)', color: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Graphics</span></h1>
            <p className='websites-pricing-header-para' style={{color: 'white',fontSize: '20px', fontFamily: 'satoshiMain'}}>Our graphics are made by designers from countries such as Pakistan, United Kingdom, Palestine, Russia, India and more. We provide you amazing content that is made with love. The source code is given to you via either <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#d62976', fontFamily: 'satoshiBold'}} href='https://instagram.com/grabyourservices'>Instagram</a>, <a className='websites-pricing-links' style={{textDecoration: 'color', color: '#ffffff', fontFamily: 'satoshiBold'}} href='#'>Whatsapp</a> or <a style={{textDecoration: 'color', color: '#7289da', fontFamily: 'satoshiBold'}} className='websites-pricing-links' href='https://discord.gg/WPq6zWuM'>Discord</a>.<br/>All prices are in United States Dollar(USD)</p>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Logo</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.logoDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Brand Identity</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.brandIdentityDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Business Card</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.businessCardDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Letterhead</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.letterHeadDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Flyer Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.flyerDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Website UI</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.websiteUi}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>App UI</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.applicationUi}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Landing Page</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.landingPageDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Post Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.postDesign}$ - {graphicsPrices.postDesignMax}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Image Edit</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.imageEdit}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Poster Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.posterDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Presentation</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.presentationDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
          <div className='websites-pricing-header-tiers'>
            <div className='websites-pricing-header-tiers-tiers'>
              
              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Menu Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.menuDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Invite Design</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.inviteDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>

              <div className='websites-pricing-header-tier-normal'>
                <h1 className='websites-pricing-header-tier-heading' style={{marginBottom: '0', lineHeight: '0'}} ><span className="websites-pricing-header-tier-heading" style={{color: 'var(--primary-light)', WebkitBackgroundClip: 'text', backgroundClip: 'text'}}>Resume</span></h1>
                <h1 className='websites-pricing-header-tier-heading-price' style={{textAlign: 'center',marginBottom: '2rem'}}><span className="websites-pricing-header-tier-heading-price" style={{color: 'white', opacity:'0.8', WebkitBackgroundClip: 'text', backgroundClip: 'text', marginTop: '0'}}>{graphicsPrices.resumeDesign}$</span></h1>
                <div>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>SVG Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Transparency Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>Source Given</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Day Delivery</p>
                  <p style={{marginLeft:'10%', marginTop: '0', marginBottom: '5px', textAlign: 'left'}}><FaCheck color='var(--primary-light)' style={{marginRight: '7.5px'}}/>3 Revisions</p>
                </div>
                <Link style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifySelf: 'center',
                    alignSelf: 'center',
                  }} to="/grabpanel">
                  <button className='websites-pricing-header-tier-heading-buttons-normal'>Purchase</button>
                </Link>  
              </div>
            </div>
          </div>
        </div>
        <ContactPage/>
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontFamily: 'satoshiMain',
          height: 'fit-content',
          backgroundColor:'var(--primary)'
        }}>
          <p style={{
          padding: '20px'
          }}>
          Copyright CC 2022. Tel : +92 33 GRAB YOUR (+92 33 4722 9687). Unregistered Business.
          </p>
        </div>
      </div>
    </>
  </>
  )
}

export default GraphicsPage