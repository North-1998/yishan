/*
 * @Author: your name
 * @Date: 2020-10-23 13:41:09
 * @LastEditTime: 2020-10-23 14:07:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gw\js\research_education.js
 */
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });