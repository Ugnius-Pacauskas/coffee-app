import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons'
import { Formik, Field } from 'formik'

export default class ItemAdd extends React.Component
{
    constructor() {
        super();
        this.state = {
            showDialog: false,
            name: '',
            price: '',
            imageUrl: '',
        }

        this.showAddItemDialog = this.showAddItemDialog.bind(this)
    }

    showAddItemDialog() {
        this.setState(() => {
            return {
                showDialog: !this.state.showDialog,
            }
        })
    }

    imageChange(event) {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                showDialog: this.state.showDialog,
                name: this.state.name,
                price: this.state.price,
                imageUrl: reader.result,
            });
        }

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div className="col-lg-3 col-md-6">
                {
                    this.state.showDialog ?
                    <div className="item">
                        <Formik
                            initialValues={{name:'', price: '', imageUrl: ''}}
                            onSubmit={values =>
                                {
                                    this.props.addItemClicked(values);
                                    this.showAddItemDialog();
                                }
                            }
                            onChange={values => 
                            {
                                console.log(values)
                            }}
                            onReset={() => this.showAddItemDialog()}
                        >
                            {formikProps => 
                                <form>
                                    <div className="row">
                                        <div className="input col">
                                            <Field type="text" name="name" placeholder="Name" required/>
                                        </div>
                                        <div className="input col">
                                            <Field type="number" name="price" placeholder="Price" step="0.1" required/>
                                        </div>
                                    </div>
                                    {/* <div className="input">
                                        <Field type="file" name="imageUrl" placeholder="ImageFile" accept="image/*"/>
                                        <Field type="file" name="imageUrl" placeholder="ImageFile" accept="image/*" onChange={(event) => this.imageChange(event)}/>
                                    </div> */}
                                    <div className="image-preview">
                                        <img className = "image" src={this.state.imageUrl} alt=""></img>
                                    </div>
                                    <div className="row">
                                        <div className="input col">
                                            <button type="submit" className="btn btn-dark" onClick={formikProps.handleSubmit}>Add</button>
                                        </div>
                                        <div className="input col">
                                            <button className="btn btn-dark" onClick={formikProps.handleReset}>Cancel</button>
                                        </div>
                                    </div>
                                </form>
                            }
                        </Formik>       
                    </div>
                    : 
                    <div className="item" onClick={() => this.showAddItemDialog()}>
                        <div className = "icon-coffe">
                            <FontAwesomeIcon icon = {faCoffee} size="9x"/>
                        </div>
                        <div className = "icon-plus">
                            <FontAwesomeIcon icon = {faPlus} size="4x"/>
                        </div>
                    </div>
                }
            </div>
        )
    }
}