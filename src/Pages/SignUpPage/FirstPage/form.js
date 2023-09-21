import React from "react";

class PersonalDataForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'Имя',
            lastName: 'Фамилия',
            patronymic: 'Отчество',
            phone: 'Телефон',
            email: 'E-mail',
            post: 'Должность',
            isMale: false,
            birthDay: '2023-01-01'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(target, value, name);
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <input className='' type='text' name='firstName' value={this.state.firstName}
                       onChange={this.handleChange}/>
                <input className='' type='text' name='lastName' value={this.state.lastName}
                       onChange={this.handleChange}/>
                <input className='' type='text' name='patronymic'
                       value={this.state.patronymic} onChange={this.handleChange}/>
                <input className='' type='text' name='phone' value={this.state.phone}
                       onChange={this.handleChange}/>
                <input className='' type='text' name='email' value={this.state.email}
                       onChange={this.handleChange}/>
                <input type='text' name='post' value={this.state.post} onChange={this.handleChange}/>
                <select className='' name='isMale' value={this.state.isMale}
                        onChange={this.handleChange}>
                    <option value={true}>Мужчина</option>
                    <option value={false}>Женщина</option>
                </select>
                <input className='' name='birthDay' type='date' value={this.state.birthDay}
                       onChange={this.handleChange}/>
                <input className='' type='submit' value='Submit'/>
            </form>
        )
    }
}

export default PersonalDataForm;