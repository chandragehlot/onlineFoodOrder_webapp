import React, { Component } from 'react';

function ToggleHOC(WrappedComponent) {
    class ToogleWrapper extends Component {
        constructor(props){
            super(props)
            this.state = {
                toggle : true
            }
        }

        ToogleState = () => {
            this.setState({
                toggle : !this.state.toggle
            })
        }

        render() {
            const { toggle } = this.state;
            return (
                <div className='toogle-wrapper'>
                    <WrappedComponent {...this.props} toggle={toggle} toggleState={this.ToogleState}></WrappedComponent>
                </div>
            );
        }
    }
    return ToogleWrapper;
}

export {ToggleHOC};

