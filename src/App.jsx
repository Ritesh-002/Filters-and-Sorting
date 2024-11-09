import { createContext, useState } from 'react'
import './App.css'
import NavBar from './Components/navbar'
import Product from './Pages/product'
export const SelectionContext = createContext();
function App({children}) {
  const [selectedItems, setSelectedItems] = useState([])
  const [selectedItemsColors, setSelectedItemsColors] = useState([])
  const [selectedItemsPriceRange, setSelectedItemsPriceRange] = useState([10, 500])
  return (
    <SelectionContext.Provider value={{selectedItems, setSelectedItems, selectedItemsPriceRange, setSelectedItemsPriceRange, selectedItemsColors, setSelectedItemsColors}}>
      {children}
      <NavBar />
      <Product/>
    </SelectionContext.Provider>
  )
}

export default App
