function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttributes('target', reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = doccument.createElement(raectElement.type);
    domElement.inerHTML = reactElement.children;
    for( const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement); 
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const maincontainer = document.querySelector('#root');

customRender(reactElement, mainContainer);

