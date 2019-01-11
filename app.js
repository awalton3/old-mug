//buttons
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

//navdrawer
import {MDCDrawer} from "@material/drawer";
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
var open_button = document.getElementById('navdrawer_open_icon');
open_button.addEventListener('click', function() {
  drawer.open = true;
});
var close_button = document.getElementById('navdrawer_close_icon');
close_button.addEventListener('click', function() {
  drawer.open = false;
});
