import Resume from './Resume'
import Header from './Header'
import Footer from './Footer'

function App() {
    return (
        <div className="container mx-auto h-full flex flex-col">
            <Header />
            <Resume />
            <Footer />
        </div>
    )
}

export default App
