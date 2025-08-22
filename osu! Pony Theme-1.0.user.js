// ==UserScript==
// @name         osu! Pony Theme
// @namespace    https://github.com/9IZUKI9
// @version      1.0
// @description  Applies different backgrounds to osu! pages
// @author       -Izuki-
// @match        https://osu.ppy.sh/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function applyStyles() {
        const css = `
                body[data-page="home"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__home.png?raw=true");
                    background-size: 100%;
                }

                body[data-page="home"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__home.png?raw=true");
                    background-size: 100%;
                    background-position-y: 345%;
                    background-repeat: no-repeat;
                    content: "";
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="beatmapsets"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__beatmaps.png?raw=true");
                    background-size: 100%;
                }

                body[data-page="beatmapsets"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__beatmaps.png?raw=true");
                    background-size: 100%;
                    background-position-y: 31%;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="rankings"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__rankings.png?raw=true");
                    background-size: 100%;
                }

                body[data-page="rankings"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__rankings.png?raw=true");
                    background-size: 100%;
                    background-position-y: 31%;
                    background-position-x: -20px;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="forums"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__forums.png?raw=true");
                    background-size: 100%;
                    padding-bottom: 15px;
                }

                body[data-page="forums"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__forums.png?raw=true");
                    background-size: 100%;
                    background-position-y: 31%;
                    background-position-x: -20px;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="store"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__store.png?raw=true");
                    background-size: 100%;
                    padding-bottom: 15px;
                }

                body[data-page="store"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__store.png?raw=true");
                    background-size: 100%;
                    background-position-y: 105%;
                    background-position-x: -20px;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="wiki"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__wiki.png?raw=true");
                    background-size: 100%;
                    padding-bottom: 15px;
                }

                body[data-page="wiki"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__wiki.png?raw=true");
                    background-size: 100%;
                    background-position-y: 150%;
                    background-position-x: -20px;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                body[data-page="users"] .osu-layout__section {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/background__pattern.png?raw=true");
                    background-size: 100%;
                    padding-bottom: 15px;

                }

                body[data-page="users"] .osu-layout__section::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__profile.png?raw=true");
                    background-size: 100%;
                    background-position-y: 150%;
                    background-position-x: -20px;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 100%;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 0;
                }

                .osu-page {
                    position: relative
                }

                .header-v4__bg-container {
                    visibility: hidden;
                }

                .header-v4__row--title {
                    border-radius: 30px 30px 0 0
                }

                .user-home {
                    border-radius: 0 0 30px 30px;
                    margin-bottom: 15px
                }

                .forum-title:before {
                    display: none
                }

                .osu-page--generic {
                    border-radius: 0 0 30px 30px;
                    margin-bottom: 15px
                }

                .input[type=search] {
                    border-radius: 15px
                }

                .osu-page--forum {
                    border-radius: 0 0 30px 30px;
                    padding-bottom: 10px;
                }

                .osu-page--wiki {
                    border-radius: 0 0 30px 30px;
                    padding-bottom: 30px;
                }

                .osu-page--forum-topic-reply {
                    border-radius: 0 0 30px 30px;
                    margin-bottom: 20px;
                }
                .js-forum-topic-reply--container::before {
                    background-image: url("https://github.com/9IZUKI9/My-Little-Osu/blob/main/Osu!%20Web%20Pony/Assets/pony__forums-reply.png?raw=true");
                    background-size: 50%;
                    background-position-y: 11%;
                    background-position-x: 100px;
                    background-repeat: no-repeat;
                    width: 300px;
                    height: 300px;
                    display: block;
                    content: "";
                    position: absolute;
                    z-index: 1;
                    margin-left: 70.4%;
                }

                .product-box {
                    border-radius: 20px
                }

                .store-products {
                    background-color: #3d3029;
                    border-radius: 0 0 40px 40px;
                    padding: 15px;
                }

                .product-box:before {
                    border-radius: 20px;
                }
        `;

        const style = document.createElement('style');
        style.textContent = css;
        document.head.appendChild(style);
    }

    function setPageAttribute() {
        const path = window.location.pathname;
        document.body.setAttribute('data-page',
        path === '/' || path === '/home' ? 'home' :
        path.startsWith('/beatmapsets') ? 'beatmapsets' :
        path.startsWith('/rankings') ? 'rankings' :
        path.startsWith('/community/forums') ? 'forums' :
        path.startsWith('/store') ? 'store' :
        path.startsWith('/wiki') ? 'wiki' :
        path.startsWith('/users') ? 'users' : '');

    }

    applyStyles();
    setPageAttribute();

    let lastUrl = location.href;
    new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            setPageAttribute();
        }
    }).observe(document, {subtree: true, childList: true});
    document.addEventListener('turbo:load', setPageAttribute);

})();
