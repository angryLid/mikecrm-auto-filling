// ==UserScript==
// @name        麦客CRM自动填充表单
// @namespace   Violentmonkey Scripts
// @match       http://*mikecrm.com/*
// @grant       none
// @version     1.0
// @author      angryLid
// @description 麦客CRM自动填充表单
// ==/UserScript==

const callback = function() {
    const titleList = document.querySelectorAll('p.fbc_title:first-child:first-child');
    const inputList = document.querySelectorAll('.fbi_input.aria-content');
    const ruleNames = ['姓名', '名字', '学号', '电话', '联系', '手机', '班级', '专业', 'QQ', 'qq', '性别', '辅导员'];
    const ruleValues = [
        '路人甲',
        '路人甲',
        '909090732',
        '12377774444',
        '12377774444',
        '12377774444',
        '计科五班',
        '计算机科学与技术',
        '312098618',
        '312098618',
        '男',
        '乔碧萝',
    ];
    titleList.forEach((node, index) => {
        const title = node.innerText;
        const inputNode = inputList[index];

        for (let i = 0; i < ruleNames.length; i += 1) {
            if (title.indexOf(ruleNames[i]) > -1) {
                inputNode.value = ruleValues[i];
            }
        }
    });
};
window.addEventListener('load', callback);
