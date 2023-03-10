//App
function App() {
  return (
    <div>
      <Navbar />
      <Welcomebanner />
      <Content />
    </div>
  );
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightsteelblue;
  height: 200px;
  font-size: 2rem;
`;
const Welcomebanner = () => {
  const [text, setText] = React.useState("Welcome Message");

  return (
    <Banner onClick={() => setText("Have a Good Time!")}>
      <h2>{text}</h2>
    </Banner>
  );
};

//Navbar
const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: lightgray;
  height: 50px;
  padding-left: 4vw;
  padding-right: 4vw;
`;

const Menu = styled.div`
  display: none;
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    position: relative;
    background-color: transparent;
    width: fit-content;
    height: 50px;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 40%;
  height: 100%;
  background-color: white;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;
const Hamburger = (props) => {
  if (props.toggled) {
    return <span class="material-icons">close</span>;
  } else {
    return <span class="material-icons">menu</span>;
  }
};

const HamburgerDiv = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  display: block;
  cursor: pointer;
  width: 50px;
  @media screen and (min-width: 800px) {
    display: none;
  }
`;

const H1 = styled.h1`
  font-size: 20px;
  margin-right: auto;
`;

const Li = styled.li`
  list-style-type: none;
  padding-left: 4em;
  padding: 20px;
`;
const MakeMenu = () => {
  const menuList = ["item 1", "item 2", "item 3", "item 4"];

  return menuList.map((item) => <Li>{item}</Li>);
};

const Mobilemenu = (props) => {
  if (props.toggled === false) {
    return "";
  } else {
    return (
      <MobileMenu>
        <MakeMenu />
      </MobileMenu>
    );
  }
};

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Header>
      <H1>Website Title/Logo</H1>
      <Menu>
        <MakeMenu />
      </Menu>
      <Mobilemenu toggled={isOpen} />
      <HamburgerDiv onClick={() => setOpen((current) => !current)}>
        <Hamburger toggled={isOpen} />
      </HamburgerDiv>
    </Header>
  );
};

//Content
const Container = styled.div`
  text-align: center;
  margin: 1em;
  font-size: 16px;
  box-sizing: border-box;
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: auto;
  }
`;

const Column = styled.div`
  padding: 20px;
  margin: 10px;
  background: slategray;
  height: 200px;
  font-size: 1rem;
  @media screen and (orientation: landscape), screen and (min-width: 500px) {
    flex: 1 42.18%;
  }
`;
const Columns = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (orientation: landscape), screen and (min-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
const Button = styled.button`
  border: none;
  background-color: rgb(223, 239, 255);
  font-size: 1rem;
  padding: 20px;
`;
const MakeContent = () => {
  const columnList = [
    "Content Box 1",
    "Content Box 2",
    "Content Box 3",
    "Content Box 4",
  ];

  return (
    <Columns>
      {columnList.map((col) => (
        <Column>{col}</Column>
      ))}
    </Columns>
  );
};

const AddColumns = (props) => {
  if (props.add) {
    return <MakeContent />;
  } else {
    return "";
  }
};

const Content = () => {
  const [add, setAddColumns] = React.useState(false);

  return (
    <Container>
      <h3>Section title</h3>
      <MakeContent />
      <Button onClick={() => setAddColumns(true)}>Call to Action</Button>
      <AddColumns add={add} />
    </Container>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
