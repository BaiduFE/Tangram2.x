<?php 
	$p = $_POST['var'];
	$book = "
	{
    'name' :'Your Library',
    '@open' : '2007-17-7',
    'address' : {
        'city' : 'Springfield',
        'zip' : '12345',
        'state' : 'MI',
        'street' : 'Mockingbird Lane'
    },
    'books':[{
        'title' : 'Harry Potter',
        'isbn'  : '1234-1234',
        'category' : 'Childrens',
        'available' : '3',
        'chapters' : [ 'Chapter 1', 'Chapter 2' ]
        },
        {
        'title' : 'Brief History of time',
        'isbn'  : '1234-ABCD',
        'category' : 'Science',
        'chapters' : [ '1', '2' ]
        },
        {
        'title' : 'Lord of the Rings',
        'isbn'  : '1234-PPPP',
        'category' : 'Fiction',
        'chapters' : [ 'Section 1', 'Section 2' ]
    }],
    'categories' : [
        {'name':'Childrens', 'description':'Childrens books'},
        {'name':'Science', 'description':'Books about science'},
        {'name':'Fiction', 'description':'Fiction books'}
    ]
}";
	if($p == 'title'){
		echo $book;
	}
?>
