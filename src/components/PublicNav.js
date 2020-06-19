import React, { useEffect, useState } from 'react'
import axios from 'axios'

import TopNav from './TopNav'
import SideNav from './SideNav'

const mockData = [
  {
    icon: 'https://ae01.alicdn.com/kf/Hbd9534d2a9484308b4160455fb05214bO.jpg',
    href: '/',
    name: '质量大盘'
  },
  {
    icon: 'https://ae01.alicdn.com/kf/Hbd9534d2a9484308b4160455fb05214bO.jpg',
    href: '/',
    name: 'uBox'
  },
  {
    icon: 'https://ae01.alicdn.com/kf/Hbd9534d2a9484308b4160455fb05214bO.jpg',
    href: '/',
    name: '安装包资源分析'
  },
  {
    icon: 'https://ae01.alicdn.com/kf/Hbd9534d2a9484308b4160455fb05214bO.jpg',
    href: '/',
    name: '规则检查平台'
  }
]

const PublicNav = (props) => {
  const [productList, setProductList] = useState(mockData)
  // useEffect(() => {
  // axios.get('http://')
  //   .then(function (res) {
  //     console.log(res);
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //   });
  // }, [])
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: `*{padding:0;margin:0;box-sizing: border-box;}` }}></style>
      <TopNav {...props} />
      <SideNav productList={productList} {...props} />
    </div>
  )
}

export default PublicNav
