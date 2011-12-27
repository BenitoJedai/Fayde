﻿List.prototype = new Object;
List.prototype.constructor = List;
List.prototype._Count = 0;
List.prototype._Head = null;
List.prototype._Tail = null;
function List() {
}
List.prototype.First = function () {
    return this._Head;
};
List.prototype.Last = function () {
    return this._Tail;
};
List.prototype.IsEmpty = function () {
    return !this._Head;
};
List.prototype.Prepend = function (node) {
    node.Next = this._Head;
    node.Previous = null;
    if (this._Head)
        this._Head.Previous = node;
    else
        this._Tail = node;
    this._Head = node;
    this._Count++;
};
List.prototype.Append = function (node) {
    node.Previous = this._Tail;
    node.Next = null;
    if (this._Tail)
        this._Tail.Next = node;
    else
        this._Head = node;
    this._Tail = node;
    this._Count++;
};
List.prototype.Remove = function (node) {
    if (node.Previous)
        node.Previous.Next = node.Next;
    else
        this._Head = node.Next;

    if (node.Next)
        node.Next.Previous = node.Previous;
    else
        this._Tail = node.Previous;

    node.Previous = null;
    node.Next = null;

    this._Count--;
};
List.prototype.InsertBefore = function (node, before) {
    if (before == null) {
        this.Append(node);
        return;
    }

    node.Next = before;
    node.Previous = before.Previous;

    if (before.Previous)
        before.Previous.Next = node;
    else
        this._Head = node;

    before.Previous = node;
    this._Count++;
};

Node.prototype = new Object;
Node.prototype.constructor = Node;
Node.prototype.Previous = null;
Node.prototype.Next = null;
function Node() {
}

UIElementNode.prototype = new Node;
UIElementNode.prototype.constructor = UIElementNode;
function UIElementNode(/* UIElement */element) {
    this.UIElement = element;
}