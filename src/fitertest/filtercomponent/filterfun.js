export const filterfun = (item,filterFunc,allItem) =>{
    if(item==='সকল'){
        return allItem
    }
    return(filterFunc(item))
  }
