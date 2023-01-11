function Example() {
  return (
    <Wrapper>
      <h1>I am a child!</h1>
    </Wrapper>
  )
}

function Wrapper(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Wrapper