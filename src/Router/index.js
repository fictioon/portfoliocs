export default class Router {
  constructor(routes) {
    this.routes = routes
    this.navigate(location.pathname, false)
  }

  navigate(path, push) {
    this.push = push
    this.resolve(this.routes, path)
  }

  resolve(routes, path) {
    const pathSplit = path.split('/')
    console.log(pathSplit)

    if (pathSplit.length < 3) {
      if (this.push) return history.pushState({}, '', path)
      if (routes[path]) return routes[path].action()
    }

    if (pathSplit[1] === 'caso') {
      const id = pathSplit[2]
      if (this.push) return history.pushState({}, '', path)
      return routes['/caso/id'].action(id)
    }

    this.error404(routes['/'])
  }

  error404(route) {
    if (this.push) {
      history.pushState({}, '', '/')
    }
    route.action()
    return
  }
}
