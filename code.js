function convertToAdjList(adjMatrix) {
    // initialize an empty list
    adjList = [];

    // loop through each row
    for (let i = 0; i < adjMatrix.length; i++) {
        // initialize each element in the list to an empty list
        adjList[i] = [];
        // loop through each column of current row (each element)
        for (let j = 0; j < adjMatrix[i].length; j++) {
            // if element is one, edge exists
            if (adjMatrix[i][j] == 1) {
                // push index of column j onto list at index of row i
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}

function convertToAdjMatrix(adjList) {
    // yeah chatGPT wrote these 2 lines, I knew I needed to set up an length by length filled with 0s but was unsure of syntax
    let n = adjList.length
    let adjMatrix = Array.from({ length: n }, () => Array(n).fill(0));

    // loop over rows in list
    for (let i = 0; i < adjList.length; i++) {
        // loop over all elements in column at row i
        for (let j = 0; j < adjList[i].length; j++) {
            // at row index i, and index contained at current row i column j, insert 1 into matrix
            adjMatrix[i][adjList[i][j]] = 1;
        }
    }

    return adjMatrix;
}
