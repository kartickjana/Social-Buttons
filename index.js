const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <Button className={`${className}`}>{buttonTxt} </Button>;
};

const element = (
  //  Write your code here.
  <div cclassName="bgContainer">
    <h1 className="heading">Social Button</h1>
    <div className="buttonContainer">
      <Button buttonText="Like" className="like" />
      <Button buttonText="Comment" className="comment" />
      <Button buttonText="Share" className="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
