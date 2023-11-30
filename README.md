[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12679744&assignment_repo_type=AssignmentRepo)
# All Pairs Shortest Paths

In the lectures, we've seen Dijkstra's algorithm for finding the shortest paths
from a given vertex to all other vertices in the graph. We've also covered the
Floyd-Warshall algorithm for finding the shortest path between all *pairs* of
vertices. It works as follows:

Given a graph $G = (V, E)$ with weighted edges:
- initialize a $|V|\times|V|$ matrix `dist` to $\infty$
- for each vertex $v \in V$, `dist[v][v] = 0`
- for each edge $(u,v) = e \in E$, `dist[u][v] = weight((u,v))`
- for each vertex $k\in V$:
    - for each vertex $i\in V$:
        - for each vertex $j\in V$:
            - `if dist[i][j] > dist[i][k] + dist[k][j]:`
              `dist[i][j] = dist[i][k] + dist[k][j]`

Implement this algorithm, starting with the template I provided in `code.js`.
The function takes a weighted graph graph and returns the matrix with the
distances, as described above. You can choose any data structures you like for
the implementation. I have not provided any test code, but you can base yours on
test code from other exercises.

## Runtime Analysis

What is the worst-case time complexity ($\Theta$) of the algorithm? Add your
answer, including your reasoning, to this markdown file.  

**ANSWER**:  
To find the worst-case time complexity, we must first look at the steps that were  
taken. First off, we had to initialize a |V|*|V| matrix so that every slot contained  
infinity. This, of course, will take $|V|^2$ amount of time. While we do that, we also  
go ahead and turn the necessary vertexes into 0's, so that saves us a bit of time.  
Next up, we have to go through and initialize every edge that we currently have.  
Because we have to go through every single edge in order to do so, this will take  
|E| amount of time. Finally, we have the last for loops. This is a triple nested for  
loop, and each loop goes through every single one of the vertexes. As a result, this  
will take $|V|^3$ amount of time to complete.  
So, if we take all this info together, we find that the worst case runtime for this  
code would be $\Theta(|V|^2 + |E| + |V|^3)$ which simplified turns out to be  
$\Theta(|E| + |V|^3)$. However, this leads to an interesting exception... Because  
|E| can only ever be at *most* $|V|^2$, that means that it has no choice but to  
be a lower order term in this case. As a result, it goes away due to it being  
asymptotically insignificant and we get a true final answer of $\Theta(|V|^3)$  
Please let me know if my logic was off at all, and I will readily fix it. Thank you!
