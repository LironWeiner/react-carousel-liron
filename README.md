# React Carousel Liron
A responsive carousel for react that is very easy to use.
Comes with a simple fading animation between slides.
You can also have auto cycling between slides by adding some props.

### Features
* Responsive
* Mobile friendly  
* Custom auto play interval
* Stop play when mouse inside carousel and continue auto play when mouse outside the carousel
* Infinite loop
* Supports images , text content or anything you want.
* Each direct child represents one slide.
* Supports previuos/next
* Custom active slide
    
### Installing as a package
`npm i react-carousel-liron --save`

### Usage
```javascript
import React, { Component } from 'react';
import ReactDOM from 'react-dom';   
import Carousel from 'react-carousel-liron';
class DemoCarousel extends Component {
  render() {        
    return (
      <div className="container">
        <Carousel>
            <div>
                <img src="assets/someimage1.jpg" />
                <h1>some text 1</h1>
                <p>some paragraph text 1</p>
            </div>
            <div>
                <img src="assets/someimage2.jpg" />
                <h1>some text 2</h1>
                <p>some paragraph text 2</p>
            </div>              
        </Carousel>
      </div>
    );
  }
}
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
```

# API
### Carousel
```javascript
import Carousel from 'react-carousel-liron'
```
Name |Type |Default |Description
---- | --- | ------ | ----------
timer | number | null | The amount of time to delay between automatically cycling an item. If *null*, carousel will not automatically cycle
selectedIndex | number | 0 | Controls the current visible slide

### Demo
https://codesandbox.io/s/1o5lmx9kjj




