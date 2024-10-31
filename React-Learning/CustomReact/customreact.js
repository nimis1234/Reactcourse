const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
        
    },
    childen: 'Click me to visit google'
} // creating custom react element
const mainContainer = document.querySelector('#root') //getting main container
customRender(reactElement, mainContainer) //calling fun
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    Object.keys(reactElement.props).forEach((prop) => {
        if (prop === 'children') return;
        domElement.setAttribute(prop, reactElement.props[prop]);
    });

    container.appendChild(domElement);
}
