class DoublyLinkedListNode {
    constructor(value, next = null, previous = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
    }
  
    toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
    }
  }


  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }


   // Find метод принимает значение в качестве аргумента, находит первый узел с таким же значением и возвращает его.
    find(value) {
        // Если нет head - список пуст.
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

 //     Prepend метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в начало связного списка.

prepend(value) {
  // Создаём новый узел, который будет новым head,
  // при создании передаём второй аргумент, который указывает
  // что его "next" будет текущий head,
  // так как новый узел будет стоять перед текущем head.
  const newNode = new DoublyLinkedListNode(value, this.head);

  // Если есть head, то он больше не будет head.
  // Поэтому, его ссылку на предыдущий узел (previous) меняем на новый узел.
  if (this.head) {
    this.head.previous = newNode;
  }

  // Переназначаем head на новый узел
  this.head = newNode;

  // Если ещё нет tail, делаем новый узел tail.
  if (!this.tail) {
    this.tail = newNode;
  }

  // Возвращаем весь список.
  return this;
}

//Append метод принимает значение в качестве аргумента и создаёт новый узел с этим значением, помещая его в конец связного списка.

append(value) {
  // Создаём новый узел.
  const newNode = new DoublyLinkedListNode(value);

  if (this.tail) {
    // Присоединяем новый узел к концу связного списка.
    this.tail.next = newNode;
  }

  // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
  // так как новый узел будет теперь последним.
  newNode.previous = this.tail;

  // Переназначаем tail на новый узел.
  this.tail = newNode;

  // Если ещё нет head, делаем новый узел head.
  if (!this.head) {
    this.head = newNode;
  }

  return this;
}

//Delete метод принимает значение в качестве аргумента, удаляет все узлы, которые имеют указаное значение и возвращает последний удалённый узел.

delete(value) {
  // Если нет head значит список пуст.
  if (!this.head) {
    return null;
  }

  let deletedNode = null;
  let currentNode = this.head;

  // Перебираем все узлы и удаляем их, если их значение равно указанному.
  while (currentNode) {
    if (currentNode.value === value) {
      // Сохраняем значение текущего узла как удаленное.
      deletedNode = currentNode;

      // Если head должен быть удален,
      if (deletedNode === this.head) {
        // то делаем следующий узел новым head
        this.head = deletedNode.next;

        // Меняем в новом head ссылку (previous) на null.
        if (this.head) {
          this.head.previous = null;
        }

        // Если все узлы в списке имеют одинаковое значение,
        // которое передается в качестве аргумента,
        // тогда все узлы будут удалены. Поэтому tail необходимо обновить.
        if (deletedNode === this.tail) {
          this.tail = null;
        }
      } else if (deletedNode === this.tail) {
        // Если tail должен быть удален, -
        // меняем tail на предпоследний узел, который станет новым хвостом.
        this.tail = deletedNode.previous;
        // Обновляем ссылку next в новом хвосте.
        this.tail.next = null;
      } else {
        // Если средний узел будет удален, -
        // сохраняем ссылку на предыдущий элемент,
        const previousNode = deletedNode.previous;
        // и сохраняем ссылку на следующий элемент.
        const nextNode = deletedNode.next;
        // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
        // чтобы они больше не ссылались на удаленный узел.
        previousNode.next = nextNode;
        nextNode.previous = previousNode;
      }
    }

    // Перематываем на один узел вперёд.
    currentNode = currentNode.next;
  }

  return deletedNode;
}


find(value) {
    // Если нет head - список пуст.
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


// Изменение элемента
change(value, newValue) {
    // Если нет head - список пуст.
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




  // Возвращаем размер списка
  lenght() {
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