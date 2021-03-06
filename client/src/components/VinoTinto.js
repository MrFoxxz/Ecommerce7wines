import React from 'react';
import ProductCard from "./productcard";
import "../Styles/Cards.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from "../components/Redux/Actions/index.js"

class ProdCat extends React.Component {

    componentDidMount(){
     this.props.getProdCat(this.props.id)
    }

    render() {
        return (

            <div class="box5">
                {this.props.productcat.map(v =>

                    <ProductCard
                        name={v.name}
                        id={v.id}
                        description={v.description}
                        price={v.price}
                        stock={v.stock}
                        image={v.image}
                        quantity={v.quantity}
                        content={v.content}
                        percentage={v.percentage}
                        country={v.country}
                        colour={v.colour}
                    />
                )
                }
         </div>
         
        );
    }

}


function mapStateToProps(state) {
    return {
        productcat: state.productcat,
    }
}
    
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProdCat);
  