

function IndivItems(props) {
    return (
          <div class="item">
            <h2>{props.item}</h2>
            <p>{props.expiry}</p>
          </div>
    );
  }
  
  export default IndivItems;