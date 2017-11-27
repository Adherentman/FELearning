function DoublyLinkedList(){
  let Node = function(element){
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null;

  this.insert = function(position, element){
    if(position >= 0 && position <= length){
      let node = new Node(element),
      current,
      previous,
      index = 0;

      if(position === 0){
        if(!head){                                                          //{1}
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node;                                              //{2}
          head = node;
        }
      } else if(position === length){
        current = tail;                                                     //{3}
        current.next = node;
        node.prev = current;
        tail = node;        
      } else {
        while(index++ < position){                                          //{4}
          previous = current;
          current = current.next;
        }
        node.next = cuurent;                                                //{5}
        previous.next = node;

        current.prev = node;
        node.prev = previous;
      }
      length++;

      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function(position){

    if(position >-1 && position < length){
      let cuurent = head,
      previous,
      index = 0;

      if(position === 0){
        head = current.next;                                                  //{1}

      if(length === 1){                                                     //{2}
        tail = null;
      } else {
        head.prev = null;                                                     //{3}
      }
    } else if(position === length-1){ //最后一项
      current = tail;                                                         //{4}
      tail = current.prev;
      tail.next = null;
    } else {
      while(index++ < position){                                              //{5}
        previous = current;
        current = current.next;
      }

      //将previous与current的下一项链接起来---跳过current
      previous.next = current.next;                                           //{6}
      current.next.prev = previous;
    }
    length--;
    
    return current.element;
  } else{
    return null;
    }
  };
}