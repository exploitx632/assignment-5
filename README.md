What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  1.getElementById used for access a single element by using unique Id ,
  
  2.getElementsByClassName used for HTML collection of element which is using same classname ,
  
  3.querySelector used for access the first match element, it can access element by using tagName or className or id, it can use like a css selector ,
 
  4.querySelectorAll used for NodeList of the element with same className or tagName.

How do you create and insert a new element into the DOM?
  
  1.first of all i will access the parent element 
        
  2.i create a element by using [document.createElement()]; then i will set some text inside div then i will append the element to parent element using [parentElement.appendChild()]
            like , 
            
            let parentElement = document.getElementById('parent');
            
            let div = document.createElement('div');
            
            div.innerText = 'This is child element';
            parentElement.appendChild(div);

What is Event Bubbling and how does it work?

 Event bubbling is that process where an event start from child element then propagate to it's parent, grandparent and until the root . means event trigger child to parent .
        like,
    document.getElementById('parent').addEventListener('click',function(){
        console.log('Parent was clicked');
    });
    document.getElementById('child').addEventListener('click',function(){
        console.log('Child was clicked');
    })

means here child will be first click then parent .
 
What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where instead of using eventListener to multiple child ,we use a single eventListener to parent element and using event bubbling to handle event from child element. it is useful because it reduce eventListener and increase performance.

What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() is a function that stop the default behavior of element
stopPropagation() is a function that stop an event bubbling from child to parent
