class LinkedListNode {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
      }
    }


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }



//find(значение): принимает значение и находит первый узел с таким же значением;
find(value) {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }
  
    let currentNode = this.head;
  
    // Перебираем все узлы в поиске значения.
    while (currentNode) {
      // Если указано значение, пробуем сравнить его по значению.
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
  
      // Перематываем на один узел вперед.
      currentNode = currentNode.next;
    }
  
    return null;
  }


//prepend(значение): принимает значение и создаёт новый узел с этим значением, помещая его в начало связного списка;
prepend(value) {
    // Создаём новый узел, который будет новым head,
    // при создании передаем второй аргумент, который указывает
    // что его "next" будет текущий head,
    // так как новый узел будет стоять перед текущем head.
    const newNode = new LinkedListNode(value, this.head);
  
    // Переназначаем head на новый узел
    this.head = newNode;
  
    // Если ещё нет tail, делаем новый узел tail.
    if (!this.tail) {
      this.tail = newNode;
    }
  
    // Возвращаем весь список.
    return this;
  }







  //append(значение): принимает значение и создаёт новый узел с этим значением, помещая его в конец связного списка;
  append(value) {
    // Создаём новый узел.
    const newNode = new LinkedListNode(value);
  
    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
  
      return this;
    }
  
    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.
    this.tail.next = newNode;
  
    // Переназначаем tail на новый узел.
    this.tail = newNode;
  
    return this;
  }




  //delete(значение): принимает значение и удаляет все узлы, которые имеют указаное значение;
  delete(value) {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }
  
    let deletedNode = null;
  
    // Если head должен быть удален, то делаем следующий узел новым head.
    while (this.head && this.head.value === value) {
      deletedNode = this.head;
  
      // Переназначаем следующий за head узел на новый head.
      this.head = this.head.next;
    }
  
    let currentNode = this.head;
  
    // Если следующий узел должен быть удален,
    // делаем узел через один, следующим для проверки.
    // Перебираем все узлы и удаляем их, если их значение равно указанному.
    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          // Перезаписываем, чтобы узел через один стал следующим узлом.
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }
  
    // Проверяем, должен ли tail быть удален.
    // Так как, если в цикле мы удаляем последний узел,
    // то с предпоследнего узла убираем только ссылку на него.
    // Поэтому делаем проверку на его удаление с "tail".
    if (this.tail && this.tail.value === value) {
      // в данном случае currentNode это или предпоследний узел или head.
      this.tail = currentNode;
    }
  
    return deletedNode;
  }



  //FromArray - принимает массив значений в качестве аргумента
  // и создаёт новые узлы из каждого элемента массива, по очереди добавляя их в конец списка.
  // Создаём новые узлы из массива и добавляем в конец списка.
  fromArray(values) {
    values.forEach(value => this.append(value));
  
    return this;
  }


// Изменение элемента
  change(value, newValue) {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }
  
    let currentNode = this.head;
  
    // Перебираем все узлы в поиске значения.
    while (currentNode) {
      // Если указано значение, пробуем сравнить его по значению.
      if (value !== undefined && currentNode.value === value) {
       value=newValue;
      }
  
      // Перематываем на один узел вперед.
      currentNode = currentNode.next;
    }
  
    return null;
  }




  // определение длинны списка
length() {
    const nodes = [];
  
    let currentNode = this.head;
  
    // Перебираем все узлы и добавляем в массив.
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
  
    // Возвращаем длинну массива.
    return nodes.length;
  }
}