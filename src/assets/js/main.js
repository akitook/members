import headerScroll from "./modules/headerScroll";
import fadeInContents from "./modules/fadeInContents";
import watchResize from "./modules/watchResize";
// import setupYubinbango from './modules/setupYubinbango'

//  サンプル用 複製時は削除してください //
import sampleJS from "./modules/sampleJS";

$(() => {
  // ドロワーメニューの開閉
  $(".js-drawer").on("click", function () {
    $(".c-menu-icon").toggleClass("is-open");
    $("#header").toggleClass("is-open");
  });
});

export default {
  headerScroll,
  fadeInContents,
  watchResize,

  //  サンプル用 複製時は削除してください //
  sampleJS,
};
