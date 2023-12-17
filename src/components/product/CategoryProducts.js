import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Products from './Products'

const CategoryProducts = () => {

    const { categoryId } = useParams()
    const AllCategories = useSelector(state => state.category.data)
    const categoryItem = AllCategories.find(item => item.id === categoryId)
    
    console.log(categoryItem);
  return (
    <div>
        {categoryItem.name}
        <Products categoryName={categoryId} />
    </div>
  )
}

export default CategoryProducts