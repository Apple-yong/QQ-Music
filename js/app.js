(function(){
  fetch('/json/rec.json')
      .then(res => res.json())
      .then(render)

    function render(json){
      renderSlider(json.data.slider)
      renderRadioList(json.data.radioList)
      renderHotList(json.data.songList)
    }

    // 渲染轮播图
    function renderSlider(slides) {
      // slides = slides.map(slide => {
      //   return { link: slide.linkUrl, image: slide.picUrl }
      // })
      var cent = document.querySelector(".swiper-wrapper");
      for(var i = 0; i < slides.length; i++) {
      cent.innerHTML += `
          <div class="swiper-slide"><img src="${slides[i].picUrl}" alt=""></div>
          `
      }
    }

    // 渲染电台列表
    function renderRadioList(radios) {
      var cent = document.querySelector("#radios_list");
      for(var i = 0; i < radios.length; i++) {
      cent.innerHTML += `
        <div class="list_main">
            <div class="list_media">
                <img class="video_list__media_img" src="${radios[i].picUrl}" alt="热歌">
                <span class="icon icon_play"></span>
            </div>
            <div class="list_info"><h3 class="list_tit tit_two_row">${radios[i].Ftitle}</h3></div>
        </div>
          `
      }
    }

    // 渲染热门歌单
    function renderHotList(hotmusic) {
      var cent = document.querySelector("#hot_list");
      for(var i = 0; i < hotmusic.length; i++) {
      cent.innerHTML += `
        <div class="list_main">
            <div class="list_media">
                <img class="video_list__media_img" src="${hotmusic[i].picUrl}" alt="热歌">
                <span class="icon icon_play"></span>
            </div>
            <div class="list_info"><h3 class="list_tit tit_two_row">${hotmusic[i].songListDesc}</h3></div>
        </div>
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
