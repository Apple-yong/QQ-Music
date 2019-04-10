// 原生JS
// 点击获取此元素
// document.addEventListener('click',function(event){
//     let target = event.target
//     if(target.dataset.role === 'tab'){
//         [].forEach.call(target.parentElement.children, tab =>{
//             tab.classList.remove('current')
//         })
//         target.classList.add('current')

//         //设了data-view=".rec-view"，正好对应下面的class
//         let content = document.querySelector(target.dataset.view)
//         if(content){
//             //遍历所有，先全部隐藏
//             [].forEach.call(content.parentElement.children, child =>{
//                 child.style.display = 'none'
//             })
//             //再展示一个
//             content.style.display = 'block'
//         }
//     } 
// })


//jquery
let navbar_all = $("#navbar a")
navbar_all.each(function(index, item) {	
    $(this).click(function(){
        $(this).addClass('current')
        //navbar_all.not($("#navbar a")[index]).removeClass("current");
        $(this).siblings("a").removeClass('current')
        $(".tab-content").not($(".tab-content")[index]).hide();
        $(".tab-content").eq(index).show();
    })	
})

//原生JS
// let navbar_all = document.querySelectorAll("#navbar a")
// let tab_content_all = document.querySelectorAll(".tab-content")
// navbar_all.forEach(function(index, item) {
//     navbar_all[item].onclick = function(){
//         this.classList.add('current')
//         for(var i=0;i<getSiblings(this).length;i++){
//             getSiblings(this)[i].classList.remove('current')
//         }
//         for(var i=0;i<getSiblings(tab_content_all[item]).length;i++){
//             getSiblings(tab_content_all[item])[i].style.display = 'none'
//         }
//         tab_content_all[item].style.display = 'block'

//     }
// })
// // 原生JS获取this之外的其他元素，等价于jquery的siblings
// function getSiblings(n) {
//     return getChildren(n.parentNode.firstChild, n);
//     function getChildren(n, skipMe){
//         var r = [];
//         for ( ; n; n = n.nextSibling ) 
//            if ( n.nodeType == 1 && n != skipMe)
//               r.push( n );        
//         return r;
//     }
// }