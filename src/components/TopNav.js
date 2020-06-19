import React, { useEffect, useState } from 'react'
import UserInfo from './UserInfo'

const TopNav = (props) => {
  const bgColor = '#333';

  return (
    <header
      css={{
        width: '100%',
        height: '50px',
        lineHeight: '50px',
        color: '#333',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'space-between',
        background: bgColor,

      }}
    >
      <div
        css={{
          width: '300px',
          height: '100%',
          background: bgColor,
          display: 'flex'
        }}
      >
        <a
          href="/"
          css={{
            color: '#fff',
            paddingLeft: '10px',
            fontSize: '18px',
            '&:hover': {
              color: '#fff'
            }
          }}
        >
          <img css={{ width: '90px', marginRight: '10px' }} src="http://testplus.ks3-cn-beijing.ksyun.com/cn/images/logo.png" alt="" />
        质量中心统一平台
        </a>
      </div>
      <div><UserInfo /></div>
    </header >
  )
}

export default TopNav
