function lerp(A, B, t) {
  return A + (B - A) * t;
}

function checkBrowser() {
  let isChrome = !!window.chrome;
  return isChrome;
}
