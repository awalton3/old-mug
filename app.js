// import {MDCRipple} from '@material/ripple/index';
// const ripple = new MDCRipple(document.querySelector('.foo-button'));

//topAppBar
import {MDCTopAppBar} from '@material/top-app-bar/index';
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

//navbar scroll animation - from transparent to filled
$(document).ready(function() {
  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar");
      var $welcome = $(".welcome");
      $nav.toggleClass('navbar--scrolled', $(this).scrollTop() > $welcome.height() - 200);
    });
  });
})
