const newsCategory = {
    news: '校园疫情-School News',
    embassy: '使馆信息-Embassy News',
    vaccine: '疫苗进展-Vaccine Progress',
    federal: '联邦新闻-Federal',
    study: '学业新闻-Study&Growth',
    identity: '身份/出入境-Visa&Border',
    post: '物资邮寄-Shipping',
    ticket: '机票行情-Flights',
    job: '实习就业-Job',
    article: '精品文章-Most Popular',
    all: ['in', ['校园疫情-School News', '使馆信息-Embassy News', '疫苗进展-Vaccine Progress', '联邦新闻-Federal', '学业新闻-Study&Growth', '身份/出入境-Visa&Border', '物资邮寄-Shipping', '机票行情-Flights', '实习就业-Job', '精品文章-Most Popular']],
  
    offer: 'Offer来了-Offer List',
    welfare: '公益讲座-Seminar',
    expert: '专家专栏-Insight',
  
    protect: '辟谣与防护-Rumor&protection',
    video: '实况视频-Live Video',
    ask: '常见问答-Q&A',
    recommend: '推荐阅读-RCMD Reading',
    shortVideo: '小视频-Short Video',
    others: '其他-Others',
    letter: '关怀信-CEO Letter',
    report: '日报-Daily Report',
    ju: 'JU推广-JU Promotion'
  
  }
  const regex = {
    tel: /^1[3-9]\d{9}$/, // 手机号
    china: /^(\+?0?86-?)?1[345789]\d{9}$/, // 中国手机号
    americal: /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/, // 美国手机号
    email: /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/i // 邮箱
  }
  export {
    newsCategory,
    regex
  }
  