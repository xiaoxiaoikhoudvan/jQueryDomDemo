window.jQuery = function(selectorOrArray){
    let elements
    if (typeof selectorOrArray === 'string') {
         elements = document.querySelectorAll(selectorOrArray)
    }else if(selectorOrArray instanceof Array){
         elements = selectorOrArray
    }
    //api 可以操作elements
    return {
        oldApi:selectorOrArray.oldApi,
        find(selector){
            console.log("elements=>",elements);
            let array = []
            for(let i=0; i<elements.length;i++){
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            array.oldApi = this
            return jQuery(array)
        },
        end(){
            return this.oldApi
        },
        each(fn){
            for(let i=0; i<elements.length;i++){
                fn.call(null,elements[i],i)
            }
            return this
        },
        parent(){
            const array = []
            this.each(node => {
                if(array.indexOf(node.parentNode) === -1){
                    array.push(node.parentNode)
                }
            })
            return jQuery(array)
        },
        children(){
            const array = []
            this.each((node)=>{
                // 上课的时候这段代码是复制的，复制错了，现已改正
                array.push(...node.children)

            })
            return jQuery(array)
        },
        print(){
            console.log(elements);
        },
        addClass(className){
            for(let i=0; i<elements.length;i++){
                elements[i].classList.add(className)
            }
            return this
        },
    }
}