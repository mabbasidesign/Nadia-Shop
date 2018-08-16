import React, { Component } from 'react';
import { getProducts } from '../common/products';

class Menu extends Component {
    state = {

        // tags: ['tag1', 'tag2', 'tag3'],

        products: getProducts()

     }

    render() { 
        return ( 
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.products.map( p => 
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.price}</td>
                            </tr>
                    )}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Menu;