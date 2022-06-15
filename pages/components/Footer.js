
function Footer(props) {
  return (
    <footer className = 'py-5 px-5 bg-emerald-500 fixed bottom-0 w-screen flex justify-between'>
      <p>{props.counter} Locatins Worldwide</p>
      <p>&copy; 2021</p>
      
    </footer>
  )
}

export default Footer