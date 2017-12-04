function Set() {
  let items = {};

  //如果值在集合中，返回true，否则返回false
  this.has = function(value) {
    return items.hasOwnProperty(value);
  };

  //向集合添加一个新的项
  this.add = function(value) {
    if(!this.has(value)){
      items[value] = value;     //{1}
      return true;
    }
    return false;
  };

  //从集合移除一个值
  this.remove = function(value) {
    if(this.has(value)){
      delete items[value];
      return true;
    }
    return false;
  };

  this.clear = function(){
    items = {};
  };

  this.size = function(value){
    return Object.keys(items).length;     //{4}
  };

  this.values = function(){
    let values = [];
    for(let i = 0, keys= Object.keys(items); i<keys.length; i++){
      values.push(items[keys[i]]);
    }
    return values;
  };

  //并集      返回一个包含两个集合中所有元素的新集合
  this.union = function(otherSet){
    let unionSet = new Set();           //{1}

    let values = this.values();         //{2}
    for(let i =0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    values = otherSet.values();         //{3}
    for(let i=0; i<values.length; i++){
      unionSet.add(values[i]);
    }

    return unionSet;
  };

  //交集  返回一个包含两个集合中共有元素的新集合
  this.intersection = function(otherSet){
    let intersectionSet = new Set();          //{1}

    let values = this.values();
    for(let i = 0; i<values.length; i++){     //{2}
      if(otherSet.has(values[i])){            //{3}
        intersectionSet.add(values[i]);       //{4}
      }
    }

    return intersectionSet;
  };

  //差集  返回一个包含所有存在于第一个集合且不存在于第二个集合的元素的新集合
  


}