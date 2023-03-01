// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Books {
    struct BookInfo { 
        uint book_id;
        string title;
        string author;
        bool on_english;
    }    
    mapping(uint => BookInfo) public books;

    event added(uint id, BookInfo new_book);

    function add(uint id, string memory title, string memory author, bool on_english) public {
        BookInfo memory new_book = BookInfo(id, title, author, on_english);
        books[id] = new_book;
        emit added(id, new_book);
    }

    event removed(uint id, BookInfo removed_book);

    function remove(uint id) public {
        BookInfo memory removed_book = books[id];
        delete books[id];
        emit removed(id, removed_book);
    }
}