const watchResize = () => {
  // window幅が変更されたときリロード
  let lastInnerWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    if (lastInnerWidth !== window.innerWidth) {
      lastInnerWidth = window.innerWidth;
      window.location.reload();
    }
  });

  // 端末の向きが変更されたときリロード
  window.addEventListener(
    "orientationchange",
    () => {
      window.location.reload();
    },
    false,
  );
};

export default watchResize();
