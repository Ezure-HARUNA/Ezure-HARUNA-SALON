//ハンバーガーメニューの出現

function toggleNav() {
  //➀要素を取得する
　//getElementById関数を使って要素を取得する
　//引数にはidを文字列で指定する
  var body = document.body;
  var ham = document.getElementById('js-ham');
  var blackBg = document.getElementById('js-black-bg');
  var menuBack =document.getElementById('js-back-menu');

  //➁イベントリスナーを設定する
  //対象の要素.addEventListener(イベント名, 処理)
  ham.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });
  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });
  document.addEventListener('click', () => {
  if(element.classList.contains('scroll'))
  body.classList.remove('nav-open');
  //メニューをクリックした際、メニューを非表示にする
  });
toggleNav();

}



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
    
  if (!element.classList.contains('scroll')
  )
  return ;
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


