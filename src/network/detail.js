import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.decs = itemInfo.decs
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shopper {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.goodsnum = shopInfo.cGoods
    this.goodssell = shopInfo.cSells
    this.score = shopInfo.score
  }
}

export class GoodsParams {
  constructor(itemParams) {
    this.set = itemParams.info.set
    this.desc = itemParams.rule.desc
    this.disclaimer = itemParams.rule.disclaimer
    this.key = itemParams.rule.key
    this.tables = itemParams.rule.tables
  }
}