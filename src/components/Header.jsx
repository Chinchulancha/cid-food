import NavBar from "./NavBar"

const Header = ({clicked, setClicked, handleClick}) => {
  return (
    <header className="">
        <NavBar clicked={clicked} setClicked={setClicked} handleClick={handleClick}/>
    </header>
  )
}

export default Header