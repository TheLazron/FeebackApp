import PropTypes from 'prop-types';

function Header({Text}){

    return(
        
            <header style={{backgroundColor:"rgba(0,0,0,0.5)", color: '#ff6a95'}}>
                <div classlist="container">
                    <h2>{Text}</h2>
                </div>
            </header>
        
        


    )

}

Header.defaultProps={
    Text: 'Default Text',
}

Header.propTypes={
    Text: PropTypes.string,
}

export default Header;