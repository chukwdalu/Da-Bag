$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1,
            message:1,
            comment1: 1,
        },
        600: {
            items: 2,
            message:2,
            comment1: 2,
        },
        1000: {
            items: 3,
            message:3,
            comment1: 2,
        }
    }
})
AOS.init({
    duration: 1200,
  })

  (async () => {
    const sdk = new DSChatSDK("sq94k9OZV", "chat-frame", "pub_5738506b4e495f744e74556e666a644a68766f4b69767753596239666e473533271517a485775656f354978795830")
    await sdk.connect();
});