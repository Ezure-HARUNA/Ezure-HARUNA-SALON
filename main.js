//ハンバーガーメニューの出現



function toggleNav() {
  var body = document.body;
  var ham = document.getElementById('js-ham');
  var blackBg = document.getElementById('js-black-bg');

  ham.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
}
toggleNav();


/*

function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-ham');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();

*/








//スムーススクロール
//クリックされた場所を特定する→（）の中にeを入れる



document.addEventListener('click', (e) => {
    //e.targetでイベントの発生の発生元を特定できる！
    const　element =e.target
    console.log(element.hash);
    
    //aタグのデフォルトの挙動をストップする
    e.preventDefault()

    //ジャンプ先の要素を取得する
    //docment.querySelector('#first')
    const jumpToSection = document.querySelector(element.hash)
    //console.log(element, 'がクリックされた！')　

    //const targetSection =

    //scrollIntoView関数を用いて特定の要素までスムーススクロールする
    //ジャンプ先の要素.scrollIntoView()

    jumpToSection.scrollIntoView({
        //スムーズにスクロールする
    　　behavior: "smooth",
    　　//先頭までスクロール
        block: "start"
    })
    
})


