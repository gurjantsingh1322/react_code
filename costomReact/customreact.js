// import { Children } from "react";

// import { createElement } from "react";

function gurjant(reactEliment,container){
    // const domEliment = document.createElement(reactEliment.type)
    // domEliment.innerHTML = reactEliment.children
    // domEliment.setAttribute('href', reactEliment.props.href)
    // domEliment.setAttribute('target', reactEliment.props.target)

    // container.appendChild(domEliment)



    const dmel = document.createElement(reactEliment.type)
    // console.log(reactEliment.props.href)s
    dmel.innerHTML = reactEliment.children
    for (const pro in reactEliment.props) {
       if (pro === 'children') continue;
       dmel.setAttribute(pro, reactEliment.props[pro])

    //    console.log(pro)
    }
    container.appendChild(dmel)

}

// import { createElement } from "react";

const reactEliment = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');

gurjant(reactEliment, mainContainer)

