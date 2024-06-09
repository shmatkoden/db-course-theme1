/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "36304dd58f05fee67b8109abdec3df11"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.d5a225ae.css",
    "revision": "5c751da82c69a535bd3371d173af2789"
  },
  {
    "url": "assets/img/photo1.5743f427.png",
    "revision": "5743f42747a2f4c3119884459d8d48ae"
  },
  {
    "url": "assets/img/photo2.121df49e.png",
    "revision": "121df49e75680fedadf1b12cca01a344"
  },
  {
    "url": "assets/img/photo3.95ca1bd8.png",
    "revision": "95ca1bd8fc739b80d400110a4fc28667"
  },
  {
    "url": "assets/img/photo4.949adf86.png",
    "revision": "949adf86813b6270d3d5860725d96592"
  },
  {
    "url": "assets/img/photo5.ff090761.png",
    "revision": "ff09076118b87a0584b1f483956beeb6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/version7.8e5d3cf5.png",
    "revision": "8e5d3cf5010f9245e60ae4aa5cd2e9f8"
  },
  {
    "url": "assets/js/1.c514b243.js",
    "revision": "03e6bcd414c9ade13411da67fd67799b"
  },
  {
    "url": "assets/js/10.e55adb26.js",
    "revision": "3ca85133fd5d585db26c1aa0b09b5295"
  },
  {
    "url": "assets/js/13.143540f4.js",
    "revision": "587a2c05dac4f80aca8285fc00cb2533"
  },
  {
    "url": "assets/js/14.94c7d917.js",
    "revision": "063690ce3552feef291b16a7e9c04e5b"
  },
  {
    "url": "assets/js/15.570e3662.js",
    "revision": "7e2cc312c499a1ed3b307bd693943c0b"
  },
  {
    "url": "assets/js/16.df81cf96.js",
    "revision": "e9616b218353db3dfb876776c93f6c50"
  },
  {
    "url": "assets/js/17.6db2bb35.js",
    "revision": "76aa97537cc23020296e6f31a7af9fa9"
  },
  {
    "url": "assets/js/18.5c5e592f.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.67b2b64c.js",
    "revision": "a4770dc4413eb53cffcce2b405146ea6"
  },
  {
    "url": "assets/js/2.0091a01b.js",
    "revision": "46c985312503d1d086511ea8c8736cd2"
  },
  {
    "url": "assets/js/20.50bdfbe1.js",
    "revision": "a0334ab66a8d0b5c114852f17350cca4"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.6b41f770.js",
    "revision": "df72749eaa76dc6b67d1921de410c7c5"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.ffb51423.js",
    "revision": "90465199c5ebd248be0658acdc814b55"
  },
  {
    "url": "assets/js/28.8bb2fae9.js",
    "revision": "071fb78ef62951ee1b1650297d98c408"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.3f861d2a.js",
    "revision": "192404acec4d1add2cd5756eea9e4edd"
  },
  {
    "url": "assets/js/31.e35d53ea.js",
    "revision": "6402c6129d697f3319cb0544c46f4627"
  },
  {
    "url": "assets/js/32.cf738232.js",
    "revision": "76904fa5dfc21913701460eaf2f8d2cd"
  },
  {
    "url": "assets/js/33.b1e8b082.js",
    "revision": "0d9078523824eecad9701dbd6d993fdb"
  },
  {
    "url": "assets/js/34.1ce502a1.js",
    "revision": "cff33bd15e4953bc428a2d981dfb204b"
  },
  {
    "url": "assets/js/35.3f58d6a8.js",
    "revision": "0f57cba254feefe8748745a2cf72ab88"
  },
  {
    "url": "assets/js/36.a04e19a8.js",
    "revision": "6e270530a193c54cfea8b54986cd7a64"
  },
  {
    "url": "assets/js/37.3f193ce8.js",
    "revision": "a5ac15eb174f0a99f540f6a2a0c31c61"
  },
  {
    "url": "assets/js/38.6c5f55bf.js",
    "revision": "829282d9441ee488aaf8b8fcca9e6edc"
  },
  {
    "url": "assets/js/39.e44adaa8.js",
    "revision": "84b28d8bef7b8322eab18405300a6bd6"
  },
  {
    "url": "assets/js/4.7ff1b1d7.js",
    "revision": "d191d7b9b4000a6ab0134b1e573082b4"
  },
  {
    "url": "assets/js/41.61aa90e8.js",
    "revision": "066959bec3c5f45d798f3d1a90380fa5"
  },
  {
    "url": "assets/js/5.82374277.js",
    "revision": "8b4771c9adf4eba97028ab5bb33ac733"
  },
  {
    "url": "assets/js/6.0ca3a281.js",
    "revision": "1364f1e7d2ebb1de5cad60d916c17cbc"
  },
  {
    "url": "assets/js/7.d4c176d6.js",
    "revision": "fc7e35d5724201e690781881c263b248"
  },
  {
    "url": "assets/js/8.ec0c7863.js",
    "revision": "b6b58599661c95fa0eb718bb47ff2438"
  },
  {
    "url": "assets/js/9.3cefd8e0.js",
    "revision": "651b33ee624bfe8d7ef1bcb0dacfc4f1"
  },
  {
    "url": "assets/js/app.03d14135.js",
    "revision": "09d311414648b162f9c15a845a080c5e"
  },
  {
    "url": "assets/js/vendors~docsearch.a7a1cc5b.js",
    "revision": "dd76b1dc32160e58eafabb5eb9d1d835"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4c347e8b6e9e664c7f702bf845ce427f"
  },
  {
    "url": "design/index.html",
    "revision": "71008ed9253f68d11abdd803b9f3be22"
  },
  {
    "url": "index.html",
    "revision": "f6f84092c37779c8c91edacec72a74a8"
  },
  {
    "url": "intro/index.html",
    "revision": "0a450c96b24526ba0151ed287273cd03"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "53ec7aa3fd9e2d104082df845c79176a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f6d07617785c6b157585b07964a77adc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d514a164932e1311f9c0909bf1585a75"
  },
  {
    "url": "software/index.html",
    "revision": "2f9f04b2d7f6aea1208692c10642f4c6"
  },
  {
    "url": "test/index.html",
    "revision": "876c7695bd478ff6b7651fce560ae9ff"
  },
  {
    "url": "use cases/index.html",
    "revision": "e88f2f629b37a741547a99d90c54afe0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
