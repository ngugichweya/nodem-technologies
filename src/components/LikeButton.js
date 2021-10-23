import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {

    state = {
        liked: false,
        count: 100
    }

    clicked = () => {
        this.setState({
            liked :!this.state.liked
        })
        if (!this.state.liked) this.state.count += 1 
            else this.state.count -= 1
        
    }

    render() {
        var btnClass, likesCounter

        btnClass = likesCounter = cx({
            'liked': this.state.liked,
            'like-button': !this.state.liked
          });
        
        return (
            <>
                <div className="main">
                    <h2>Like Buttons</h2>
                    <button onClick={this.clicked} className={btnClass}>
                        Like |  
                        <span className={likesCounter}>{this.state.count}</span> 
                    </button>
                </div>
                <div className="footer">
                    <i>ngugichweya@gmail.com</i> <br />
                </div>
                <style>{`
                    .main {
                        position: absolute;
                        left: 50%;
                        top: 15%;
                        -webkit-transform: translate(-50%, -50%);
                        transform: translate(-50%, -50%);
                    }
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-size: 1rem;
                        font-weight: bold;
                        padding: 5px 10px;
                        color: #1565c0;
                   }
                   .footer {
                    position: absolute;
                    left: 50%;
                    bottom: 5%;
                    -webkit-transform: translate(-50%, -50%);
                    transform: translate(-50%, -50%);
                }
                `}</style>
            </>
        );
    }
}