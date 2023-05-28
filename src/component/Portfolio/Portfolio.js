import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import GalleryData from './GalleryData'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Portfolio = () => {
  const [items,setItems] = useState(GalleryData);
  const filterItems =((catItem)=>{
    const updatedItem = GalleryData.filter((curElem)=>{
      return curElem.category=== catItem
    })
    setItems(updatedItem);
  })

  return (
    <>
    <h1 className='contact-header'
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-easing="ease-in-sine">Portfolio</h1>
      <section className='gallery-sec-wrp py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='gallery-wrp'>
                
                <div className='gallery-grid'>
                  <ul className='clearfix reset-list'>
                    {items.map((elem)=>{
                      const {id, image, name, button, github} =elem;
                      return(
                        <li>
                          <div className='gallery-grid-innr'>
                            <div className='gallery-img'>
                              <img class="img-fluid" src={image} alt='Gallery Images' />
                            </div>
                            <div className='gallery-grid-hover'>
                              <div className='gallery-grid-dsc'>
                                <h4>{name}</h4>
                                <button>{button}</button>
                                <a href={github} 
                                target="_blank"
                                rel="noreferrer"
                                ><FontAwesomeIcon icon={faGithub}/></a>
                                
                              </div>
                            </div>
                          </div>
                        </li>
                      )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
     </section>
    </>
  )
}

export default Portfolio
