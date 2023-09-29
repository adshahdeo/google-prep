class Graph {
    constructor (arr) {
        this.graph = new Map();
        for (let el of arr) {
            this.addVertex(el);
        }
    }

    addVertex (vertex) {
        if (!vertex) {
            console.log('Invalid argument');
            return;
        }

        this.graph.set(vertex, []);
    }

    addEdge (src, dest) {
        
        if (!this.graph.has(src)) this.addVertex(src);
        if (!this.graph.has(dest)) this.addVertex(dest);

        this.graph.get(src).push(dest);
        this.graph.get(dest).push(src);
    }

    BFS (node) {
        let q = [node];
        let res = new Set();
        res.add(node)

        while(q.length) {
            let src = q.shift();
            res.add(src);
            if (this.graph.has(src)) {
                let destinations = this.graph.get(src);
                for (let dest of destinations) {
                    if (res.has(dest)) continue;
                    q.push(dest);
                }
            }
        }

        return [...res];
    }

    DFS (node, visited = new Set()) {
        const children = this.graph.get(node);
        const res = [node];
        visited.add(node)
        for (const child of children) {
            if (!visited.has(child)) {
                visited.add(child)
                res.push(...this.DFS(child, visited));
            }
        }
        return res;
    }

    findRouteBFS (src, dest) {
        let q = [src];
        let visited = new Set();
        visited.add(src)
        
        while (q.length) {
            const src = q.shift();
            const destinations = this.graph.get(src);

            for (const dst of destinations) {
                if (!visited.has(dst)) {
                    visited.add(dst);
                    q.push(dst);
                }

                if (dest === dst) {
                    console.log('found the route');
                    return [...visited];
                }
            }
        }

        console.log('route not found');
    }

    findRouteDFS (src, dest) {
        let stack = [src];
        let visited = new Set();
        visited.add(src);
        let route = [];
        while (stack.length) {
            let cur = stack.pop();
            route.push(cur);
            let neighbors = this.graph.get(cur);
            if (!neighbors) route.pop();
            for (const node of neighbors) {
                if (!visited.has(node)) {
                    visited.add(node);
                    stack.push(node);
                }
                if (node === dest) {
                    route.push(node);
                    return route;
                }
            }
        }

        return [];
    }

}



const airports = ['PHX', 'BKK', 'OKC', 'JFK', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM'];
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAS'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];

const graph = new Graph(airports);
routes.forEach((el) => graph.addEdge(...el));

// console.log(graph)
// console.log(graph.BFS('PHX'))
// console.log(graph.DFS('PHX'))
console.log(graph.findRouteBFS('PHX', 'HEL'))
console.log(graph.findRouteDFS('PHX', 'HEL'));

