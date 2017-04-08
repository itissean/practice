#include <iostream>

using namespace std;

class LinkedList {
  struct Node {
    int value;
    Node *next;
  };
public:
  LinkedList() {
    head = NULL;
  }
  void addValue(int value){
    Node *newNode = new Node();
    newNode->value = value;
    newNode->next = head;
    head = newNode;
  }
private:
  Node *head;
};

int main(int argc, char* argv[]) {
  LinkedList *ll = new LinkedList();
  return 0;
};
