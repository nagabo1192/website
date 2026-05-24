const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  slidesPerView: "auto", // 一度に表示する枚数
    spaceBetween: 16, 
   
  autoplay: { // 自動再生
    delay: 1000, // 2秒後に次のスライド
    disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  // ページネーション
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".staff-next",
    prevEl: ".staff-prev",
  },

    breakpoints: {
    
    // スライドの表示枚数：600px以上の場合
    375: {
      slidesPerView: "auto",
       centeredSlides: true,
    },
    // // スライドの表示枚数：800px以上の場合
    // 800: {
    //   slidesPerView: 2,
    // },
    // スライドの表示枚数：900px以上の場合
    //  900: {
    //   slidesPerView: 4,
    // },
    // スライドの表示枚数：1100px以上の場合
    1414: {
      slidesPerView: 2,
      spaceBetween: 70,
       centeredSlides: false,
    },
   
  },
});

// const swiper = new Swiper(".staff .swiper", {
//   loop: true, // ループ
//   speed: 1500, // 少しゆっくり(デフォルトは300)
//   slidesPerView: "auto", // 一度に表示する枚数
//     spaceBetween: 23, 
   
//   // autoplay: { // 自動再生
//   //   delay: 1000, // 2秒後に次のスライド
//   //   disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
//   // },
//   // ページネーション
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // 前後の矢印
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//     breakpoints: {
    
//     // スライドの表示枚数：600px以上の場合
//     375: {
//       slidesPerView: "auto",
//        centeredSlides: true,
//     },
//     // // スライドの表示枚数：800px以上の場合
//     // 800: {
//     //   slidesPerView: 2,
//     // },
//     // スライドの表示枚数：900px以上の場合
//     //  900: {
//     //   slidesPerView: 4,
//     // },
//     // スライドの表示枚数：1100px以上の場合
//     1414: {
//       slidesPerView: 2,
//       spaceBetween: 70,
//        centeredSlides: false,
//     },
   
//   },
// });