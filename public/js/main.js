$("li").click((e) => {
  $(".profile__link--active").removeClass("profile__link--active");
  $(e.currentTarget).addClass("profile__link--active");
});
