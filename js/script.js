function toggleSubsections(value) {
    span = value.getElementsByClassName("section-opener")[0]
    writingMode = span.style.writingMode
    span.style.writingMode = (writingMode == 'vertical-lr') ? 'horizontal-tb' : 'vertical-lr';
}

let sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('click', (e) => {

    const menuItemData = e.target.nextElementSibling;
    if (menuItemData != null) {
        menuItemData.style.setProperty('--openHeight', menuItemData.scrollHeight + 'px');
        menuItemData.classList.toggle('show');
        menuItemData.classList.toggle('hide');
    
        const arrow = e.target.getElementsByClassName("section-opener")[0]
        arrow.classList.toggle('show');
        arrow.classList.toggle('hide');
    }
  })
});