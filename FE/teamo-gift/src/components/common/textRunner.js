import '../../assets/styles/common/textRunner.scss';

function TextRunner({text}){

    return (<div className="text-runner content-center">
        <div className="runner-content">{text}</div>
    </div>)

}

export default TextRunner;