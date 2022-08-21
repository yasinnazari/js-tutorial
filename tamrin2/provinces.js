let userSelectedProvince = prompt('Enter the province')
let provinces = {
  tehran: ['shahriar', 'ghods', 'baghestan', 'firooz-kooh'],
  alborz: ['karaj', 'shahr-jadid', 'hashtgerd', 'taleghan'],
  zanjan: ['Abhar', 'khoramdare', 'zarin-rood', 'soltanie'],
  isfahan: ['kashan', 'fereydoon-shahr', 'khansar', 'natanz'],
  tabriz: ['azar-shahr', 'abesh-ahmad', 'basmanj', 'ahar']
}

let SelectionUserProvince = provinces[userSelectedProvince]


if (SelectionUserProvince == undefined) {
  console.log('شهر مورد نظر موجود نیست')
} else {
  console.log(SelectionUserProvince)
}
