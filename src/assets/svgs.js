import React from 'react';

export const GithubSvg =({isDarkMOde})=>( <svg 
style={{ height: '2rem', width: '2rem', fill: `${isDarkMOde ? 'white' : 'black'}` }}
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 16 16" 
id="github">
<path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>
);

export const LinkedinSvg =({isDarkMOde})=>(
<svg xmlns="http://www.w3.org/2000/svg" 
  width="2rem" height="2rem" 
  fill={`${isDarkMOde ? 'white' : 'black'}`} 
enable-background="new 0 0 24 24" 
viewBox="0 0 24 24" id="linkedin">
    <path d="M23.245 24h-4.655c-.414 0-.75-.336-.75-.75v-7.312c0-2.232-.242-3.228-1.675-3.228-1.296 0-2.046.507-2.046 3.102v7.438c0 .414-.336.75-.75.75h-4.66c-.414 0-.75-.336-.75-.75v-15.022c0-.414.336-.75.75-.75h4.474c.414 0 .75.336.75.75v.12c.902-.709 2.155-1.247 3.729-1.247 5.618 0 6.338 4.22 6.338 7.896v8.252c0 .414-.336.75-.75.75zm-3.905-1.5h3.16v-7.503c0-4.663-1.312-6.396-4.838-6.396-1.98 0-3.257 1.091-3.75 2.025-.13.246-.385.4-.664.4-.414 0-.815-.336-.815-.75v-1.298h-2.974v13.521h3.16v-6.688c0-1.138 0-4.602 3.546-4.602 3.175 0 3.175 3.076 3.175 4.728zM5.787 24h-4.665c-.414 0-.75-.336-.75-.75v-15.021c0-.414.336-.75.75-.75h4.665c.414 0 .75.336.75.75v15.021c0 .414-.336.75-.75.75zm-3.915-1.5h3.165v-13.521h-3.165zM3.452 6.929c-1.904 0-3.452-1.56-3.452-3.477 0-1.903 1.548-3.452 3.452-3.452 1.903 0 3.451 1.549 3.451 3.452 0 1.917-1.549 3.477-3.451 3.477zm0-5.429c-1.077 0-1.952.875-1.952 1.952 0 1.09.875 1.977 1.952 1.977 1.076 0 1.951-.887 1.951-1.977 0-1.077-.876-1.952-1.951-1.952z"></path></svg>
);

export const TwitterSvg =({isDarkMOde})=>(
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="2rem" height="2rem" 
    fill={`${isDarkMOde ? 'white' : 'black'}`} 
    viewBox="0 0 512 512" 
    id="twitter"><g clip-path="url(#clip0_84_15698)"><rect width="512" height="512" 
    fill="#fff" rx="60"></rect>
    <path fill="#000" d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"></path></g><defs><clipPath id="clip0_84_15698"><rect width="512" height="512" fill="#fff"></rect></clipPath></defs></svg>
)

export const LightMode = <svg 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 24 24" fill="currentColor" 
class="w-6 h-6">
<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
</svg>

export const darkMode = <svg 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 24 24" fill="currentColor" 
class="w-6 h-6">
<path fill-rule="evenodd" 
d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
</svg>


