function convertToAdjList(adjMatrix) {
    adjList = [];

    if (adjMatrix == []) {
        return [];
    }
    for (let i = 0; i < adjMatrix.length; i++) {
        adjList[i] = [];
        for (let j = 0; j < adjMatrix[i].length; j++) {
            if (adjMatrix[i][j] == 1) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}
