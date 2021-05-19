let myaddbutton = document.getElementById('add-tags');

console.log(myaddbutton);

myaddbutton.addEventListener('click', (event) => {
    // <input class="text-box" id="tag" type="text">
    
    let newbox = document.createElement('input');
    newbox.setAttribute('class', 'text-box');
    newbox.setAttribute('id', 'tag');
    newbox.setAttribute('name', 'tag-form');
    newbox.setAttribute('type', 'text');
    
    myaddbutton.insertAdjacentElement('beforebegin', newbox);
    
    // let spans = document.getElementsByClassName('box');
    // let lastspan = spans[spans.length-1];
    // lastspan.setAttribute('style', 'display: block;');
    // console.log('working');
    // let mynewbox = document.createElement('span');
    // mynewbox.setAttribute('class', 'box');
    // mynewbox.setAttribute('style', 'display: inline-block;');
    // let mytemplate = 'Todo Item <span>' + (document.getElementsByClassName('box').length + 1) + ' </span><input type="text" name="csvBox" id="inputBox" placeholder=""></textarea> ';
    // mynewbox.innerHTML = mytemplate;
    //
    
});
