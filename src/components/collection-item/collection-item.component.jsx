import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem, toggleCartHidden } from "../../redux/cart/cart.actions";

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem, toggleCartHidden}) => {
    const {name, price, imageUrl} = item;
    return(
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="name">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted >Add to cart</CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleCartHidden:  () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CollectionItem);