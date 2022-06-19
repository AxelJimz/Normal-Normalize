const {$NAV, $MAIN} = {
    $NAV : document.querySelector('nav'),
    $MAIN : document.querySelector('main'),
}

const isSetMarginTopMain = () => {
    const getStylesNav = getComputedStyle($NAV);
    const getHeightNav = getStylesNav.getPropertyValue('height');
    $MAIN.style.marginTop = getHeightNav;
}

isSetMarginTopMain();

