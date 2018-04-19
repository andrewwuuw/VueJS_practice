var app = new Vue({
  el: '#helloWorld',
  data: {
    message: 'Hello Vue ^^'
  }
})

var app2 = new Vue({
  el: '#vBind',
  data: {
    message: '滑鼠停留於 ' + new Date()
  }
})

var app3 = new Vue({
  el: '#vIf',
  data: {
    seen: true
  }
})
