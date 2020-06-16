import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'

import TopNav from './TopNav'
const PublicNav = (props) => {
  const [state, setState] = useState(false)
  const { children } = props

  return (
    <div>
      <TopNav />
    </div>
  )
}

export default PublicNav
