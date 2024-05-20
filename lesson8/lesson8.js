let droptitle='';
const droplink = document.querySelectorAll('.drop-link.animate.w-inline-block');
const dropimg = document.querySelectorAll('.drop-img2');
console.log(droplink);
console.log(dropimg);

droplink.forEach((dropLink, index) => {
    dropLink.addEventListener('click', () => {
        console.log('clicked ' + index);
        // dropimg[index * 2].classList.toggle('hide');
        // dropimg[index * 2+1].classList.toggle('hide');
    })
})

// const tabMenu = document.querySelectorAll('.tab-link');
// const tabContent = document.querySelectorAll('.tab-pane');
// const tabNum = document.querySelectorAll('.tab-index');

// console.log(tabMenu);
// console.log(tabContent);

// tabMenu.forEach((tabLink, index) => {
// 	tabLink.addEventListener('click', () => {
//   	tabMenu.forEach(tab => {
//     	tab.classList.remove('active');
//     })
//   	tabMenu[index].classList.add('active');
//   	tabContent.forEach( tabItem => {
//     	tabItem.classList.remove('active')
//     })
//     tabContent[index].classList.add('active');
//   })
// })

// tabNum.forEach((item, index) => {
// 	item.textContent = index+1;
// })
