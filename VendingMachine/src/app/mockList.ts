import { ProductsList } from "./productsList";

export const products : ProductsList[] = [
    {
        id: 1,
        name: "Drinks",
        productsList : [
        {
            ItemId: 1,
            ItemName : "Coke",
            ItemStock: 10,
            ItemPrice: 40
        },
        {
            ItemId: 2,
            ItemName : "Pepsi",
            ItemStock: 20,
            ItemPrice: 30
        },
        {
            ItemId: 3,
            ItemName : "ThumbsUp",
            ItemStock: 15,
            ItemPrice: 25
        },
    ]
},
    {
        id: 2,
        name: "Cookies",
        productsList: [
        {
            ItemId: 1,
            ItemName : "Oreo",
            ItemStock: 11,
            ItemPrice: 20
        },
        {
            ItemId: 2,
            ItemName : "Brittania",
            ItemStock: 21,
            ItemPrice: 25
        },
        {
            ItemId: 3,
            ItemName : "Parle",
            ItemStock: 15,
            ItemPrice: 15
        },
    ]
    }
]