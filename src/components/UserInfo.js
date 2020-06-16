import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

const UserInfo = (props) => {
  const [state, setState] = useState(false)
  const { children } = props

  return (
    <span css={{
      display: 'block',
      paddingRight: '20px',
      cursor: 'pointer',
      'img': {
        width: '20px',
        height: '20px',
        marginTop: '-2px',
        marginRight: '6px'
      },
      'em': {
        fontStyle: 'normal',
        color: '#fff'
      }
    }}>
      <img src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png" alt="avatar" />
      <em>用户名</em>

    </span>
  )
}

export default UserInfo
