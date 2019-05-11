import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class ItemAdd extends React.Component
{
    constructor() {
        super();
        this.state = {
            showDialog: false,
            imageUrl: '',
        }

        this.showAddItemDialog = this.showAddItemDialog.bind(this)
    }

    showAddItemDialog() {
        this.setState(() => {
            return {
                showDialog: !this.state.showDialog,
                imageUrl: ''
            }
        })
    }

    imageChange(event) {
        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                showDialog: this.state.showDialog,
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
                            initialValues={{name:'', price: '', imageUrl: '', imagePath: null}}
                            onSubmit={values =>
                                {
                                    let reader = new FileReader();
                                    let file = values.imageUrl;
                            
                                    reader.onloadend = () => {
                                        values.imageUrl = reader.result;
                                        this.props.addItemClicked(values);
                                        this.showAddItemDialog();
                                    }
                            
                                    reader.readAsDataURL(file)
                                }
                            }
                            onReset={() => this.showAddItemDialog()}
                            validationSchema={Yup.object({
                                name: Yup.string().max(23).required('Required'),
                                price: Yup.number().min(0).max(1000).required('Required'),
                            })}
                        >
                            {(formikProps) => 
                                <Form>
                                    <div className="row">
                                        <div className="input col">
                                            <Field type="text" name="name" placeholder="Name"/>
                                            <ErrorMessage name="name">
                                                {msg => <div className="field-error">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                        <div className="input col">
                                            <Field type="number" name="price" placeholder="Price" step="0.1"/>
                                            <ErrorMessage name="price">
                                                {msg => <div className="field-error">{msg}</div>}
                                            </ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="input">
                                        <input id="file" name="imagePath" type="file" accept="image/*" 
                                            onChange={(event) => {formikProps.setFieldValue("imageUrl", event.currentTarget.files[0]); this.imageChange(event);}} 
                                        />
                                    </div>
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
                                </Form>
                            }
                        </Formik>       
                    </div>
                    : 
                    <div className="item" onClick={() => this.showAddItemDialog()}>
                        <div className = "icon-coffee">
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