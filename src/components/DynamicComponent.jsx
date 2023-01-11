function Container() {
  return (
    <DynamicComponent
      src="https://images.unsplash.com/photo-1673372392864-f600f68db56c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Alt "
    />
  )
}

function DynamicComponent(props) {
  return (
    <div>
      <div>
        <img src={props.src} alt={props.alt} />
      </div>
    </div>
  )
}

function DynamicComponentB(props) {
  const {src, alt} = props

  return (
    <div>
      <div>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

function DynamicComponentC({
  src,
  alt
}) {

  return (
    <div>
      <div>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}



export default DynamicComponent