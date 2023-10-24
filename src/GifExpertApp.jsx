import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;

      setCategories([newCategory, ...categories]);
      //categories.push(newCategory);
      //setCategories(cat => [...categories, 'Persona 5']);
  }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Inputs */}
        <AddCategory 
          onNewCategory={onAddCategory}
        />

        {/* Listado de Gif */}
        {categories.map(category => (
            <GifGrid 
              key={category} 
              category={category}/>
          ))
        }
    </>
  )
}
