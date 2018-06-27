import React from 'react';
import './search-input.css';

function SearchInput({searchText, onSearchButtonClicked, onSearchTextChanged,handleKeyPress}) {
    //the above parameters work the same as aura:attribute in salesforce. the attribute names should match the names in the above object. 
    //However, here we can pass events directly;
    // but in lightning we register and handle events separately in the components using aura:registerEvent and aura:handler

return (
<div className="row">
    <div className="content">
        <div className="sign-in-fields">
            <h1>Enter a Place to see its Weather!</h1>
            <div>
            <input className="search-container" type="text" name="search-input-text" value= {searchText} onChange = {onSearchTextChanged}
            onKeyPress={handleKeyPress}/>
            </div>
        </div>

        <div className="col-xs-12 button-container">
            <button className="sign-in-btn" onClick={onSearchButtonClicked}>Search</button>
        </div>
    </div>
</div>


);
}

export default SearchInput;