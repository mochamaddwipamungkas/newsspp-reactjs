import React from "react";
import * as Validator from 'validatorjs'

const Input = ({ label, type, name, onChange }) => {
    return (
        <div>
            <label>{label} :</label>
            <br />
            <input type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>

    )
}

const ShowErrors = ({ errors }) => {
    return (
        <ul style={{ color: 'red', marginLeft: '-20px' }}>
            {

                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default class FormRegistrasi extends React.Component {
    state = {
        email: '',
        password: '',
        nama: '',
        jurusan: '',
        gender: '',
        alamat: '',
        errors: []
    }

    handleSubmit = event => {
        event.preventDefault();

        const { email, password, nama, jurusan, gender, alamat } = this.state;
        let data = { email, password, nama, jurusan, gender, alamat };
        let rules = {
            nama: 'required',
            email: 'required|email',
            password: 'min:8|required',
            jurusan: 'required',
            gender: 'required',
            alamat: 'required'
        }

        let validation = new Validator(data, rules, {
            'required.nama': 'Nama tidak boleh kosong',
            'required.email': 'Email tidak boleh kosong',
            'required.jurusan': 'Jurusan tidak boleh kosong',
            'required.gender': 'Jenis Kelamin tidak boleh kosong',
            'required.alamat': 'Alamat tidak boleh kosong',
            'required.password': 'Password tidak boleh kosong',
            'min.password': 'Password harus 8 karakter'
        })
        validation.passes();

        this.setState({
            errors: [
                ...validation.errors.get('nama'),
                ...validation.errors.get('email'),
                ...validation.errors.get('jurusan'),
                ...validation.errors.get('gender'),
                ...validation.errors.get('alamat'),
                ...validation.errors.get('password')
            ]

        }, () => {
            if (this.state.errors.length === 0) {
                alert(`
                        nama: ${this.state.nama}
                        email: ${this.state.email}
                        jurusan: ${this.state.jurusan}
                        gender: ${this.state.gender}
                        alamat: ${this.state.alamat}
                    `);
                this.setState({
                    nama: '',
                    email: '',
                    jurusan: '',
                    gender: '',
                    alamat: '',
                    password: ''
                })
            }
        })

    }

    render() {
        const style = {
            width: '400px',
            margin: '100px auto 50px',
            border: '1px solid black',
            padding: '20px'
        }

        return (
            <div style={style}>
                {
                    this.state.errors && <ShowErrors errors={this.state.errors} />
                }
                <h4>Registration</h4>
                <form onSubmit={this.handleSubmit}>
                    <Input type="text" name="nama" label="Nama"
                        onChange={value => this.setState({ nama: value })}
                        defaultValue={this.state.nama} />
                    <Input type="email" name="email" label="Email"
                        onChange={value => this.setState({ email: value })}
                        defaultValue={this.state.email} />
                    <label>
                        Jrusan : <br /> <select
                            name="jurusan"
                            onChange={e => this.setState({ jurusan: e.target.value })}
                            defaultValue={this.state.jurusan}>
                            <option value="">Pilih Jurusan</option>
                            <option value="Teknik Informatika">Teknik Informatika</option>
                            <option value="Sistem Informasi">Sistem Informasi</option>
                            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
                        </select>
                    </label>
                    <label>
                        <br />
                        Jenis Kelamin : <br />
                        <input type="radio" value="Laki-laki" name="gender"
                            onChange={e => this.setState({ gender: e.target.value })} />Laki-laki
                        <input type="radio" value="Perempuan" name="gender"
                            onChange={e => this.setState({ gender: e.target.value })} />Perempuan
                    </label>
                    <label> <br />
                        Alamat : <br /><textarea cols="30" rows="10" name="alamat"
                            onChange={e => this.setState({ alamat: e.target.value })} value={this.state.alamat}></textarea>
                    </label>
                    <Input type="password" name="password" label="Password"
                        onChange={value => this.setState({ password: value })}
                        defaultValue={this.state.password} />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
