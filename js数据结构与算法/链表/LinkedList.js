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
    this.insert = function(position, element) {};                                   //向列表的特定位置插入一个新的项
    this.removeAt = function(position) {};                                          //从列表中移除一项
    this.remove = function(element) {};                                             //返回元素在列表中的索引，如果列表中没有该元素则返回 -1。
    this.indexOf = function(element) {};                                            //从列表的特定位置移除一项
    this.isEmpty = function() {};                                                   //如果链表中不包含任何元素，返回true。如果链表长度大于0则返回false
    this.size = function() {};                                                      //返回链表包含的元素个数。
    this.getHead = function() {};                                                   //拿到第一个值
    this.toString = function() {};                                                  //让其只输出元素的值
    this.print = function() {};                                                     //打印这个链表
}