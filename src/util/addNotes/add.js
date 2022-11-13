(function () {
var targertArea = window.getSelection().toString()
window.addEventListener('keydown',function(event){
    console.log('event.key==',event.key)
    if(event.ctrlKey && event.key=='/'){
        console.log('window.getSelection()',targertArea);
        if(targertArea!=''){
            if(!targertArea.includes('<!--')&&!targertArea.includes('-->')){
                targertArea='<!--'+targertArea+'-->'
                console.log('targertArea',targertArea)
                if(document.getElementById('code').innerText.includes(window.getSelection().toString())){
                    var textAreaArr = document.getElementById('code').innerText.split(window.getSelection().toString())
                    document.getElementById('code').innerText=textAreaArr[0]+targertArea+textAreaArr[1]
                }
            }
        }
    }
})
})()
