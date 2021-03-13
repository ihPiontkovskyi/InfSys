document.addEventListener('DOMContentLoaded', () => {
    const pacmanMap = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
    const game = document.querySelector('.game')
    const squares = []
    let packmanPosition = 0;
    let objectPosition = 0;
    let pacmanVertex = 0;
    let objVertex = 0;

    let bfs_path = []
    let dfs_path = []
    let a_star_path = []
    let greedy_path = []
    let path = []

    let newWayCalculate = false

    let adj = []
    let source;
    let dest;

    let circleX = 0
    let circleY = 0
    let timeBFS = 0;
    let timeDFS = 0;
    let memoryBFS = 0;
    let memoryDFS = 0;

    const H = 17
    const W = 58

    function drawMap() {
        for (let i = 0; i < pacmanMap.length; i++) {
            const square = document.createElement('div')
            game.appendChild(square)
            squares.push(square)
            if (pacmanMap[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else {
                squares[i].classList.add('wall')
            }
        }
    }

    drawMap()

    let vertexes = [
        //A
        new Vertex("A0", 0, 0, 0),
        new Vertex("A1", 0, 3, 1),
        new Vertex("A2", 4, 3, 2),
        new Vertex("A3", 4, 0, 3),
        new Vertex("A4", 14, 0, 4),
        new Vertex("A5", 14, 3, 5),
        new Vertex("A6", 14, 4, 6),
        new Vertex("A7", 8, 4, 7),
        new Vertex("A8", 8, 7, 8),
        new Vertex("A9", 10, 7, 9),
        //B
        new Vertex("B0", 30, 0, 10),
        new Vertex("B1", 30, 3, 11),
        new Vertex("B2", 22, 3, 12),
        new Vertex("B3", 22, 11, 13),
        new Vertex("B4", 19, 11, 14),
        new Vertex("B5", 16, 11, 15),
        new Vertex("B6", 14, 11, 16),
        new Vertex("B7", 5, 11, 17),
        new Vertex("B8", 4, 11, 18),
        new Vertex("B9", 0, 11, 19),
        //C
        new Vertex("C0", 0, 14, 20),
        new Vertex("C1", 5, 14, 21),
        new Vertex("C2", 16, 14, 22),
        new Vertex("C3", 19, 14, 23),
        new Vertex("C4", 30, 14, 24),
        new Vertex("C5", 30, 12, 25),
        new Vertex("C6", 30, 11, 26),
        new Vertex("C7", 33, 12, 27),
        new Vertex("C8", 33, 14, 28),
        new Vertex("C9", 36, 14, 29),
        //D
        new Vertex("D0", 36, 12, 30),
        new Vertex("D1", 39, 12, 31),
        new Vertex("D2", 39, 11, 32),
        new Vertex("D3", 39, 14, 33),
        new Vertex("D4", 49, 14, 34),
        new Vertex("D5", 55, 14, 35),
        new Vertex("D6", 55, 11, 36),
        new Vertex("D7", 51, 11, 37),
        new Vertex("D8", 49, 11, 38),
        new Vertex("D9", 43, 11, 39),
        //E
        new Vertex("E0", 43, 3, 40),
        new Vertex("E1", 43, 0, 41),
        new Vertex("E2", 49, 0, 42),
        new Vertex("E3", 55, 0, 43),
        new Vertex("E4", 55, 3, 44),
        new Vertex("E5", 51, 3, 45),
        new Vertex("E6", 49, 3, 46),
        new Vertex("E7", 51, 8, 47),
        new Vertex("E8", 47, 8, 48),
        new Vertex("E9", 39, 0, 49),
        //F
        new Vertex("F0", 39, 3, 50),
        new Vertex("F1", 39, 9, 51),
        new Vertex("F2", 30, 9, 52),
    ]

    function generateRandomPosition() {
        let randomVertex = Math.ceil(Math.random() * vertexes.length - 1)
        return randomVertex
    }

    function setPackManPosition() {
        pacmanVertex = generateRandomPosition()
    }

    function setOBJECTPosition() {
        let randPos = generateRandomPosition()
        while (randPos === packmanPosition)
            randPos = generateRandomPosition()
        objVertex = randPos
    }

    function drawGameElements() {
        squares[packmanPosition].classList.remove('pacman')
        squares[objectPosition].classList.remove('object')
        setPackManPosition()
        setOBJECTPosition()
        packmanPosition = (vertexes[pacmanVertex].getX() + 1) + (vertexes[pacmanVertex].getY() + 1) * W
        objectPosition = (vertexes[objVertex].getX() + 1) + (vertexes[objVertex].getY() + 1) * W

        squares[packmanPosition].classList.add('pacman')
        squares[objectPosition].classList.add('object')
    }

    function addEdge(adj, a, b) {
        adj[a.getID()].push(b)
        adj[b.getID()].push(a)
    }

    function main() {

        for (let i = 0; i < vertexes.length; i++)
            adj.push([])
        {
            addEdge(adj, vertexes[0], vertexes[1])
            addEdge(adj, vertexes[0], vertexes[3])
            addEdge(adj, vertexes[1], vertexes[2])
            addEdge(adj, vertexes[3], vertexes[4])
            addEdge(adj, vertexes[3], vertexes[2])
            addEdge(adj, vertexes[4], vertexes[5])
            addEdge(adj, vertexes[4], vertexes[10])
            addEdge(adj, vertexes[2], vertexes[18])
            addEdge(adj, vertexes[18], vertexes[17])
            addEdge(adj, vertexes[18], vertexes[19])
            addEdge(adj, vertexes[19], vertexes[20])
            addEdge(adj, vertexes[20], vertexes[21])
            addEdge(adj, vertexes[21], vertexes[17])
            addEdge(adj, vertexes[17], vertexes[16])
            addEdge(adj, vertexes[16], vertexes[15])
            addEdge(adj, vertexes[16], vertexes[6])
            addEdge(adj, vertexes[5], vertexes[6])
            addEdge(adj, vertexes[6], vertexes[7])
            addEdge(adj, vertexes[7], vertexes[8])
            addEdge(adj, vertexes[8], vertexes[9])
            addEdge(adj, vertexes[15], vertexes[14])
            addEdge(adj, vertexes[14], vertexes[23])
            addEdge(adj, vertexes[14], vertexes[13])
            addEdge(adj, vertexes[21], vertexes[22])
            addEdge(adj, vertexes[22], vertexes[15])
            addEdge(adj, vertexes[10], vertexes[49])
            addEdge(adj, vertexes[10], vertexes[11])
            addEdge(adj, vertexes[11], vertexes[12])
            addEdge(adj, vertexes[12], vertexes[5])
            addEdge(adj, vertexes[12], vertexes[13])
            addEdge(adj, vertexes[13], vertexes[26])
            addEdge(adj, vertexes[23], vertexes[24])
            addEdge(adj, vertexes[24], vertexes[25])
            addEdge(adj, vertexes[25], vertexes[26])
            addEdge(adj, vertexes[25], vertexes[27])
            addEdge(adj, vertexes[27], vertexes[28])
            addEdge(adj, vertexes[28], vertexes[29])
            addEdge(adj, vertexes[29], vertexes[30])
            addEdge(adj, vertexes[30], vertexes[31])
            addEdge(adj, vertexes[32], vertexes[31])
            addEdge(adj, vertexes[31], vertexes[33])
            addEdge(adj, vertexes[33], vertexes[34])
            addEdge(adj, vertexes[34], vertexes[35])
            addEdge(adj, vertexes[34], vertexes[38])
            addEdge(adj, vertexes[35], vertexes[36])
            addEdge(adj, vertexes[36], vertexes[37])
            addEdge(adj, vertexes[37], vertexes[38])
            addEdge(adj, vertexes[37], vertexes[47])
            addEdge(adj, vertexes[47], vertexes[48])
            addEdge(adj, vertexes[47], vertexes[45])
            addEdge(adj, vertexes[45], vertexes[44])
            addEdge(adj, vertexes[45], vertexes[46])
            addEdge(adj, vertexes[44], vertexes[43])
            addEdge(adj, vertexes[43], vertexes[42])
            addEdge(adj, vertexes[42], vertexes[46])
            addEdge(adj, vertexes[41], vertexes[42])
            addEdge(adj, vertexes[49], vertexes[41])
            addEdge(adj, vertexes[41], vertexes[40])
            addEdge(adj, vertexes[40], vertexes[46])
            addEdge(adj, vertexes[40], vertexes[39])
            addEdge(adj, vertexes[39], vertexes[38])
            addEdge(adj, vertexes[39], vertexes[32])
            addEdge(adj, vertexes[11], vertexes[50])
            addEdge(adj, vertexes[50], vertexes[49])
            addEdge(adj, vertexes[11], vertexes[52])
            addEdge(adj, vertexes[52], vertexes[26])
            addEdge(adj, vertexes[52], vertexes[51])
            addEdge(adj, vertexes[51], vertexes[32])
            addEdge(adj, vertexes[50], vertexes[51])
        }
        source = vertexes[pacmanVertex]
        dest = vertexes[objVertex]
    }

    function drawCircle() {
        let elem = document.getElementById('circle')
        let y = (vertexes[pacmanVertex].getY() + 1) * 20
        let x = (vertexes[pacmanVertex].getX() + 1) * 20
        let const_header = 80 + 20 + 2
        circleX = x + 10
        circleY = y + const_header
        elem.style.top = circleY + 'px'
        elem.style.left = circleX + 'px'
    }


    // BTN START
    // document.getElementById("btn-start").addEventListener("click", function (e) {
    //     let elem = document.getElementById("circle")
    //     let pos = packmanPosition
    //     main()
    //     let bfs_info_block = document.getElementById('bfs-info')
    //     let dfs_info_block = document.getElementById('dfs-info')
    //     let bfs_info = "<h4>TIME ::" + `${timeBFS}` + " milliseconds </h4>"
    //     // debugger
    //     bfs_info += "<h4>STEPS ::" + `${bfs_path.length - 1}` + " </h4>"
    //     bfs_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
    //     bfs_info_block.innerHTML = bfs_info
    //
    //     let dfs_info = "<h4>TIME ::" + `${timeDFS}` + " milliseconds </h4>"
    //     dfs_info += "<h4>STEPS ::" + `${dfs_path.length - 1}` + " </h4>"
    //     dfs_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
    //     dfs_info_block.innerHTML = dfs_info
    //     setInterval(() => {
    //         drawMoving(bfs_path)
    //     }, 1000)
    //
    //     console.log(bfs_path)
    //     debugger
    //
    //     function drawMoving(path) {
    //         if (path.length !== 1) {
    //             let pos1 = path.shift()
    //             let pos2 = path[0]
    //             let y = pos2.getY() - pos1.getY()
    //             let x = pos2.getX() - pos1.getX()
    //             if (y !== 0) {
    //                 if ((y + 1) * 20 + 102 === circleY) {
    //                     drawMoving(path)
    //                 } else {
    //                     circleY += (y) * 20
    //                     elem.style.top = circleY + 'px'
    //                 }
    //             } else {
    //                 if ((x + 1) * 20 + 10 === circleX) {
    //                     drawMoving(path)
    //                 } else {
    //                     circleX += (x) * 20
    //                     elem.style.left = circleX + 'px'
    //                 }
    //             }
    //         } else {
    //             clearInterval()
    //         }
    //     }
    // })

    function drawMoving(path, elem) {
        if (path.length !== 1 && path.length > 0) {
            let pos1 = path.shift()
            let pos2 = path[0]
            console.log("pos2 :: " + typeof pos2)
            let y = pos2.getY() - pos1.getY()
            let x = pos2.getX() - pos1.getX()
            if (y !== 0) {
                if ((y + 1) * 20 + 102 === circleY) {
                    drawMoving(path)
                } else {
                    circleY += (y) * 20
                    elem.style.top = circleY + 'px'
                }
            } else {
                if ((x + 1) * 20 + 10 === circleX) {
                    drawMoving(path)
                } else {
                    circleX += (x) * 20
                    elem.style.left = circleX + 'px'
                }
            }
        } else {
            clearInterval()
        }
    }

    function addBFS2Statistics() {
        let bfs_info_block = document.getElementById('bfs-info')
        let bfs_info = "<h4>TIME ::" + `${timeBFS}` + " milliseconds </h4>"
        bfs_info += "<h4>STEPS ::" + `${bfs_path.length - 1}` + " </h4>"
        bfs_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
        bfs_info_block.innerHTML = bfs_info
    }

    function addDfs2Statistics() {
        let dfs_info_block = document.getElementById('dfs-info')
        let dfs_info = "<h4>TIME ::" + `${timeDFS}` + " milliseconds </h4>"
        dfs_info += "<h4>STEPS ::" + `${dfs_path.length - 1}` + " </h4>"
        dfs_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
        dfs_info_block.innerHTML = dfs_info
    }

    function addAStar2Statistics() {
        let a_star_info_block = document.getElementById('a_star-info')
        let a_star_info = "<h4>TIME ::" + `${timeDFS}` + " milliseconds </h4>"
        a_star_info += "<h4>STEPS ::" + `${a_star_path.length - 1}` + " </h4>"
        a_star_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
        a_star_info_block.innerHTML = a_star_info
    }

    function addGreedy2Statistics() {
        let greedy_info_block = document.getElementById('greedy-info')
        let greedy_info = "<h4>TIME ::" + `${timeDFS}` + " milliseconds </h4>"
        greedy_info += "<h4>STEPS ::" + `${greedy_path.length - 1}` + " </h4>"
        greedy_info += "<h4>MEMORY ::" + `${memoryBFS}` + " </h4>"
        greedy_info_block.innerHTML = greedy_info
    }

    function addStatisticsInfo() {
        addBFS2Statistics()
        addDfs2Statistics()
        addAStar2Statistics()
        addGreedy2Statistics()
    }

    // BTN RANDOM
    document.getElementById("btn-random").addEventListener("click", function (e) {
        bfs_path = []
        dfs_path = []
        a_star_path = []
        greedy_path = []
        adj = []

        generateRandomPosition()
        drawGameElements()
        drawCircle()
        newWayCalculate = true
    });

    // BTN START
    document.getElementById("btn-start").addEventListener("click", function (e) {
        console.log(1)

        let modal = document.getElementById("modal-window-algorithms")
        main()
        drawCircle()
        if (newWayCalculate) {
            bfs_path = findShortestDist_BFS(adj, source, dest, adj.length)
            dfs_path = findDist_DFS(adj, source, dest)
            a_star_path = search_a_algorithm(adj, source, dest)
            greedy_path = dijkstra_algorithm(adj, vertexes, source, dest)
            addStatisticsInfo()
        }

        modal.style.display = "block"
        let btn_bfs = document.getElementById("btn_bfs")
        let btn_dfs = document.getElementById("btn_dfs")
        let btn_a_star = document.getElementById("btn_a-star")
        let btn_greedy = document.getElementById("btn_greedy")
        let elem = document.getElementById("circle")

        btn_bfs.addEventListener("click", function (e) {
            modal.style.display = "none";
            path = [...bfs_path]
        })
        btn_dfs.addEventListener("click", function (e) {
            modal.style.display = "none";
            path = [...dfs_path]
        })
        btn_a_star.addEventListener("click", function (e) {
            modal.style.display = "none";
            path = [...a_star_path]
        })
        btn_greedy.addEventListener("click", function (e) {
            modal.style.display = "none";
            path = [...greedy_path]
        })

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        newWayCalculate = false

        setInterval(() => {
            drawMoving(path, elem)
        }, 1000)
        console.log(`bfs_path.length :: ${bfs_path.length}`)
    })

    //BTN STATISTICS
    document.getElementById("btn-statistics").addEventListener("click", function (e) {
        let modal = document.getElementById("modal-window")

        modal.style.display = "block";

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    })
})
