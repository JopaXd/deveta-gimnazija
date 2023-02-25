import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Card from './Components/Card/Card'
import CardSection from './Components/CardSection/CardSection'
import Footer from './Components/Footer/Footer'

function App() {
    const [count, setCount] = useState(0)
    return (
    <div className="App">
        <Navbar/>
        <div className="app-main text-center flex justify-center items-center bg-no-repeat bg-cover h-screen">
            <div className="app-main-content">
                <img src="/image.png" className="logo pl-5 pb-20"/>
                <h1 className="text-4xl text-white font-bold">Девета Веоградска</h1> 
                <h1 className="text-4xl text-white font-bold">Гимназија</h1> 
            </div>
        </div>
        <div className="home-content mt-10 text-center">
           <h1 className="text-4xl font-bold text-blue-600">Pocetna</h1>
            <div className="card-container lg:flex block items-start mx-auto mt-10 max-w-7xl">
                <Card className="m-6" title="Poslednje Novosti">
                    <CardSection>
                            <p>
        lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.
                            </p>
                    </CardSection>
                    <CardSection>
                            <p>
        lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.
                            </p>
                    </CardSection>
                    <CardSection>
                            <p>
        lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum.
                            </p>
                    </CardSection>
                </Card>
                <Card className="m-6" title="Poslednje Novosti">
                        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                </Card>
                <Card className="m-6" title="Poslednje Novosti">
                        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                </Card>
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default App
