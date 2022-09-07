const getId = () => {
  const path = location.pathname
  const pathSplit = path.split('/')
  const id = pathSplit[2]

  return id
}

export default getId
