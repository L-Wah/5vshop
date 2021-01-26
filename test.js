var a={};
var b=[];
console.log(a instanceof Array) //false
console.log(a instanceof Object) //true
console.log(typeof(a))

var list=[
  {
  uname:'dingding',
  uemail:'ding@qq.com',
  phone:'13511011000',
  user:'丁春秋',
  ugender:'女',
  },
  {
  uname:'dangdang',
  uemail:'dang@qq.com',
  phone:'13501234568',
  user:'当当喵',
  ugender:'男',
  },
  {
  uname:'doudou',
  uemail:'dou@qq.com',
  phone:'1501234569',
  user:'窦志强',
  ugender:'男',
  }
]
function temp() {
  return `
    <ul>
      ${list.map( item=>
        `<li> ${item.uname} </li>`).join('')
      }
    </ul> 
  `
}
console.log(temp())