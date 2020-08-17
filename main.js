import { createElement, Component, render } from './toy-react';

class MyComponent extends Component {
    render() {
        return (<div>
            <h1>title!</h1>
            {this.children}
        </div>);
    }
}

render(<MyComponent id="a" class="c">
    <div>test</div>
    <div>2</div>
    <div>3</div> 
</MyComponent>, document.body);