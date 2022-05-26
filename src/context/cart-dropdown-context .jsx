import { useState, createContext, useEffect } from "react"

const addCartItem = (cartItems, productToAdd) => {
    if (cartItems.find(item => item.id === productToAdd.id)) {
        return cartItems.map(item => {
            if (item.id === productToAdd.id) {
                return { ...item, quantity: item.quantity + 1 }
            } else { return item }
        })
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}
// 给购物车中某种物品加数量或者判断某种物品是否在购物车中，在的话加数量，不在则添加到购物车并设置数量为1
const redCartItem = (cartItems, productToRemove) => {

    let arr = [];

    cartItems.forEach(item => {
        if (item.id === productToRemove.id) {
            if (item.quantity > 1) {
                arr.push({ ...item, quantity: item.quantity - 1 })
            }
        } else { arr.push(item) }
    })

    return arr
}
const clearItem = (cartItems, productToRemove) => {
    return cartItems.filter(item => !(item.id === productToRemove.id))
}
// 给购物车中物品减数量，若数量小于1则去除这个物品
export const CartContext = createContext({
    appearance: false,
    setAppearance: () => { },
    addItemsToCart: () => { },
    redItemsToCart: () => { }

})
// 创建context 传入的对象是定义默认值用的，没啥用不这里不传都行
export const CartProvider = ({ children }) => {

    const [appearance, setAppearance] = useState(false);
    // 控制购物袋下拉菜单是否出现的钩子
    const [cartItems, setcartItems] = useState(JSON.parse(sessionStorage.getItem('key') || "[]"));
    // 控制购物车中物品数组的钩子

    useEffect(() => {
        const item = JSON.stringify(cartItems)
        sessionStorage.setItem('key', item)
    }, [cartItems])
    const addItemsToCart = (productToAdd) => {
        setcartItems(addCartItem(cartItems, productToAdd))
    }
    // 调用上面的方法讲物品加到购物车或＋1
    const redItemsToCart = (productToRemove) => {
        setcartItems(redCartItem(cartItems, productToRemove))
    }
    // 调用上面的方法将物品减1或移除购物车
    const clearItemFromCart = (productToRemove) => {
        setcartItems(clearItem(cartItems, productToRemove))
    }
    // 将物品移除购物车
    const value = { appearance, setAppearance, addItemsToCart, cartItems, redItemsToCart, clearItemFromCart }
    // 讲上述方法或数据传给对应需要的组件
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}