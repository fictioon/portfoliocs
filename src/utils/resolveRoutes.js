const resolveRoutes = (route) => {
  let validRoute = route === '/' ? route : `/${route}`
  return validRoute
}

export default resolveRoutes
