  
  document.addEventListener('DOMContentLoaded', function() {
    
    const $dom = document;

    

    const $header = $dom.querySelector('.header');
    const $mainVisual = $dom.querySelector('.mainvisual');

    $header.classList.add('active');
    $mainVisual.classList.add('avtive');



    /* スクロールアニメーショントリガー付与 */

    const $sections = $dom.querySelectorAll('.contents');

    /* section分割 */
     $sections.forEach($section => 
       console.log($section)
     );
    /* section分割 */

     const callback = (entries, observer)=> {

       entries.forEach(entry => {

         if(entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);

         }
      });
    }

      const io = new IntersectionObserver(callback);

      io.observe($header);
      io.observe($mainVisual);
      io.observe($sections[0]);
      io.observe($sections[1]);
      io.observe($sections[2]);
      io.observe($sections[3]);
      io.observe($sections[4]);

    /* スクロールアニメーショントリガー付与 */
    


    // ナビゲーションアニメのトリガー着脱 
    const togleMenu = ()=> {

      const $menuIcon = $dom.querySelector('.menu-icon');
      const $nav = $dom.querySelector('.res-nav');
      const $closeIcon = $dom.querySelector('.close-icon');
      const $navLinks = $nav.querySelectorAll('a');

      /* ナビゲーションオープン */
      $menuIcon.addEventListener('click', ()=> {

        $nav.classList.add('inview');
      });

      /* ナビゲーションクローズ */
      $closeIcon.addEventListener('click', ()=> {

        $nav.classList.remove('inview');
      });

      /* ページ内リンクでナビゲーションクローズ */
      const $aTag = $navLinks.forEach(link=> 

        link.addEventListener('click', ()=> {

          
          $nav.classList.remove('inview');
        })
      )
      /* ページ内リンクでナビゲーションクローズ */
     

    }
    togleMenu();
    // ナビゲーションアニメのトリガー着脱 


  });
  