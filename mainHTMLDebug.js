function addHTMLToDOM(divDOMToAttachTo, arrayMe){
  arrayMe.forEach((item ,index)=>{
    console.log(item);
    document.getElementsByClassName(divDOMToAttachTo)[0].innerHTML+=item;
    debugger;
  });
}

//helpful Website
// https://url-decode.com/tool/create-array-js


//var dummyHTML = ['<div class="main">',
'<div class="home">',
'  <div class="redHouse">',
'    red',
'  </div>',
'  <div class="greenHouse">',
'    green',
'  </div>',
'  <div class="bluehouse">',
'    blue',
'  </div>',
'  </div>',
'  <div class="students">',
'    <div class="student1">Chris',
'    </div>',
'    <div class="student2">Sam',
'    </div>',
'    <div class="student3">Tom',
'    </div>',
'  </div>',
'</div>',
];
