import './style.css';

function Membercard(props){
    return(
      <div className = "card-container">
        <div className="card-detail">
          <div className="top-left">
            <h1 id="fontM">{props.firstname} {props.lastname}</h1>
            <h2 id="fontM">{props.id}</h2>
            <div id="fontL" dangerouslySetInnerHTML={{ __html: props.des }}>
              {/* {props.des} */}
            </div>
          </div>
          <div className="membercard-image">
            <img src={props.image} />
          </div>
        </div>
      </div>
    );
}

function Head(){
  return;
}

export default Membercard