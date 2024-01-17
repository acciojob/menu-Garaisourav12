import React from 'react'

function Item({item}) {
  return (
    <div>
        <h1 className="title">{item.title}</h1>
        <span className='cat'>{item.category}</span>
        <span className="price">{item.price}</span>
        <img src={item.img} alt="" />
        <p className='desc'>{item.desc}</p>
    </div>
  )
}

export default Item