# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

An adjacency matrix for a graph is of size |V| * |V| (with |V| meaning number if vertices). Since the algorithm has an outer loop over all the rows, and an inner loop over each row in each column, this gives us a time complexity of (|V|<sup>2</sup>). Which makes sense because it iterates over every element in the |V| * |V| matrix.

My bonus algorithm works over a list of size |V| * |E| (with |E| meaning number of edges). The outer loop iterates over each row, which corresponds to each vertex, and the inner loop iterates over every element in each column, which corresponds to every edge connected to each vertex (totalling to every edge in the graph). Thus giving a time complexity of (|V| * |E|)

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
