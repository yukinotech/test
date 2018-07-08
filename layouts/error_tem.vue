<template>
    <nuxt/>
</template>

<style>
    .button,
    .button:visited {
        display: inline-block;
        color: black;
        letter-spacing: 1px;
        background-color: #fff;
        border: 2px solid #000;
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 45px;
    }

    .button:hover,
    .button:focus {
        color: #fff;
        background-color: #000;
    }

    .title {
        color: #000;
        font-weight: 300;
        font-size: 2.5em;
        margin: 0;
    }

    /*一下为自定义内容*/

    body {
        margin: 0px;
        font-family: "Source Sans Pro", Arial, sans-serif;
    }

    a {
        text-decoration: none;
        color: #888;
    }
    a:hover{
        color: #409EFF;
    }
    .container {
        margin: 100px 0;
        width: -webkit-fill-available;
        text-align: center;
    }
</style>