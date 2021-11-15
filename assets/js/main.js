function initPage() {
  const grid = document.getElementById('gamme-grid')
  const masonry = new Masonry(grid, {
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    // use element for option
    columnWidth: '.grid-sizer',
    percentPosition: true
  })
}

//if(document.readyState === 'loading') {
  //window.addEventListener('DOMContentLoaded', initPage);
//} else {
  //initPage();
//}
