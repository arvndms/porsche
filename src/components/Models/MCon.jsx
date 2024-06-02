import React from 'react'
import { Models} from './Models'
import './Models.css'


const carmodels=[
    {path:"/Model/718",id:0,name:'718',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/e7041e23-0b8d-11ef-8128-005056bbdc38;sJ;twebp;c890;gc/porsche-small.webp',price:'from INR 14,772,000'},
    {path:"/Model/911",id:1,name:'911',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-911/small/0e1cf3c0-0b8e-11ef-8128-005056bbdc38;sJ;twebp;c890;gc/porsche-small.webp',price:'from INR 19,899,000'},
    {path:"/Model/Taycan",id:2,name:'Taycan',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-taycan/small/06c7f690-0b8d-11ef-8128-005056bbdc38;sJ;twebp;c890;gc/porsche-small.webp',price:'from TBA*'},
    {path:"/Model/Panamera",id:3,name:'Panamera',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-panamera/small/34c0f4d3-0b8e-11ef-8128-005056bbdc38;sJ;twebp;c890;gc/porsche-small.webp',price:'from INR 16,962,000'},
    {path:"/Model/Macan",id:4,name:'Macan',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-macan/small/58522db0-0b8e-11ef-8128-005056bbdc38;sM;twebp;c892;gc/porsche-small.webp',price:'from INR 9,605,000'},
    {path:"/Model/Cayenne",id:5,name:'Cayenne',img:'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-cayenne/small/6d03d962-0b8e-11ef-8128-005056bbdc38;sM;twebp;c892;gc/porsche-small.webp',price:'from INR 14,248,000'},
]

const MCon = () => {
    
  return (<>
 
    <div className="cards"  >
    {carmodels.map((carmodels)=>{
    return <>
    
    <Models 
    key={carmodels.name}
    name={carmodels.name}
    img={carmodels.img}
    price={carmodels.price}
    path={carmodels.path}
    /></>
    })}</div>
   </> )
}

export default MCon
