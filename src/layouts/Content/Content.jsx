


import "./Content.scss"


export default (props) => {
  const { children } = props
  console.log(children);
  

  return <main className="content">{children}</main>
}



