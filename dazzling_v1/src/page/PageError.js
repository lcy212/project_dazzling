export default function PageError(){

  const errorStyle ={
    width:'100%', height:'500px', paddingTop:'100px'
  }

  return (
    <div style={errorStyle}>
      <h2>404 error</h2>
      <p>찾을 수 없는 페이지입니다.</p>
    </div>
  )
}