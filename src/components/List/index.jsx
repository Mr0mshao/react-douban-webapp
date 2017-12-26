import './index.less'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class List extends Component {
  _filterItemContent (str) {
    let newStr = str.replace(/<.*?>/g, '')
    return newStr.slice(0, 30)
  }
  render () {
    const eventsList = this.props.eventsList
    return(
      <div className="list">
        {
          eventsList.map((item, key) => {
            return  <Link className="thumbnail" to='/' key={key}>
                      <div className="content">
                        <img src={item.image_hlarge} alt="cover" />
                        <h3>{item.title}</h3>
                        <p>{this._filterItemContent(item.content)}</p>
                      </div>
                      <div className="author">
                        <span className="name">{item.category_name}</span>
                        <span className="label" v-if="item.subcategory_name">
                          本活动来自栏目 {item.subcategory_name}
                        </span>
                      </div>
                    </Link>
          })
        } 
      </div>
    )
  }
}