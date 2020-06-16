import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

import UserInfo from './UserInfo'
const TopNav = (props) => {
  const [state, setState] = useState(false)
  const { children } = props

  const bgColor = '#005529';

  return (
    <header
      css={css`
        width:100%;
        height: 50px;
        line-height: 50px;
        color: '#333';
        position: relative;
        top: 0;
        left: 0;
        z-index: 999;
        display:flex;
        justify-content:space-between;
        background: ${bgColor};
      `}
    >
      <div
        css={css`
        width: 200px;
        height: 100%;
        background:${bgColor};
        display:flex;
      `}
      >
        <span css={{
          padding: '10px',
          cursor: 'pointer'
        }}>
          <svg
            css={css`
            width: 30px;
            height: 30px;
            fill: #fff;
            `}
            viewBox="64 64 896 896" focusable="false" class="" data-icon="menu-fold" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z"></path></svg>
        </span>
        <a href="/" css={{ color: '#fff', paddingLeft: '10px', fontSize: '18px' }}>质量中心控制台</a>
      </div>
      <div><UserInfo /></div>
    </header>
  )
}

export default TopNav
