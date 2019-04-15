(function () {
    fetch('/json/rec.json')
      .then(res => res.json())
      .then(render)

    function render(json) {
      let slides = json.data.slider.map(slide => {
        return { link: slide.linkUrl, image: slide.picUrl }
      })
      var cent = document.querySelector(".swiper-wrapper");
      for(var i = 0; i < slides.length; i++) {
      cent.innerHTML += `
          <div class="swiper-slide"><img src="${slides[i].image}" alt=""></div>
          `
      }
    }
    
    // 轮播图列表渲染
    // var sliderlist = [{
    //         src: "images/1234256.jpg",
    //     },
    //     {
    //         src: "images/1234416.jpg",
    //     },
    //     {
    //         src: "images/1234988.jpg",
    //     },
    //     {
    //         src: "images/1234562.jpg",
    //     },
    //     {
    //         src: "images/1222968.jpg",
    //     },
    // ]

    // var cent = document.querySelector(".swiper-wrapper");
    // for(var i = 0; i < sliderlist.length; i++) {
    // cent.innerHTML += `
    //     <div class="swiper-slide"><img src="${sliderlist[i].src}" alt=""></div>
    //     `
    // }

    
})()
