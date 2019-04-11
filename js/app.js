// (function name(params) {
//   let slider = new slider({
//     el: document.querySelector('#slider'),
//     slides: [
//       { link: '#1', images:'images/1234256.jpg' },
//       { link: '#1', images:'images/1234416.jpg' },
//       { link: '#1', images:'images/1234988.jpg' },
//       { link: '#1', images:'images/1234562.jpg' },
//       { link: '#1', images:'images/1222968.jpg' },
//     ]
//   })
//   window.slider = slider
// })()
var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    loop : true,
    pagination: {
        el: '.swiper-pagination',
      },
})
