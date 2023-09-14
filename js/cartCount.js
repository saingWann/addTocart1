// calcute badge count

import { itemCartsContainer } from "./addToCardBtn";
const badgeEle = document.querySelector('[badge]');
const badgeInnerCartEle = document.querySelector("[badgeCountInnerCart]");

export const calculateBadgeCount = () => {
    const itemCountInCart = itemCartsContainer.children.length;
    badgeInnerCartEle.innerText = itemCountInCart;
    badgeEle.innerText = itemCountInCart;
}
