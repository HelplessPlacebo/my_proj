import React from "react"

class ProfileStatus extends React.Component {

    componentDidUpdate(prevProps, prevState) {

        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }
    state = {
        StatusChanging: false,
        status: this.props.status
    }

    StatusChangingON = () => {
        //изменение поля для отрисовки, если сделать это не сет стейтом, то перерисовки не будет
        this.setState({StatusChanging: true})

    }
    StatusChangingOFF = () => {
        this.setState({StatusChanging: false})
        this.props.SetProfileStatus(this.state.status)

    }
    OnStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {

        return (
            <div>
                {!this.state.StatusChanging ?
                    <div>
                         <span onDoubleClick={this.StatusChangingON}>
                       {this.props.status || "the status is empty"
                       //проверка на наличие статуса, если его нет - показать  статус ис эмпти
                       }
                        </span>
                    </div>
                    :
                    <div>
                        <input onChange={this.OnStatusChange} onBlur={this.StatusChangingOFF} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus