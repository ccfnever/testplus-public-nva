import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

const SideNav = (props) => {
  console.log('SideNav', props)
  const { productList } = props
  const activeColor = '#e75d21'

  return (
    <div css={{
      background: '#666',
      paddingTop: '60px',
      position: 'fixed',
      zIndex: 998,
      width: '50px',
      height: '100%',
      top: 0,
      left: 0,
      transition: 'width 0.3s',
      '&:hover': {
        width: '200px'
      }
    }}>
      <span css={{
        padding: '10px',
        cursor: 'pointer'
      }}>
        <svg
          css={{
            width: '30px',
            height: '30px',
            fill: '#fff'
          }}
          viewBox="64 64 896 896" focusable="false" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path></svg>
      </span>
      <ul css={{
        'a': {
          display: 'block',
          width: '100%',
          height: 40,
          lineHeight: '42px',
          color: '#fff',
          overflow: 'hidden',
          '&:hover': {
            background: '#333',
            color: activeColor
          }
        },
        '.side-nav-icon': {
          width: '50px',
          padding: '10px 0 10px 15px',
          float: 'left',
        },
        '.side-nav-name': {
          width: '150px',
          float: 'left',
        },
        'img': {
          display: 'block',
          width: 20,
          height: 20,
        },

      }}>
        {productList && productList.map((item, index) => (
          <li key={index}>
            <a href={item.href}>
              <span className="side-nav-icon">
                <img src={item.icon} alt="" />
              </span>
              <span className="side-nav-name">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
