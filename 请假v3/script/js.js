//获取当前时间
let date = new Date()   
let td = new Date()
//开始时间，当前时间前30min
td.setMinutes(date.getMinutes() - 30)
$id('yjfxcfsj2').innerHTML = `${zero(td.getMonth()+1)}-${zero(td.getDate())} ${zero(td.getHours())}:${zero(td.getMinutes())}`
//结束时间，当前时间后2个小时
td.setHours(date.getHours() + 1)
$id('yjfxddsj2').innerHTML = `${zero(td.getMonth()+1)}-${zero(td.getDate())} ${zero(td.getHours())}:${zero(td.getMinutes())}`

//发起申请的时间,2小时38分钟之前
td.setHours(date.getHours() - 2)
td.setMinutes(td.getMinutes() - 38)
$id('fqsj').innerHTML = `${zero(td.getMonth()+1)}-${zero(td.getDate())} ${zero(td.getHours())}:${zero(td.getMinutes())}`
//审批通过时间，1小时19分钟之前
td.setHours(date.getHours() - 1)
td.setMinutes(td.getMinutes() - 19)
$id('spsj').innerHTML = `${zero(td.getMonth()+1)}-${zero(td.getDate())} ${zero(td.getHours())}:${zero(td.getMinutes())}`
