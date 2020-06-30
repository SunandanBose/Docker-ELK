#Day1

##What is elasticsearch?
>Elasticsearch is an distributed, open source search used for all type of data.

##How is elasticsearch faster than normal search?
>Elasticsearch is fast as compared to other search because, instead of searching
>words it searches for indexes.
>For example : 
>If we want to search a word in a book. We refer to the Word Reference at the back
>of the book, rather than searching for the word in each page.
>Similarly, Elasticsearch creates an inverted index, with the help of 
>Apache Lucene. 
>Inverted index basically inverts a page centric data structure(pages->word) to a 
>word centric data structure(word -> pages)

##How Elastic search represents data?
>A **Document** is the unit of search and index.
>An index can consists of one or more Document and a Document can consist of one or
>more fields.
>A document is a JSON document which is stored in Elasticsearch. It is like a row in
>a table in a relational database. Each document is stored in an index and has a type and an id.
>A document is a JSON object (also known in other languages as a hash / hashmap / 
>associative array) which contains zero or more fields, or key-value pairs.

##What is index pattern?
>An index pattern tells Kibana which Elasticsearch indices contain the data that you want to
>work with. Once you create an index pattern, you're ready to: Interactively explore your data 
>in Discover. Analyze your data in charts, tables, gauges, tag clouds, and more in Visualize.


##Why did elastic search create two index?
>Filebeat has designed index templates in which, we can define maping to determine how **fields**
>can be analyzed. Default index template of filebeat says it writes events to indices named 
>filebeat-6.7.2-yyyy.MM.dd, where yyyy.MM.dd is the date when the events were indexed.
>Filebeat sends the events to elasticsearch refrencing to the index name it created
>Elasticsearch then processes the events it recieved from FileBeat to create Document.
>*[Note : Files, Filebeat and Elastic search are all seperate entities.]*

##DSL
A domain-specific language is a computer language specialized to a particular application domain.


##Reference
https://www.elastic.co/guide/en/elasticsearch/reference/current/glossary.html#:~:text=document,a%20type%20and%20an%20id.
http://www.elasticsearchtutorial.com/basic-elasticsearch-concepts.html
https://www.elastic.co/guide/en/beats/filebeat/6.7/filebeat-template.html

