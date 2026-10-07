import './App.css'
import Scene from './Scene/Scene'
import SceneProvider from './Context/SceneProvider'
import Controls from './Controls/Controls'

function App() {
  return (
    <>
      <header className="header__container">
        <h1>Vinci 3D Scene</h1>
      </header>
      <SceneProvider>
        <main className="main__container">
          <Controls />
          <Scene />
        </main>
      </SceneProvider>
    </>
  )
}

export default App
