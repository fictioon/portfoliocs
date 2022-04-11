export default class Router {
  constructor(routes) {
    this.routes = routes
    this.navigate(location.pathname)
  }

  navigate(path) {
    this.resolve(this.routes, path)
  }

  resolve(routes, path) {
    if (routes.length) {
      const queque = [{ routes, baseUrl: '' }]

      while (queque.length) {
        const currRute = queque.shift()

        for (const route of currRute.routes || []) {
          const fullpath = `${currRute.baseUrl}/${route.path}`

          if (fullpath === path) {
            history.pushState({}, '', path)
            route.action()
            return
          }
        }
        this.error404(routes[0])
      }
    }
  }

  error404(route) {
    history.pushState({}, '', '/')
    route.action()
    return
  }
}
