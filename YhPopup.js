/**
 * ///////////////////////////////////////////////
 * /// YhPopup.js ///
 * 
 * @copyright (C)2020 YuHima
 * @author YuHima <Twitter:@YuHima_03>
 */

let popup_top;
window.onload = () => {
    popup_top = document.getElementsByClassName("yhpopup_top");
    for (let i = 0; i < popup_top.length; i++) {
        console.log(popup_top[i].classList);
    }
}