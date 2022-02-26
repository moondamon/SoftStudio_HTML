function Membercard(props){
    return(
      <div className = "card">
        <div className="top">
          <div className="top-left">
            <h1 id="fontM">{props.firstname} {props.lastname}</h1>
            <h2 id="fontM">{props.id}</h2>
            <div id="fontL" dangerouslySetInnerHTML={{ __html: props.des }}>
              {/* {props.des} */}
            </div>
          </div>
          <div className="top-right">
            <img src={props.image} />
          </div>
        </div>
      </div>
    );
}

export default Membercard