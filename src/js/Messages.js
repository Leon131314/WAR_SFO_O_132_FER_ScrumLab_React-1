import React from "react";

class Messages extends React.Component{
    render(){
        return (
            <div className="message-container">
                <div className="message-info">
                    <div className="message-info-icon1">
                        <i className="fas fa-info-circle fa-4x" aria-hidden="true"></i>
                    </div>
                        <div className="message-info-text">Masz już 99 przepisów, nieźle!</div>
                    <div className="message-info-icon2">
                        <i className="fas fa-window-close fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="message-warning">
                    <div className="message-warning-icon1">
                        <i className="fas fa-exclamation-circle fa-4x" aria-hidden="true"></i>
                    </div>
                        <div className="message-warning-text">Pamiętaj, aby dodać plan!</div>
                    <div className="message-warning-icon2">
                        <i className="fas fa-window-close fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="message-success">
                    <div className="message-success-icon1">
                        <i className="fas fa-check-circle fa-4x" aria-hidden="true"></i>
                    </div>
                        <div className="message-success-text">Świetnie że jesteś! Udanego planowania i smacznego! :)</div>
                    <div className="message-success-icon2">
                        <i className="fas fa-window-close fa-2x" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )}
}

export default Messages;