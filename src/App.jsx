import ApiTest from "./components/ApiTest"
import Likes from "./components/likes"
import Loading from "./components/Loading"
import Mad from "./components/Mad"
import Strict from "./components/Strict"
import { Suspense } from "react"

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <ApiTest/>
        <Mad text="Jeffrey"/>
        <Likes/>
        <Strict/>
      </Suspense>
    </div>
  )
}

export default App