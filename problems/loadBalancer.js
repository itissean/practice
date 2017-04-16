/**
 * Create a load balancer that runs in O(n)
 */
const LoadBalancer = {
  servers: 10, // Total number of servers
  busyServers: [0, 3, 5], // Servers in use
  getStatus() {
    let statusMap = new Map();
    let busy;
    let free;
    for (busy = 0; busy < this.busyServers.length; busy++) {
      statusMap.set(this.busyServers[busy], true);
    }
    for (free = 0; free < this.servers; free++) {
      if (typeof statusMap.get(free) === 'undefined') {
        statusMap.set(free, false);
      }
    }
    return statusMap;
  },
  getFreeServers() {
    const freeServers = [];
    this.getStatus().forEach((value, key, map) => {
      if (map.get(key) === true) freeServers.push(key);
    });
    return freeServers;
  },
  getRandomFreeServer() {
    const freeServers = this.getFreeServers();
    return freeServers[Math.floor(Math.random()*freeServers.length)];
  },
}

console.log(LoadBalancer.getRandomFreeServer());
