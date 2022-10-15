<script>
 
// A complete working javascript program
// to demonstrate all insertion methods
// on linked list
     var head; // head of list
 
    /* Linked list Node */
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }
 
    /* Inserts a new Node at front of the list. */
     function push(new_data) {
        /*
         * 1 & 2: Allocate the Node & Put in the data
         */
        var new_node = new Node(new_data);
 
        /* 3. Make next of new Node as head */
        new_node.next = head;
 
        /* 4. Move the head to point to new Node */
        head = new_node;
    }
 
    /* Inserts a new node after the given prev_node. */
     function insertAfter(prev_node , new_data) {
        /* 1. Check if the given Node is null */
        if (prev_node == null) {
            document.write(
            "The given previous node cannot be null"
            );
            return;
        }
 
        /*
         * 2 & 3: Allocate the Node & Put in the data
         */
         var new_node = new Node(new_data);
 
        /* 4. Make next of new Node as next of prev_node */
        new_node.next = prev_node.next;
 
        /* 5. make next of prev_node as new_node */
        prev_node.next = new_node;
    }
 
    /*
     * Appends a new node at the end.
       This method is defined inside LinkedList class
     * shown above
     */
     function append(new_data) {
        /*
         * 1. Allocate the Node & 2.
         Put in the data 3. Set next as null
         */
         var new_node = new Node(new_data);
 
        /*
         * 4. If the Linked List is empty,
         then make the new node as head
         */
        if (head == null) {
            head = new Node(new_data);
            return;
        }
 
        /*
         * 4. This new node is going to be the last node,
         so make next of it as null
         */
        new_node.next = null;
 
        /* 5. Else traverse till the last node */
        var last = head;
        while (last.next != null)
            last = last.next;
 
        /* 6. Change the next of last node */
        last.next = new_node;
        return;
    }
 
    /*
     * This function prints contents of linked list
     starting from the given node
     */
     function printList() {
var tnode = head;
        while (tnode != null) {
            document.write(tnode.data + " ");
            tnode = tnode.next;
        }
    }
 
    /*
     * Driver program to test above functions.
       Ideally this function should be in a
     * separate user class. It is kept here
     to keep code compact
     */
     
        /* Start with the empty list */
 
        // Insert 6. So linked list becomes 6->NUllist
        append(6);
 
        // Insert 7 at the beginning. So linked list becomes
        // 7->6->NUllist
        push(7);
 
        // Insert 1 at the beginning. So linked list becomes
        // 1->7->6->NUllist
        push(1);
 
        // Insert 4 at the end. So linked list becomes
        // 1->7->6->4->NUllist
        append(4);
 
        // Insert 8, after 7. So linked list becomes
        // 1->7->8->6->4->NUllist
        insertAfter(head.next, 8);
 
        document.write("\nCreated Linked list is: ");
        printList();
 
// This code contributed by gauravrajput1
 
</script>