import { Product } from "./product.js";

// Instructions say to name class MainCourse?  Think Dessert is correct.
export class Dessert extends Product
{
    constructor(name, price)
    {
        super(name, price)
    }
}