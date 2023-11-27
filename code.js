function allPairsShortestPaths(graph) {
	var distances = []
	var graphKeys=Object.keys(graph)
	for (var i=0; i<graphKeys.length; i++){
		distances[graphKeys[i]] = [];
		for (var j=0; j<graphKeys.length; j++){
			distances[graphKeys[i]][graphKeys[j]]=Infinity
			if (i==j){
				distances[graphKeys[i]][graphKeys[j]]=0
			}
		}
	}
	for (var i=0; i<graphKeys.length; i++){
		individualKeys=Object.keys(graph[graphKeys[i]])
		//console.log(individualKeys.length)
		for (var j=0; j<individualKeys.length; j++){
			distances[graphKeys[i]][individualKeys[j]] = graph[graphKeys[i]][individualKeys[j]]
		}
	}
	
	for (var k=0; k<graphKeys.length; k++){
		for (var i=0; i<graphKeys.length; i++){
			for (var j=0; j<graphKeys.length; j++){
				if (distances[graphKeys[i]][graphKeys[j]] > distances[graphKeys[i]][graphKeys[k]] + distances[graphKeys[k]][graphKeys[j]]){
					distances[graphKeys[i]][graphKeys[j]] = distances[graphKeys[i]][graphKeys[k]] + distances[graphKeys[k]][graphKeys[j]]
				}
			}
		}
	}

	return distances;
}

var agraph = {'foo': {'boo': 7, 'd': 4},
    'boo': {'e': 3},
    'd': {'bar': 4},
    'e': {'foo': 1},
    'bar': {'foo': 2}};
console.log(allPairsShortestPaths(agraph))
