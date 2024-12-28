import Resume from './Resume'
import Header from './Header'
import Footer from './Footer'

function App() {
    return (
        <div className="container mx-auto h-full flex flex-col bg-platinum dark:bg-black_olive">
            <Header />
            <Resume />
            <Footer />
        </div>
    )
}

export default App
