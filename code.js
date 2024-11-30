function convertToAdjList(adjMatrix) {
    adjList = [];
    if (!adjMatrix || adjMatrix.length === 0) {
        return [];
    }
    for (let i = 0; i < adjMatrix.length; i++) {
        for (let j = 0; j < adjMatrix[j].length; j++) {
            if (adjMatrix[i][j] == 1) {
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}
