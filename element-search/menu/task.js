const links = [...document.querySelectorAll('.menu__link')];

const onClick = event => {
    const link = event.target;
    const menu = link.closest('.menu');
    const menuItem = link.closest('.menu_item');
    const childMunesCollection = menuItem.querySelectorAll('.menu');
    const childMenus = [...childMunesCollection];
    childMenus.forEach(menu => menu.classList.toggle('menu_active'));
    const parrentMenu = menu.closest('.menu');
    const otherMenuItems = parrentMenu.querySelectorAll('.menu__items');
    otherMenuItems.forEach(menu => menu.classList.remove('menu_active'));
}

links.forEach(link => link.addEventListener('click', onClick));