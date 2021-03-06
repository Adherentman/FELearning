function LinkedList(){
    let Node = function(element){
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    //向队列尾部添加一个新的项
    this.append = function(element) {
        let node = new Node(element),       //{1}
        current;                            //{2}

        if(head == null){                   //{3}
            head = node;
        } else {
            current = head;                 //{4}
            while (current.next) {
                current = current.next;
            }
            current.next = node;            //{5}
        }
        length++;                           //{6}
    };

    //向列表的特定位置插入一个新的项                   
    this.insert = function(position, element) {
        //检查越界值
        if(position >= 0 && position <= length){    //{1}
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if(position === 0){                 //在第一个位置添加
                node.next = current;            //{2}
                head = node;
            } else {
                while(index++ < position){      //{3}
                    previous = current;
                    current = current.next;
                }
                node.next = current;            //{4}
                previous.next = node;           //{5}
            }
            length++;                           //更新列表长度
            return true;
        } else {
            return false;                       //{6}
        }
    };
                        
    //从列表的特定位置移除一项
    this.removeAt = function(position) {
        if(position > -1 && position < length){     //{1}
            let current = head,                     //{2}  
            previous,                               //{3}
            index = 0;                              //{4}

            //移除第一项
            if(position === 0){                     //{5}
                head = current.next;    
            } else {
                while(index++ < position){          //{6}
                    previous = current;             //{7}
                    current = current.next;         //{8}
                }
            
            //将previous与current的下一项链接起来：跳过current，从而移除它
            previous.next = current.next;           //{9}
            }

            length--;                               //{10}

            return current.element;
        } else {
            return null;                            //{11}
        }
    };          

    //从列表移除一项
    this.remove = function(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    };          

    //返回元素在列表中的索引，如果列表中没有该元素则返回 -1。
    this.indexOf = function(element) {
        let current = head,                         //{1}
        index = -1;

        while (current) {
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    
    //如果链表中不包含任何元素，返回true。如果链表长度大于0则返回false
    this.isEmpty = function() {
        return length === 0;
    };      
    
    //返回链表包含的元素个数。
    this.size = function() {
        return length;
    };
    
    //拿到第一个值
    this.getHead = function() {
        return head;
    };                    

    //让其只输出元素的值
    this.toString = function() {
        let current = head,                         //{1}
        string = '';                                //{2}
        
        while(current){                             //{3}
            string += current.element + (current.next ? 'n' : '');      //{4}
            current = current.next;
        }
        return string;
    };
}