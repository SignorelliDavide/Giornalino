import NavigationBar from "../components/NavigationBar";
import Container from 'react-bootstrap/Container';

function App() {
    return (
        <>
            <NavigationBar />
            <Container>
                <h1>Home</h1>
                <div>
                    <h1>Numero uno</h1>
                </div>
                <div>
                    <h1>Home</h1>
                    <div>
                        <h1>Numero uno</h1>
                    </div>
                </div>
            </Container>
        </>
    );

}

export default App;