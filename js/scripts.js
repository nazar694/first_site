// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
      menu.classList.toggle('active')
      burger.classList.toggle('active-burger')
      body.classList.toggle('locked')
  })


  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger')
  items.forEach(item => {
      item.addEventListener('click', () => {
          console.log('lol');
          const parent = item.parentNode
          if (parent.classList.contains('accordion__item-active')) {
              parent.classList.remove('accordion__item-active')
          } else {
              document
                  .querySelectorAll('.accordion__item')
                  .forEach(child => child.classList.remove('accordion__item-active'))   
              parent.classList.add('accordion__item-active')
          }
      })
  })
}
accordion()

function fixedNav() {
    const nav = document.querySelector('nav')
    const up = document.querySelector('#ui-to-top')
  
    const breakpoint = 50
    window.addEventListener('scroll', () => {
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
      up.classList.remove('hidden')
    } else {
      nav.classList.remove('fixed__nav')
      up.classList.add('hidden')
    }})
}
fixedNav()

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
  const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector)
  function hideTabContent() {
      content.forEach(item => {
          item.style.display = 'none'
      });
      tab.forEach(item => {
          item.classList.remove(activeClass)
      });
  }
  function showTabContent(i = 0) {
     content[i].style.display = 'block'
     tab[i].classList.add(activeClass)
  }
  hideTabContent()
  showTabContent()
  header.addEventListener('click', e => {
      const target = e.target
      if (target.classList.contains(tabSelector.replace(/\./, '')) || 
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
          tab.forEach((item, i) => {
              if ( target == item || target.parentNode == item ) {
                  hideTabContent()
                  showTabContent(i)
              }
          });
      }
  })
}

tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
